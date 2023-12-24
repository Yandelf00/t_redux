import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const counterSlice = createSlice({
    name : 'counter',
    initialState : {counter : 0 },
    reducers : {
        increment(state) {
            if (state.counter!==null)
            {
                state.counter++;
            }
        },
        decrement(state) {
            if (state.counter!==null)
            {
                state.counter--;
            }
        }
         
    }
})


const persistedReducer = persistReducer(persistConfig, counterSlice.reducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const actions = counterSlice.actions;
export default store;

