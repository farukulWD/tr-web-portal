"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { useAppSelector } from "@/redux/hook";

import React from "react";

const GBreadcrumb = () => {
  // const path = usePathname();

  // const spitePath = path.split("/").slice(1, path.length);
  const { user ,dealer} = useAppSelector((s) => s.auth);




  return (
    <Breadcrumb>
      <BreadcrumbList className="w-full">
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="">{user?.code} {dealer?.shopName}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default GBreadcrumb;
