import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/analytics"
import "firebase/auth"
import "firebase/storage"

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      navMenu: [
          {label: "Jobs", to:"#jobs"},
          {label: "Career Paths", to:"#career"},
          {label: "Coaching", to:"#coaching"},
          {label: "Events", to:"#events"},
      ],
      homepageData: {
        keySkillsMenu:[
          {
            label: "Software Engineering",
            key: "software-engineering",
          },
          {
            label: "UX Design",
            key: "ux-design",
          },
          {
            label: "Data Science",
            key: "data-science",
          },
          {
            label: "Cyber Security",
            key: "cyber-security",
          },
          {
            label: "Digital Marketing",
            key: "digital-marketing",
          },
          {
            label: "Machine Learning",
            key: "machine-learning",
          },
          {
            label: "IT Administration",
            key: "it-administration",
          },
        ],
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
    },
    actions: {
      // Use getActions to call a function within a fuction
      initApp: () => {
        let actions = getActions()
        actions.get("events")
        actions.get("jobs")
        actions.get("programs")
      },
      getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },
      get:function (type){
        if(!["events", "jobs", "programs"].includes(type)) throw Error("Invalid collection type: ", type);
        firebase
          .firestore()
          .collection(type)
          .get()
          .then(querySnapshot => {
            let data = []
            querySnapshot.forEach(doc => {
              data.push({id: doc.id, ...doc.data()})
            })
            console.log(type, data)
            setStore({ [type]: data.slice(0, 15) })
          })
      },
      submitRequest: async (type, fullName, email, phone, related_id=null) => {
        return firebase
          .firestore()
          .collection("submissions")
          .add({
            full_name: fullName,
            email_address: email,
            phone_number: phone,
            type,
            related_id
          })
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id)
            return true
          })
          .catch(function (error) {
            console.error("Error adding document: ", error)
            return { message: "There was an error saving your request" };
          })
      },
    },
  }
}

export default getState
