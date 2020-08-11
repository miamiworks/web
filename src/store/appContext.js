import React, { useState, useEffect } from "react"
import getState from "./flux.js"
import { FirebaseAuth } from "../components/Firebase/FirebaseApp"

FirebaseAuth.signInAnonymously().catch(function (error) {
  var errorCode = error.code
  var errorMessage = error.message
  console.error(`Error: ${errorCode}. ${errorMessage}`)
})

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
      state.actions.initApp()
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
