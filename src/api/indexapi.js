import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8000/api/",
        prepareHeaders:  (headers, { getState }) => {
            headers.set(
            "Authorization", "Bearer eyJhbGciOiJIUzI1NiIsIn"
        );
        headers.set(
            "Accept", "application/json"
        );
        return headers
    }
    }),
    endpoints: () => ({

    }) 
})
