"use client";
import React, { useEffect } from "react";
import OrderForm from "./OrderForm";
import OrderState from "./OrderState";
import OrderTable from "./OrderTable";
import {
  useCreateOrderMutation,
  useGetDealerOrderQuery,
} from "@/redux/api/orderApi/orderApi";
import GlobalSkeletonTable from "@/components/globalComponents/GlobalSkeletonTable";
import { TDealerOrder } from "@/types";
import { useAppSelector } from "@/redux/hook";
import { useGetDealerDataQuery } from "@/redux/api/dealerApi/dealerApi";

function OrderEntry() {
  const { user } = useAppSelector((state) => state.auth);
  const { data: orderData, isLoading } = useGetDealerOrderQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
console.log(orderData, "orderData");
  const { data, isLoading: dealerLoading } = useGetDealerDataQuery(user?.code, {
    skip: !user?.code,
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      {isLoading || dealerLoading ? (
        <GlobalSkeletonTable />
      ) : (
        <div className=" flex flex-col gap-4">
          <div className="sm:flex justify-between">
            <div>
              <h3 className="text-xl text-balance font-bold">Order Entry</h3>
              <p className="text-gray">You can Order from here</p>
            </div>
            <div>
              <p>Current Balance ....: {data?.data?.money || 0}</p>
              <p>
                Remaining Balance ..:{" "}
                {data?.data?.money - (orderData?.data?.total ?? 0)}
              </p>
            </div>
          </div>
          <OrderState>
            <OrderForm orderId={orderData?.data?._id as string} />
            <OrderTable orderData={orderData?.data as TDealerOrder} />
          </OrderState>
        </div>
      )}
    </>
  );
}

export default OrderEntry;
