"use client";
import { TCreditInfo } from "@/app/(dashboard)/dashboard/accounts/credit-info/page";
import { ColumnConfig } from "@/app/types/globalTypes";
import GlobalTable from "@/components/shared/global/GlobalTable";

const CreditInfoComp = ({ data }: { data: TCreditInfo[] }) => {
  const columns: ColumnConfig<TCreditInfo>[] = [
    {
      key: "date",
      align: "center",
      label: "Date",
      render: (value: string) => {
        const formattedDate = new Date(value).toISOString().split("T")[0];
        return <p>{formattedDate}</p>;
      },
    },
    {
      key: "status",
      align: "center",
      label: "Status",
    },
    {
      key: "Credit",
      align: "center",
      label: "Credit Amount",
    },
    {
      key: "Due",
      align: "center",
      label: "Due Amount",
    },
    {
      key: "Paid",
      align: "center",
      label: "Paid Amount",
    },
  ];
  return <GlobalTable columns={columns} data={data} />;
};

export default CreditInfoComp;
