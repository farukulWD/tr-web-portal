import { TResponse } from "@/types";
import { baseApi } from "../baseApi";

const doApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createDo: build.mutation<TResponse<any>, { orderId: string }>({
            query: (orderId) => ({
                url: "/do/make-do",
                method: "POST",
                data: orderId
            }),
            invalidatesTags:["productOrder"]
        })
    })
})



export const { useCreateDoMutation } = doApi