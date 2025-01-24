"use client";
import React from "react";
import OrderForm from "./OrderForm";
import OrderState from "./OrderState";
import OrderTable from "./OrderTable";
import { useGetDealerOrderQuery } from "@/redux/api/orderApi/orderApi";
import GlobalSkeletonTable from "@/components/globalComponents/GlobalSkeletonTable";
import { TDealerOrder } from "@/types";

function OrderEntry() {
  const { data: orderData, isLoading } = useGetDealerOrderQuery(undefined);

  return (
    <>
      {isLoading ? (
        <GlobalSkeletonTable />
      ) : (
        <div className="overflow-hidden">
          <OrderState>
            <OrderForm isLoading={isLoading} orderId={orderData?.data?._id as string} />
            <OrderTable orderData={orderData?.data as TDealerOrder}/>
          </OrderState>
        </div>
      )}
    </>
  );
}

export default OrderEntry;
