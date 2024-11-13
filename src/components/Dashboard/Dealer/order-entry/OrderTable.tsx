"use client";
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    line: 2,
    code: "861631",
    name: "Kids Reading Table Printed Red-TEL",
    price: 1300,
    factor: 1,
    qty: 10,
    total: 13000,
    note: "This is a note",
    proRate: 0,
    sp: 0,
    np: 11,
    divDate: "13-NOV-2024",
    sdSiteCode: "443wws",
  },
  {
    id: 3,
    date: "13/11/2024",
    line: 3,
    code: "861826",
    name: "4 Seated Multi Table Print Rose Merry Black S/L-T",
    price: 1960,
    factor: 1,
    qty: 10,
    total: 19600,
    note: "This is a note",
    proRate: 0,
    sp: 0,
    np: 11,
    divDate: "13-NOV-2024",
    sdSiteCode: "sa3",
  },
];

const OrderTable = () => {
  const [items, setItems] = React.useState<OrderItem[]>(data);

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = items.reduce((sum, item) => sum + item.total, 0);
  return (
    <TooltipProvider>
      <div className="rounded-lg border bg-card overflow-x-auto">
        <Table className="overflow-x-auto">
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Date</TableHead>
              <TableHead className="text-center">Line</TableHead>
              <TableHead className="text-center">Code</TableHead>
              <TableHead className="min-w-[200px] text-center">Name</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead className="text-center">Factor</TableHead>
              <TableHead className="text-center">Qty</TableHead>
              <TableHead className="text-center">Total</TableHead>
              <TableHead className="text-center">Note</TableHead>
              <TableHead className="text-center">Pro. Rate</TableHead>
              <TableHead className="text-center">SP%</TableHead>
              <TableHead className="text-center">NP%</TableHead>
              <TableHead className="text-center">Div. Date</TableHead>
              <TableHead className="text-center">SD Site Code</TableHead>
              <TableHead className="w-[100px] text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} className="hover:bg-muted/50">
                <TableCell>{item.date}</TableCell>
                <TableCell className="text-center">{item.line}</TableCell>
                <TableCell className="text-center"> {item.code}</TableCell>
                <TableCell className="font-medium text-center">
                  {item.name}
                </TableCell>
                <TableCell className="text-center">
                  {item.price.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">{item.factor}</TableCell>
                <TableCell className="text-center">{item.qty}</TableCell>
                <TableCell className="text-center">
                  {item.total.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">{item.note}</TableCell>
                <TableCell className="text-center">{item.proRate}</TableCell>
                <TableCell className="text-center">{item.sp}</TableCell>
                <TableCell className="text-center">{item.np}</TableCell>
                <TableCell className="text-center">{item.divDate}</TableCell>
                <TableCell className="text-center">{item.sdSiteCode}</TableCell>
                <TableCell className="items-center justify-center flex">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete row {item.line}</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Delete this item</TooltipContent>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-muted/50 font-medium">
            <TableRow>
              <TableCell colSpan={6} className="text-left">
                Total ({items.length} Lines)
              </TableCell>
              <TableCell className="text-center">{totalQty}</TableCell>
              <TableCell className="text-center">
                {totalAmount.toLocaleString()}
              </TableCell>
              <TableCell colSpan={7} />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </TooltipProvider>
  );
};

export default OrderTable;
