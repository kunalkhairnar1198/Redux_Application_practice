// import { createStore, } from 'redux';
import {createSlice,configureStore } from '@reduxjs/toolkit';

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

const initialAuthState = {
    isAuthenticated: false, user:''
}

const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state,action){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }    
})

//configureStore is combine multiple slice or reducer bing together in reducer
const store = configureStore({
    reducer:{
        counter : counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const action = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;