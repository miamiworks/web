import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/analytics"
import "firebase/auth"
import "firebase/storage"

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
    },
    actions: {
      // Use getActions to call a function within a fuction
      initApp: (firebase) => {
        let actions = getActions()
        actions.get("events", 15)
        actions.get("jobs", 15)
        actions.get("programs")
        actions.get("skill_pathways")

        firebase.analytics();
      },
      get: (type, limit=null) => {
        if (!["events", "jobs", "programs", "skill_pathways"].includes(type))
          throw Error("Invalid collection type: ", type)
        let query = firebase.firestore().collection(type);
        
        // Pagination???
        if(limit) query.limit(limit);
        
        query.get()
          .then(querySnapshot => {
            let data = []
            querySnapshot.forEach(doc => {
              data.push({ id: doc.id, ...doc.data() })
            })
            if(type==="jobs") {
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
            }
            setStore({ [type]: data })
          })
      },
      submitRequest: async (
        type,
        fullName,
        email,
        phone,
        related_id = null
      ) => {
        return firebase
          .firestore()
          .collection("submissions")
          .add({
            full_name: fullName,
            email_address: email,
            phone_number: phone,
            type,
            related_id,
          })
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

