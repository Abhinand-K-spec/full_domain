import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CountSlice'


export const counterStore = configureStore({
    reducer:{
        counter : counterReducer
    }
})