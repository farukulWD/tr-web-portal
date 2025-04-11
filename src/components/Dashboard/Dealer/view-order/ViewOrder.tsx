"use client";

import GlobalTable from "@/components/shared/global/GlobalTable";
import { Button } from "@/components/ui/button";
import { useCreateDoMutation } from "@/redux/api/doApi/doApi";
import { useGetDealerOrderQuery } from "@/redux/api/orderApi/orderApi";
import { IProduct } from "@/types";
import { globalErrorHandler } from "@/utils/globalErrorHandler";
import dayjs from "dayjs";
import React from "react";
import { toast } from "sonner";
interface ColumnConfig {
  key: string;
  label: string;
  align: "left" | "center" | "right" | undefined;
  width?: string;
  render?: (value: any, item?: IProduct | undefined) => React.ReactNode;
}
function ViewOrder() {
  const { data: orderData } = useGetDealerOrderQuery(undefined);
  const [createDo, { isLoading }] = useCreateDoMutation();

  const makeDo = async () => {
    if (orderData?.data?._id) {
      try {
        const result = await createDo({
          orderId: orderData?.data?._id,
        }).unwrap();
        toast.success(result.message)
      } catch (error) {
        console.log(error);
        globalErrorHandler(error);
      }
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

    { key: "quantity", label: "Qty", align: "center" },
    {
      key: "total",
      label: "Total",
      align: "center",
      render: (_, item) => {
        return (
          <p>{(item?.product?.price as number) * (item?.quantity as number)}</p>
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
        orderData?.data?.product
          ?.reduce((sum, row) => sum + row?.quantity, 0)
          .toLocaleString(),
    },
    {
      key: "total",
      label: "Total Price",
      render: () =>
        orderData?.data?.product
          ?.reduce((sum, row) => sum + row?.price * row?.quantity, 0)
          .toLocaleString(),
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="sm:flex justify-between items-start">
        <div>
          <h3 className="text-xl text-balance font-bold">Your Listed Order</h3>
          <p className="text-gray">
            You can active our order here , it will be removed after 12:00 AM
          </p>
        </div>
        <div>
          <Button disabled={isLoading} onClick={() => makeDo()}>
            {isLoading ? "Processing" : "Active"}
          </Button>
        </div>
      </div>
      <GlobalTable
        columns={columns}
        data={orderData?.data?.product || []}
        footers={footers}
      />
    </div>
  );
}

export default ViewOrder;
