"use client";

import { ColumnConfig } from "@/app/types/globalTypes";
import GlobalTable from "@/components/shared/global/GlobalTable";
import { useGetUndeliveredProductsQuery } from "@/redux/api/doApi/doApi";
import { useAppSelector } from "@/redux/hook";
import dayjs from "dayjs";

function Undelivered() {
  const { user } = useAppSelector((state) => state.auth);
  const { data } = useGetUndeliveredProductsQuery(
    user?.code as unknown as number,
    { skip: !user?.code }
  );
  const columns: ColumnConfig<any>[] = [
    {
      key: "createdAt",
      label: "Do Date",
      align: "left",
      render: (_, item) => {
        return <p>{dayjs(item?.product?.createdAt).format("DD/MM/YYYY")}</p>;
      },
    },
    {
      key: "orderCode",
      label: "Order Code",
      align: "left",
    },
    {
      key: "productCode",
      label: "Product Code",
      align: "left",
      render: (_, item) => {
        return <p>{item?.product?.productCode}</p>;
      },
    },
    {
      key: "productName",
      label: "Product Name",
      align: "left",
      render: (_, item) => {
        return <p>{item?.product?.name}</p>;
      },
    },
    {
      key: "quantity",
      label: "Quantity",
      align: "left",
    },
    {
      key: "total",
      label: "Total Price",
      align: "left",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="md:flex justify-between gap-4">
        <h3 className="text-xl text-balance font-bold">
          Your Undelivered Products
        </h3>
        <h3 className="text-xl text-balance font-bold">
          Total Amount: {data?.data?.totalUndeliveredAmount}
        </h3>
      </div>

      <div>
        <GlobalTable columns={columns} data={data?.data?.products} />
      </div>
    </div>
  );
}

export default Undelivered;
