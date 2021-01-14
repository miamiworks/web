import firebase from "gatsby-plugin-firebase"
import dayjs from "dayjs";
import algoliasearch from "algoliasearch";
const COLLECTION_TYPES = ["events", "jobs", "programs", "skill_pathways"];
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      navMenu: [
        { label: "Jobs", to: "/jobs" },
        { label: "Career Paths", to: "#career" },
        { label: "Coaching", to: "#coaching" },
      ],
      homepageData: {
        keySkillsMenu: [],
        meta: [
          { name: "charset", content: "UTF-8" },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1",
          },
          { httpEquiv: "X-UA-Compatible", content: "IE=edge,chrome=1" },
        ],
      },
      events: { data: [], loading: false },
      jobs: { data: [], loading: false },
      programs: { data: [], loading: false },
      skill_pathways: { data: [], loading: false },
      authenticatedUser: null,
      algoliaLoaded: false,
    },
    actions: {
        algolia: algoliasearch(process.env.GATSBY_AGOLIA_ID, process.env.GATSBY_AGOLIA_KEY), 
        analytics: null,
      // Use getActions to call a function within a fuction
      initApp: function(){
        console.log('Firebase initialized')

        let actions = getActions()
        actions.get("jobs", { limit: 8, orderby: 'posted_date', reducer: (data) => {

            for(let i=0;i<data.length;i++){
                for(let j=0;j<data.length-i-1;j++){
                    if(
                        (data[j].company_posting.toLowerCase() !==data[j+1].company_posting.toLowerCase()) &&
                        (data[j].skill_pathway.toLowerCase() !== data[j+1].skill_pathway.toLowerCase())
                    ){
                        let b=data[j+1];
                        data[j+1]=data[j];
                        data[j] = b; 
                    }
                }
            }
            
            return data
        }}).then(() => {
            // actions.get("events", { limit: 6, orderBy: 'event_date' })
            actions.get("programs")
            actions.get("events", { limit: 6, orderby: 'event_date', filter:(e)=>{
                // console.log("Event date", e.event_date, dayjs(e.event_date));

                return dayjs(e.event_date).isAfter(dayjs())
            } });
        })
        actions.get("skill_pathways")

        firebase.auth().signInAnonymously()
            .catch(function (error) { 
                console.log(`Firebase signin error: ${error.code} ${error.message}`)
            })
            .then(() => {
                
                firebase.auth().onAuthStateChanged(function (user) { 
                    if (user) { 
                        var isAnonymous = user.isAnonymous; 
                        var uid = user.uid; 
                        let currURl = window.location.href; 
                        let currNow = Date.now(); 
                        let currNew = new Date();
                        let currDate = Date() 
                        firebase
                            .firestore()
                            .collection("user")
                            .doc(uid)
                            .collection("login")
                            .doc(currNew.toString())
                            .set({ datenow: currNow, datenew: currNew, date: currDate, urllogin: currURl }) 
                            .then(function () { 
                                console.log("added to db login by user:",uid)
                                setStore({ authenticatedUser: uid })
                            })
                    }
                });
            });

            // actions.uploadToAlgolia();

        this.analytics = firebase.analytics();
      },
      uploadToAlgolia: async function(type='jobs'){

        // initialize algolia
        const algolia = algoliasearch(process.env.GATSBY_AGOLIA_ID, process.env.GATSBY_AGOLIA_CREATE_KEY);
        // get jobs from firebase
        const querySnapshot = await firebase.firestore().collection(type).get();
        let jobs = []
        querySnapshot.forEach(doc => {
            // fetch data inside each collection object
            jobs.push({ id: doc.id, cursor: doc, ...doc.data() })
        })
        
        // add objectID to avoid duplicates (algolia will take care of replacing instead of inserting)
        // remove "cursor" property because JSON serialization gives error with it
        jobs = jobs.map(j => {
            delete j.cursor;
            delete j.job_description;
            j.objectID = j.id;
            return j;
        });
        
        // initialize algolia index (similar to firebase collection)
        const index = algolia.initIndex("prod_jobs");
        try{
            // save new jobs into the algolia index
            const { objectIDs } = index.saveObjects(jobs)
            console.log("Algolia initialized", objectIDs);
        }
        catch(err){
            console.log("Error initializeing algolia",err);
        }
      },
      get: (type, options={}) => new Promise((resolve, reject) => {
        if (!COLLECTION_TYPES.includes(type)) throw Error("Invalid collection type: ", type)
        const store = getStore();
        setStore({ [type]: { ...store[type], loading:true }})
        window.store = store;

        // add defaults
        options = { limit: null, reducer: null, ...options }

        let query = firebase.firestore().collection(type);
        
        if(options.orderby) query = query.orderBy(options.orderby, 'desc');

        if ( store[type].data.length > 0 ) {
          query = query.startAfter(
            store[type].data[store[type].data.length - 1].cursor
          )
        } 
        // Pagination???
        if(options.limit) query = query.limit(options.limit);
        
        // console.log(`Requested ${type}`, options)
        query.get()
          .then(querySnapshot => {
                let data = []
                querySnapshot.forEach(doc => {
                    data.push({ id: doc.id, cursor: doc, ...doc.data() })
                })
                if(options.filter) data = data.filter(options.filter)
                if(options.reducer) data = options.reducer(data)
                data = data.sort((a,b) => a.provider_name > b.provider_name ? 1 : -1);
                setStore({ [type]: { loading: false, data: store[type].data.concat(data) }})
                resolve(data)
                // console.log(`Loaded ${type}`, data)
          })
      }),
      logEvent: function(name, data={}){
        this.analytics.logEvent(name);
      },
      search: async function(query){
        let actions = getActions()
        const index = actions.algolia.initIndex("prod_jobs");

        try{
            const results = await index.search(query)
            console.log("Results", results);
            setStore({ jobs: { data: results.hits, loading: false } })
        }
        catch(err){
            console.log("Error searching algolia",err);
        }
      },
      submitRequest: async function(
        type,
        fullName,
        email,
        phone,
        related_id = null,
        data={}
      ){
        const store = getStore();
        const _payload = {
            full_name: fullName,
            email_address: email,
            phone_number: phone,
            type,
            related_id,
            program_name: data.program_name,
            provider_contact_email: data.provider_contact_email,
            provider_contact_name: data.provider_contact_name,
            user: store.authenticatedUser,
            date: new Date()
          };

        this.analytics.logEvent('request_'+type, {
            type,
            related_id,
            program_name: data.program_name
        });

        
        return firebase
          .firestore()
          .collection("submissions")
          .add(_payload)
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id)
            return true
          })
          .catch(function (error) {
            console.error("Error adding document: ", error)
            return { message: "There was an error saving your request" }
          })
      },
    },
  }
}

export default getState

