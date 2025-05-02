"use client";
import { useGetDealerDataQuery } from "@/redux/api/dealerApi/dealerApi";
import { setDealer } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useEffect } from "react";

function DealerDashboardPage() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { data: dealerData, isLoading: dealerLoading } = useGetDealerDataQuery(
    user?.code,
    {
      skip: !user?.code,
      refetchOnMountOrArgChange: true,
    }
  );
  useEffect(() => {
    if (dealerData) {
      dispatch(setDealer(dealerData?.data));
    }
  }, [user?.code]);
  return <div>Dealer Dashboard</div>;
}

export default DealerDashboardPage;
