// import { createStore, } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter-Slice';
import authReducer from './Auth-Slice';

//configureStore is combine multiple slice or reducer bing together in reducer
const store = configureStore({
    reducer:{
        counter : counterReducer,
        auth: authReducer
    }
});

export default store;