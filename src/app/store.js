import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/indexapi";

export default configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([api.middleware])
})
