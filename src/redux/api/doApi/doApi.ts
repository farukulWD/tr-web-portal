import { TResponse } from "@/types";
import { baseApi } from "../baseApi";

const doApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDo: build.mutation<TResponse<any>, { orderId: string }>({
      query: (orderId) => ({
        url: "/do/make-do",
        method: "POST",
        data: orderId,
      }),
      invalidatesTags: ["productOrder","dealer", "order"],
    }),
    getUndeliveredProducts: build.query<TResponse<any>, number>({
      query: (dealerCode) => ({
        url: `/do/get-undelivered-products-by-dealer/${dealerCode}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateDoMutation, useGetUndeliveredProductsQuery } = doApi;
