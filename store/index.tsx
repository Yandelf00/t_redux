import { configureStore, createSlice } from "@reduxjs/toolkit";


const getInitialState = () => {
    const isServer = typeof window === 'undefined';
    
    // If it's the server, return a default state
    if (isServer) {
      return { counter: 0 };
    }
  
    // If it's the client, retrieve the state from local storage
    const storedState = localStorage.getItem("counterState");
    return storedState ? JSON.parse(storedState) : { counter: 0 };
};

const counterSlice = createSlice({
    name : 'counter',
    initialState : getInitialState(),
    reducers : {
        increment(state, action) {
            state.counter++;
         },
        decrement(state, action) {
            state.counter--;
         }
    }
})


export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
})

store.subscribe(() => {
    localStorage.setItem("counterState", JSON.stringify(store.getState()));
});
export default store;

