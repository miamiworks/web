import React, { useState, useEffect } from "react"
import getState from "./flux.js"
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/analytics"
import "firebase/auth"
import "firebase/storage"
import {firebaseConfig} from "../components/Firebase/Config/web_config"

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
            firebase.initializeApp(firebaseConfig)
            state.actions.initApp()

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

