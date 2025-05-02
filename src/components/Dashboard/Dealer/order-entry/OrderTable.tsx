"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import GlobalTable from "@/components/shared/global/GlobalTable";
import { IProduct, TDealerOrder } from "@/types";
import dayjs from "dayjs";
import { useDeleteProductFromOrderMutation } from "@/redux/api/orderApi/orderApi";
import { globalErrorHandler } from "@/utils/globalErrorHandler";
import { toast } from "sonner";

interface ColumnConfig {
  key: string;
  label: string;
  align: "left" | "center" | "right" | undefined;
  width?: string;
  render?: (value: any, item?: IProduct | undefined) => React.ReactNode;
}

const OrderTable = ({ orderData }: { orderData: TDealerOrder }) => {
  const [deleteFromOrder, { isLoading }] = useDeleteProductFromOrderMutation();

  const hendleDelete = async (productId: string) => {
    try {
      const res = await deleteFromOrder({
        orderId: orderData?._id as string,
        productId,
      }).unwrap();

      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      globalErrorHandler(error);
    }
  };

  const columns: ColumnConfig[] = [
    {
      key: "createdAt",
      label: "Date",
      align: "left",
      render: (_, item) => {
        return <p>{dayjs(item?.product?.createdAt).format("DD/MM/YYYY")}</p>;
      },
    },

    {
      key: "code",
      label: "Code",
      align: "center",
      render: (_, item) => {
        return <p>{item?.product?.productCode}</p>;
      },
    },
    {
      key: "name",
      label: "Name",
      align: "center",
      width: "200px",
      render: (_, item) => {
        return <p>{item?.product?.name}</p>;
      },
    },
    {
      key: "price",
      label: "Price",
      align: "center",
    },
    // { key: "factor", label: "Factor", align: "center" },
    { key: "quantity", label: "Qty", align: "center" },
    {
      key: "sp",
      label: "SP",
      align: "center",
    },
    {
      key: "np",
      label: "NP",
      align: "center",
    },
    {
      key: "total",
      label: "Total",
      align: "center",
      render: (_, item) => {
        return <p>{item?.total}</p>;
      },
    },
    {
      key: "action",
      label: "Action",
      align: "center",
      render: (value: any, item: any | undefined) => {
        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                disabled={isLoading}
                variant="destructive"
                size="sm"
                onClick={() => hendleDelete(item?._id)}
              >
                <Trash2 className={`h-4 w-4 ${isLoading && "animate-spin"}`} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete this item</TooltipContent>
          </Tooltip>
        );
      },
    },
  ];

  const footers = [
    {
      key: "createdAt",
      label: "Date",
      render: () => <p className="text-left">Total</p>,
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
      label: "#",
    },
    {
      key: "qty",
      label: "Quantity",
      render: () =>
        orderData?.product
          ?.reduce((sum, row) => sum + row?.quantity, 0)
          .toLocaleString(),
    },
    {
      key: "sp",
      label: "#",
    },
    {
      key: "sp",
      label: "#",
    },
    {
      key: "total",
      label: "Total Price",
      render: () => orderData?.total,
    },
  ];

  return (
    <GlobalTable
      columns={columns}
      data={orderData?.product}
      footers={footers}
    />
  );
};

export default OrderTable;
