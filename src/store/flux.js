import firebase from "gatsby-plugin-firebase"

const COLLECTION_TYPES = ["events", "jobs", "programs", "skill_pathways"];
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      navMenu: [
        { label: "Jobs", to: "#jobs" },
        { label: "Career Paths", to: "#career" },
        { label: "Coaching", to: "#coaching" },
        { label: "Events", to: "#events" },
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
      events: [],
      jobs: [],
      programs: [],
      skill_pathways: [],
      authenticatedUser: null
    },
    actions: {
        analytics: null,
      // Use getActions to call a function within a fuction
      initApp: function(){
        console.log('Firebase initialized')

        let actions = getActions()
        actions.get("jobs", { limit: 6, orderby: 'posted_date', reducer: (data) => {
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
            actions.get("events", { limit: 6, orderby: 'event_date' })
            actions.get("programs")
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

        this.analytics = firebase.analytics();
      },
      get: (type, options={}) => new Promise((resolve, reject) => {
        if (!COLLECTION_TYPES.includes(type)) throw Error("Invalid collection type: ", type)
        const store = getStore();
        window.store = store;

        // add defaults
        options = { limit: null, reducer: null, ...options }

        let query = firebase.firestore().collection(type);
        
        if(options.orderby) query = query.orderBy(options.orderby, 'desc');

        if(store[type].length > 0){
            console.log("Last visible", store[type][store[type].length-1].id)
            query = query.startAfter(store[type][store[type].length-1].cursor);
        } 
        // Pagination???
        if(options.limit) query = query.limit(options.limit);
        
        console.log(`Requested ${type}`, options)
        query.get()
          .then(querySnapshot => {
                let data = []
                querySnapshot.forEach(doc => {
                    data.push({ id: doc.id, cursor: doc, ...doc.data() })
                })
                if(options.reducer) data = options.reducer(data)
                data = data.sort((a,b) => a.provider_name > b.provider_name ? 1 : -1);
                setStore({ [type]: store[type].concat(data) })
                resolve(data)
                console.log(`Loaded ${type}`, data)
          })
      }),
      logEvent: function(name, data={}){
        this.analytics.logEvent(name);
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

