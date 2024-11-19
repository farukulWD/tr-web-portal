"use client";
import { ColumnConfig, Footer } from "@/app/types/globalTypes";
import GlobalTable from "@/components/shared/global/GlobalTable";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Trash2 } from "lucide-react";
import React from "react";
interface IDamageEntry {
  id: number;
  date: string;
  line: number;
  code: string;
  name: string;
  price: number;
  qty: number;

  note: string;
  weight: number;

  category: string;
}

const data: IDamageEntry[] = [
  {
    id: 1,
    date: "13/11/2024",
    line: 1,
    code: "861630",
    name: "Two Seated Restaurant Table Printed Red-TEL",
    price: 1420,
    category: "Non stack",
    weight: 1,

    qty: 10,

    note: "This is a note 2",
  },
  {
    id: 2,
    date: "13/11/2024",
    line: 1,
    code: "861630",
    name: "Two Seated Restaurant Table Printed Red-TEL",
    price: 10,
    weight: 1,

    qty: 10,

    category: "stack",
    note: "This is a note 2",
  },
];
const columns: ColumnConfig<IDamageEntry>[] = [
  { key: "date", label: "Date", align: "left" },
  { key: "line", label: "Line", align: "center" },
  { key: "code", label: "Code", align: "center" },
  { key: "name", label: "Name", align: "center", width: "200px" },
  {
    key: "price",
    label: "Price",
    align: "center",
    render: (value: number) => value.toLocaleString(), // Ensure type consistency
  },
  { key: "qty", label: "Qty", align: "center" },
  {
    key: "total",
    label: "Total",
    align: "center",
    render: (value: number, item: IDamageEntry | undefined) =>
      item && item?.price * item?.qty,
  },
  { key: "note", label: "Note", align: "center" },
  {
    key: "weight",
    label: "weight",
    align: "center",
    render: (value: any, item: IDamageEntry | undefined) =>
      item && item?.weight,
  },
  {
    key: "totalWeight",
    label: "Total Weight",
    align: "center",
    render: (value: any, item: IDamageEntry | undefined) =>
      item && item?.weight * item?.qty,
  },
  {
    key: "category",
    label: "Category",
    align: "center",
  },
  {
    key: "action",
    label: "Action",
    align: "center",
    render: (value: any, item: IDamageEntry | undefined) =>
      item && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => console.log(`Delete item with ID: ${item.id}`)}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete row {item?.id}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Delete this item</TooltipContent>
        </Tooltip>
      ),
  },
];
const footers: Footer[] = [
  {
    key: "total",
    label: "Total",
    render: () => <p className="text-left">Total</p>,
  },
  {
    key: "line",
    label: "Total Quantity",
    render: () => data.reduce((sum, row) => sum + row.line, 0),
  },
  {
    key: "code",
    label: "#",
  },
  {
    key: "name",
    label: "#",
  },
  {
    key: "price",
    label: "Total Price",
    render: () =>
      data.reduce((sum, row) => sum + row.price, 0).toLocaleString(),
  },

  {
    key: "qty",
    label: "Total Quantity",
    render: () => data.reduce((sum, row) => sum + row.qty, 0).toLocaleString(),
  },

  {
    key: "Total Price",
    label: "#",
    render: () =>
      data.reduce((sum, row) => sum + row.price * row?.qty, 0).toLocaleString(),
  },
  {
    key: "Note",
    label: "#",
  },
  {
    key: "Weight",
    label: "#",
    render: () =>
      data.reduce((sum, row) => sum + row.weight, 0).toLocaleString(),
  },
  {
    key: "Total weight",
    label: "#",
    render: () =>
      data
        .reduce((sum, row) => sum + row?.weight * row?.qty, 0)
        .toLocaleString(),
  },
  {
    key: "Category",
    label: "#",
  },
  {
    key: "Action",
    label: "#",
  },
];
const DamageEntryTable = () => {
  return <GlobalTable columns={columns} footers={footers} data={data} />;
};

export default DamageEntryTable;
