import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = {counter:0, showCounter:true}

//import createSlice and pass counterSlice object as an argument
// this can make state should be mutable
//here you can mutate the existing state 
const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
            state.showCounter= !state.showCounter
        }
    }
}); 
export const action = counterSlice.actions;
export default counterSlice.reducer;