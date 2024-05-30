import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slice";
import edicionSlice from "./edicionSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        edicion: edicionSlice,
    },
});