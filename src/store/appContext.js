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
            console.log("measurementId",process.env.GATSBY_MEASUREMENT_ID)
            state.actions.initApp(firebase)
        }
    }, [])

  return <Context.Provider value={state}>{children}</Context.Provider>
}

export default StoreWrapper;

