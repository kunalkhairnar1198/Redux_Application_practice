// import { createStore, } from 'redux';
import {createSlice,configureStore } from '@reduxjs/toolkit';

const initialState = {counter:0, showCounter:true}

//import createSlice and pass counterSlice object as an argument
// this can make state should be mutable
//here you can mutate the existing state 
const counterSlice = createSlice({
    name:'counter',
    initialState,
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

//configureStore is combine multiple slice or reducer bing together in reducer
const store = configureStore({
    reducer:counterSlice.reducer
});
export const action = counterSlice.actions

export default store;