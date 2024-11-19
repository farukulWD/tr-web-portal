"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

const GBreadcrumb = () => {
  const path = usePathname();

  const spitePath = path.split("/").slice(1, path.length);
  console.log(spitePath);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">
            834384 - M/S Masnun Plastic Gallery. [TEL Furniture]
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          {spitePath.map((item) => (
            <>
              {" "}
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbPage> {item}</BreadcrumbPage>
            </>
          ))}
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default GBreadcrumb;
