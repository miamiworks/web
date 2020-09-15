import React, { useState, useEffect } from "react"
import getState from "./flux.js"

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
        state.actions.initApp()
    }, [])

  return <Context.Provider value={state}>{children}</Context.Provider>
}

export default StoreWrapper;

