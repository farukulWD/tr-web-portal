"use client";
import React, { useEffect, useState } from "react";
import { ColumnConfig } from "@/app/types/globalTypes";
import GlobalTable from "@/components/shared/global/GlobalTable";
import { Input } from "@/components/ui/input";
import { TProduct } from "@/types";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductTable = ({ data }: { data: TProduct[] }) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("all");
  const [filteredData, setFilteredData] = useState<TProduct[]>(data);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const matchesText =
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.productCode.toLowerCase().includes(text.toLowerCase());

      const matchesType =
        type === "all" || item?.name?.includes(type);

      return matchesText && matchesType;
    });

    setFilteredData(filtered);
  }, [text, type, data]);

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
      render: (_, item) =>
        item?.isDeleted ? (
          <Badge variant={"destructive"}>Inactive</Badge>
        ) : (
          <Badge variant={"outline"}>Active</Badge>
        ),
    },
  ];

  const handleChange = (value: string) => {
    setType(value);
  };

  return (
    <>
      <div className="mb-2 flex gap-3 items-center">
        <Input
          placeholder="Search your Product"
          name="search"
          id="search"
          onChange={(e) => setText(e.target.value)}
        />
        <Select onValueChange={handleChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Door type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Door Types</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="UPVC">UPVC</SelectItem>
              <SelectItem value="wooden">Wooden</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <GlobalTable columns={columns} data={filteredData} />
    </>
  );
};

export default ProductTable;
