import { TDealerOrder, TResponse } from "@/types";
import { baseApi } from "../baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    creatOrder: build.mutation<
      TResponse<any>,
      { orderType: "confirm" | "draft" }
    >({
      query: ({ orderType }) => ({
        url: "/order/create",
        method: "POST",
        data: orderType,
      }),
    }),

    getDealerOrder: build.query<TResponse<TDealerOrder>, undefined>({
      query: () => ({
        url: "/order/get-dealer-order",
        method: "Get",
      }),
      providesTags:["productOrder"]
    }),
    addProductInOrder: build.mutation<
      TResponse<any>,
      { productCode: string; orderId: string; quantity: number }
    >({
      query: (productData) => ({
        url: "/order/add-product-on-order",
        method: "PATCH",
        data: productData,
      }),
      invalidatesTags:["productOrder"]
    }),
    deleteProductFromOrder: build.mutation<
      TResponse<any>,
      { orderId: string; productId: string }
    >({
      query: (productData) => ({
        url: "/order/delete-product-from-order",
        method: "DELETE",
        data: productData,
      }),
      invalidatesTags:["productOrder"]
    }),
    
  }),
});

export const {
  useCreatOrderMutation,
  useAddProductInOrderMutation,
  useDeleteProductFromOrderMutation,
  useGetDealerOrderQuery,
} = orderApi;
