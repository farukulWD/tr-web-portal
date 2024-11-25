"use client";

import { TMRInfo } from "@/app/(dashboard)/dashboard/accounts/mr-info/page";
import { ColumnConfig } from "@/app/types/globalTypes";
import GlobalTable from "@/components/shared/global/GlobalTable";

const MrInfoComp = ({ data }: { data: TMRInfo[] }) => {
  const columns: ColumnConfig<TMRInfo>[] = [
    {
      key: "mrNo",
      align: "center",
      label: "MR NO",
    },
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
      key: "bankName",
      align: "center",
      label: "Bank Name",
    },
    {
      key: "chequeNo",
      align: "center",
      label: "Cheque No",
    },
    {
      key: "amount",
      align: "center",
      label: "Amount",
    },
  ];
  return <GlobalTable columns={columns} data={data} />;
};

export default MrInfoComp;
