import { baseApi } from "../baseApi";

const dealerApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        getDealerData: build.query({
            query: (dealerCode) => ({
                url: `/dealer/get-dealer/${dealerCode}`,
                method: "GET",
            }),
        })
    })
})


export const { useGetDealerDataQuery } = dealerApi;