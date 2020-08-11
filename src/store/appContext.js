import React, { useState, useEffect } from "react"
import getState from "./flux.js"
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/analytics"
import "firebase/auth"
import "firebase/storage"
import {firebaseConfig} from "../components/Firebase/Config/dev_config"

export const Context = React.createContext(false)

const InjectContext = PassedComponent => {
  const StoreWrapper = props => {
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
      if (typeof window !== "undefined" && !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
        firebase
          .auth()
          .signInAnonymously()
          .catch(function (error) {
            var errorCode = error.code
            var errorMessage = error.message
            console.error(`Error: ${errorCode}. ${errorMessage}`)
          })
        state.actions.initApp()
      }
    }, [])

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    )
  }
  return StoreWrapper
}

export default InjectContext
