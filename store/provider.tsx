"use client"
import React from "react"
import store from "."
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from "redux-persist/es/persistStore"


export function ReduxProvider({children} : {children:React.ReactNode}) {
    let persistor = persistStore(store);
    return <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
}