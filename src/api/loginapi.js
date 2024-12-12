import { api } from "./indexapi";

const login = api.enhanceEndpoints({
    addTagTypes: ["login"]
}).injectEndpoints({
    endpoints: (builder) => ({
        postLogin: builder.mutation({
            query: (body) => ({
                url: "/login",
                method: "POST",
                body
            }),
        })
    })
})
;

export const {usePostLoginMutation} = login