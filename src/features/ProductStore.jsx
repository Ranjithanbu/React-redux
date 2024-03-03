import { configureStore } from "@reduxjs/toolkit";
import ProSlice from "./ProductSlice";

export const ProductConfig = configureStore({
    reducer: {
        productReducer: ProSlice
    }
})