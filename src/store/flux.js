import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/analytics"
import "firebase/auth"
import "firebase/storage"

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
        firebase
          .firestore()
          .collection("events")
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
        firebase
          .firestore()
          .collection("jobs")
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
        firebase
          .firestore()
          .collection("programs")
          .get()
          .then(querySnapshot => {
            let programs = []
            querySnapshot.forEach(doc => {
              programs.push(doc.data())
            })
            setStore({ programs: programs })
          })
      },
      submitSyllabusRequest: async (fullName, email, phone, syllabus) => {
        return firebase
          .firestore()
          .collection("submissions")
          .add({
            full_name: fullName,
            email_address: email,
            phone_number: phone,
            requested_syllabus: syllabus,
          })
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id)
            return true
          })
          .catch(function (error) {
            console.error("Error adding document: ", error)
            return error
          })
      },
    },
  }
}

export default getState
