import { FirebaseDB } from "../components/Firebase/FirebaseApp"
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      events: [],
      jobs: [],
      programs: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      initApp: () => {
        let actions = getActions()
        actions.getEvents()
        actions.getJobs()
        actions.getPrograms()
      },
      getEvents: () => {
        FirebaseDB.collection("events")
          .get()
          .then(querySnapshot => {
            let events = []
            querySnapshot.forEach(doc => {
              events.push(doc.data())
            })
            setStore({ events: events })
          })
      },
      getJobs: () => {
        FirebaseDB.collection("jobs")
          .get()
          .then(querySnapshot => {
            let jobs = []
            querySnapshot.forEach(doc => {
              jobs.push(doc.data())
            })
            setStore({ jobs: jobs })
          })
      },
      getPrograms: () => {
        FirebaseDB.collection("program")
          .get()
          .then(querySnapshot => {
            let programs = []
            querySnapshot.forEach(doc => {
            console.log("doc", doc.data())
              programs.push(doc.data())
            })
            setStore({ programs: programs })
          })
      },
      submitSyllabusRequest: () => {},
    },
  }
}

export default getState
