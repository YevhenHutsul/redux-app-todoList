import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./sliceUser";

export default configureStore({
    reducer:{
        todo: todoSlice,
    },
})