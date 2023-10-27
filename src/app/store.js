import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../slice/userslice.js";

export default configureStore({
    reducer:{
        user:userReducer,
    },
});