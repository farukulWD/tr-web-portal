"use client";
import React, { useEffect } from "react";
import OrderForm from "./OrderForm";
import OrderState from "./OrderState";
import OrderTable from "./OrderTable";
import { useCreatOrderMutation, useGetDealerOrderQuery } from "@/redux/api/orderApi/orderApi";
import GlobalSkeletonTable from "@/components/globalComponents/GlobalSkeletonTable";
import { TDealerOrder } from "@/types";

function OrderEntry() {
 
 
  const { data: orderData, isLoading } = useGetDealerOrderQuery(undefined);


  return (
    <>
      { isLoading ? (
        <GlobalSkeletonTable />
      ) : (
        <div className="overflow-hidden flex flex-col gap-4">
          <div className="sm:flex justify-between">
            <div>
              <h3 className="text-xl text-balance font-bold">Order Entry</h3>
              <p className="text-gray">You can Order from here</p>
            </div>
            <div>
              <p>Current Balance : 0</p>
              <p>Remining Balance: 0</p>
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
