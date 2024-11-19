"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import GlobalTable from "@/components/shared/global/GlobalTable";

interface OrderItem {
  id: number;
  date: string;
  line: number;
  code: string;
  name: string;
  price: number;
  factor: number;
  qty: number;
  total: number;
  note: string;
  proRate: number;
  sp: number;
  np: number;
  divDate: string;
  sdSiteCode: string;
}

const data: OrderItem[] = [
  {
    id: 1,
    date: "13/11/2024",
    line: 1,
    code: "861630",
    name: "Two Seated Restaurant Table Printed Red-TEL",
    price: 1420,
    factor: 1,
    qty: 10,
    total: 14200,
    note: "This is a note 2",
    proRate: 0,
    sp: 0,
    np: 11,
    divDate: "13-NOV-2024",
    sdSiteCode: "332567dd",
  },
  {
    id: 2,
    date: "13/11/2024",
    line: 1,
    code: "861630",
    name: "Two Seated Restaurant Table Printed Red-TEL",
    price: 1421,
    factor: 1,
    qty: 10,
    total: 14200,
    note: "This is a note 2",
    proRate: 0,
    sp: 0,
    np: 11,
    divDate: "13-NOV-2024",
    sdSiteCode: "332567dd",
  },
];
const columns = [
  { key: "date", label: "Date", align: "left" },
  { key: "line", label: "Line", align: "center" },
  { key: "code", label: "Code", align: "center" },
  { key: "name", label: "Name", align: "center", width: "200px" },
  {
    key: "price",
    label: "Price",
    align: "center",
    render: (value: any) => value.toLocaleString(),
  },
  { key: "factor", label: "Factor", align: "center" },
  { key: "qty", label: "Qty", align: "center" },
  {
    key: "total",
    label: "Total",
    align: "center",
    render: (value: any) => value.toLocaleString(),
  },
  { key: "note", label: "Note", align: "center" },
  { key: "proRate", label: "Pro. Rate", align: "center" },
  { key: "sp", label: "SP%", align: "center" },
  { key: "np", label: "NP%", align: "center" },
  { key: "divDate", label: "Div. Date", align: "center" },
  { key: "sdSiteCode", label: "SD Site Code", align: "center" },
  {
    key: "action",
    label: "Action",
    align: "center",
    render: (value: any, item: OrderItem) => {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="destructive"
              size="sm"
              // onClick={() => handleDelete(item.id)}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete row {item?.id}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Delete this item</TooltipContent>
        </Tooltip>
      );
    },
  },
];
const OrderTable = () => {
  const footers = [
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
      key: "factor",
      label: "Total Price",
      render: () =>
        data.reduce((sum, row) => sum + row.factor, 0).toLocaleString(),
    },
    {
      key: "qty",
      label: "Total Quantity",
      render: () =>
        data.reduce((sum, row) => sum + row.qty, 0).toLocaleString(),
    },
    {
      key: "total",
      label: "Total",
      render: () =>
        data.reduce((sum, row) => sum + row.total, 0).toLocaleString(),
    },
    {
      key: "Note",
      label: "#",
    },
    {
      key: "Note",
      label: "#",
    },
    {
      key: "Note",
      label: "#",
    },
    {
      key: "Note",
      label: "#",
    },
    {
      key: "Note",
      label: "#",
    },
    {
      key: "Note",
      label: "#",
    },
    {
      key: "Note",
      label: "#",
    },
  ];
  // const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  // const totalAmount = items.reduce((sum, item) => sum + item.total, 0);
  // return (
  //   <TooltipProvider>
  //     <div className="rounded-lg border bg-card overflow-x-auto">
  //       <Table className="overflow-x-auto">
  //         <TableHeader>
  //           <TableRow className="bg-muted/50">
  //             <TableHead>Date</TableHead>
  //             <TableHead className="text-center">Line</TableHead>
  //             <TableHead className="text-center">Code</TableHead>
  //             <TableHead className="min-w-[200px] text-center">Name</TableHead>
  //             <TableHead className="text-center">Price</TableHead>
  //             <TableHead className="text-center">Factor</TableHead>
  //             <TableHead className="text-center">Qty</TableHead>
  //             <TableHead className="text-center">Total</TableHead>
  //             <TableHead className="text-center">Note</TableHead>
  //             <TableHead className="text-center">Pro. Rate</TableHead>
  //             <TableHead className="text-center">SP%</TableHead>
  //             <TableHead className="text-center">NP%</TableHead>
  //             <TableHead className="text-center">Div. Date</TableHead>
  //             <TableHead className="text-center">SD Site Code</TableHead>
  //             <TableHead className="w-[100px] text-center">Action</TableHead>
  //           </TableRow>
  //         </TableHeader>
  //         <TableBody>
  //           {items.map((item) => (
  //             <TableRow key={item.id} className="hover:bg-muted/50">
  //               <TableCell>{item.date}</TableCell>
  //               <TableCell className="text-center">{item.line}</TableCell>
  //               <TableCell className="text-center"> {item.code}</TableCell>
  //               <TableCell className="font-medium text-center">
  //                 {item.name}
  //               </TableCell>
  //               <TableCell className="text-center">
  //                 {item.price.toLocaleString()}
  //               </TableCell>
  //               <TableCell className="text-center">{item.factor}</TableCell>
  //               <TableCell className="text-center">{item.qty}</TableCell>
  //               <TableCell className="text-center">
  //                 {item.total.toLocaleString()}
  //               </TableCell>
  //               <TableCell className="text-center">{item.note}</TableCell>
  //               <TableCell className="text-center">{item.proRate}</TableCell>
  //               <TableCell className="text-center">{item.sp}</TableCell>
  //               <TableCell className="text-center">{item.np}</TableCell>
  //               <TableCell className="text-center">{item.divDate}</TableCell>
  //               <TableCell className="text-center">{item.sdSiteCode}</TableCell>
  //               <TableCell className="items-center justify-center flex">
  //                 <Tooltip>
  //                   <TooltipTrigger asChild>
  //                     <Button
  //                       variant="destructive"
  //                       size="sm"
  //                       onClick={() => handleDelete(item.id)}
  //                     >
  //                       <Trash2 className="h-4 w-4" />
  //                       <span className="sr-only">Delete row {item.line}</span>
  //                     </Button>
  //                   </TooltipTrigger>
  //                   <TooltipContent>Delete this item</TooltipContent>
  //                 </Tooltip>
  //               </TableCell>
  //             </TableRow>
  //           ))}
  //         </TableBody>
  //         <TableFooter className="bg-muted/50 font-medium">
  //           <TableRow>
  //             <TableCell className="text-left">
  //               Total ({items.length} Lines)
  //             </TableCell>
  //             <TableCell className="text-center">{totalQty}</TableCell>
  //             <TableCell className="text-center">
  //               {totalAmount.toLocaleString()}
  //             </TableCell>
  //             <TableCell colSpan={7} />
  //             <TableCell></TableCell>
  //           </TableRow>
  //         </TableFooter>
  //       </Table>
  //     </div>
  //   </TooltipProvider>
  // );
  return <GlobalTable columns={columns} data={data} footers={footers} />;
};

export default OrderTable;
