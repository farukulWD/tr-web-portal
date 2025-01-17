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
  const { user } = useAppSelector((s) => s.auth);
  console.log(user);

  return (
    <Breadcrumb>
      <BreadcrumbList className="w-full">
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="">{user?.code}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default GBreadcrumb;
