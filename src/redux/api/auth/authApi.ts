import { TResponse } from "@/types";
import { baseApi } from "../baseApi";
import { TUser } from "@/redux/features/auth/authSlice";

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
        getSingleUser: build.query<TResponse<TUser>, undefined>({
            query: () => ({
              url: "/users/get-user",
              method: "GET",
            }),
          }),
    }),
    overrideExisting: false,
})


export const {useLoginMutation,useLogoutMutation,useGetSingleUserQuery}=authApi


