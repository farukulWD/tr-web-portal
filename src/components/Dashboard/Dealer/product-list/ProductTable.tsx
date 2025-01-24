"use client";
import { ColumnConfig } from "@/app/types/globalTypes";
import GlobalTable from "@/components/shared/global/GlobalTable";
import { Input } from "@/components/ui/input";

import React, { useState } from "react";

import { TProduct } from "@/types";
import { Badge } from "@/components/ui/badge";

const ProductTable = ({ data }: { data: TProduct[] }) => {
  const [text, setText] = useState("");

  const newFilteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(text.toLocaleLowerCase()) ||
      item.productCode.toLowerCase().includes(text.toLocaleLowerCase())
  );

  const columns: ColumnConfig<TProduct>[] = [
    {
      key: "productCode",
      label: "Code",
      align: "center",
    },
    {
      key: "name",
      label: "Name",
      align: "center",
    },
    {
      key: "price",
      label: "Price",
      align: "center",
    },
    {
      key: "isDeleted",
      label: "Active",
      align: "center",
      render: (_, item) => {
        return (
          <>
            {item?.isDeleted ? (
              <Badge variant={"destructive"}>Inactive</Badge>
            ) : (
              <Badge variant={"outline"} className="">
                Active
              </Badge>
            )}
          </>
        );
      },
    },
    {
      key: "stock",
      label: "Stock",
      align: "center",
    },
  ];
  return (
    <>
      <div className="mb-2">
        <Input
          placeholder="Search your Product"
          name="search"
          id="search"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <GlobalTable columns={columns} data={newFilteredData} />
    </>
  );
};

export default ProductTable;
