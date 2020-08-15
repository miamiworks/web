import React, { useState, useEffect } from "react"
import getState from "./flux.js"
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/analytics"
import "firebase/auth"
import "firebase/storage"

export const Context = React.createContext(false);

const StoreWrapper = ({children})=> {
    const [state, setState] = useState(
        getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
            setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
            }),
        })
    )

    useEffect(() => {
        if (typeof window !== "undefined") {
            firebase.initializeApp({
                apiKey: process.env.GATSBY_API_KEY,
                authDomain: "miami-works.firebaseapp.com",
                databaseURL: "https://miami-works.firebaseio.com",
                projectId: "miami-works",
                storageBucket: "miami-works.appspot.com",
                messagingSenderId: "222583667104",
                appId: "1:222583667104:web:961b7f076b71de9547ccc5",
                measurementId: process.env.GATSBY_MEASUREMENT_ID
            })
            state.actions.initApp(firebase)

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
                        console.log("Logged in change: Anonimus:", isAnonymous, "-", uid) 
                        firebase
                            .firestore()
                            .collection("user")
                            .doc(uid)
                            .collection("login")
                            .doc(currNew.toString())
                            .set({ datenow: currNow, datenew: currNew, date: currDate, urllogin: currURl }) 
                            .then(function () { 
                                console.log("added to db login by user:",uid)
                            })
                    }
                });
            });
        }
    }, [])

  return <Context.Provider value={state}>{children}</Context.Provider>
}

export default StoreWrapper;

