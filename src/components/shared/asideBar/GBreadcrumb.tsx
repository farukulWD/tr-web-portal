"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { useGetDealerDataQuery } from "@/redux/api/dealerApi/dealerApi";
import { setDealer } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

import React, { useEffect } from "react";

const GBreadcrumb = () => {
  // const path = usePathname();

  // const spitePath = path.split("/").slice(1, path.length);
  const { user, dealer } = useAppSelector((s) => s.auth);

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
  }, [user?.code, dealerData]);

  return (
    <Breadcrumb>
      <BreadcrumbList className="w-full">
        <BreadcrumbItem className="">
          <BreadcrumbLink href="">
            {user?.code} {dealer?.shopName}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default GBreadcrumb;
