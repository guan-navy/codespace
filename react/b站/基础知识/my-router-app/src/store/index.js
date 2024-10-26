import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userinfo";
const store = configureStore({
    reducer:{
        userinfo:userSlice
    }
})

export default store