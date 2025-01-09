import { baseApi } from "../baseApi";

const authApi =baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (data) => {
                console.log(data)
                return {
                    url: '/auth/login',
                    method: 'POST',
                    data: data,
                }
            },
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


export const {useLoginMutation,useLogoutMutation}=authApi


