import { configureStore, createSlice } from "@reduxjs/toolkit";


const getInitialState = () => {
    if (typeof window !== 'undefined') {
      const storedState = localStorage.getItem("counterSstate");
      return storedState ? JSON.parse(storedState) : { counter: 0 };
    }
    else{
        return;
    }
  };

const counterSlice = createSlice({
    name : 'counter',
    initialState : getInitialState(),
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


export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
})

store.subscribe(() => {
    localStorage.setItem("counterSstate", JSON.stringify(store.getState()));
});
export default store;

