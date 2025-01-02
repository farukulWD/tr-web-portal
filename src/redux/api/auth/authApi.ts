import { baseApi } from "../baseApi";

const authApi =baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        register: build.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        logout: build.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
        }),
    }),
    overrideExisting: false,
})


export const {useLoginMutation,useRegisterMutation,useLogoutMutation}=authApi


