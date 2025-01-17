import { TProduct, TResponse } from "@/types";
import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    geltAllProducts: build.query<TResponse<TProduct[]>, undefined>({
      query: () => ({
        url: "/product/get-all",
        method: "GET",
      }),
    }),
  }),
});

export const { useGeltAllProductsQuery } = productApi;
