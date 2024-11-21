import { ColumnConfig } from "@/app/types/globalTypes";
import GlobalTable from "@/components/shared/global/GlobalTable";
import React from "react";
export type TBankAccount = {
  bankName: string;
  accountName: string;
  accountNo: string;
  branchName: string;
};
const BackInfoComp = () => {
  const data: TBankAccount[] = [
    {
      bankName: "AGRANI BANK",
      accountName: "Rangpur Metal Industries Limited",
      accountNo: "200009523824",
      branchName: "Gulshan Br. (010261721)",
    },
    {
      bankName: "Brac Bank Ltd.",
      accountName: "Banga Building Materials Ltd.",
      accountNo: "150120-1365267005",
      branchName: "Gulshan Br. (060261726)",
    },
    {
      bankName: "IFIC bank Ltd",
      accountName: "RFL Plastics Ltd.",
      accountNo: "1008371098001",
      branchName: "Federation Br. (Routing 120272297)",
    },
    {
      bankName: "Mercantile Bank",
      accountName: "RFL Electronics Ltd.",
      accountNo: "1111-000-202642",
      branchName: "Motijheel Branch (140263194)",
    },
    {
      bankName: "Mutual Trust Bank Ltd",
      accountName: "Multi-Line Industries Ltd",
      accountNo: "008-0210018267",
      branchName: "Progati Sarani Br (Routing 145263702)",
    },
    {
      bankName: "NCC Bank",
      accountName: "Multi line Industry Ltd",
      accountNo: "0068-0210005573",
      branchName: "Progati Sarani",
    },
    {
      bankName: "NCC Bank",
      accountName: "RFL Plastics Ltd.",
      accountNo: "0012-0210017968",
      branchName: "Gulshan Br",
    },
    {
      bankName: "NRB Bank PLC",
      accountName: "Get Well Limited",
      accountNo: "1012010087746",
      branchName: "Principal branch",
    },
    {
      bankName: "PUBALI BANK",
      accountName: "Rangpur Metal Industries Limited",
      accountNo: "2905-102-001256",
      branchName: "Foreign Exchange (Routing 175272321)",
    },
    {
      bankName: "Prime Bank",
      accountName: "Rangpur Foundry Ltd.",
      accountNo: "2104119022821",
      branchName: "Motijheel (routing 170274245)",
    },
    {
      bankName: "Sonali Bank",
      accountName: "RFL Plastics Ltd.",
      accountNo: "011560-2000713",
      branchName: "Gulshan Branch (Routing 200261728)",
    },
    {
      bankName: "The City bank Ltd.",
      accountName: "Banga Building Materials Ltd.",
      accountNo: "110127-7574001",
      branchName: "Gulshan Branch (Routing 225261729)",
    },
    {
      bankName: "UCBL Bank",
      accountName: "Banga Building Materials Ltd.",
      accountNo: "0721101-000002805",
      branchName: "Foreign Exchange (Routing 245272327)",
    },
  ];

  const columns: ColumnConfig<TBankAccount>[] = [
    {
      key: "bankName",
      align: "center",
      label: "Bank Name",
    },
    {
      key: "accountName",
      align: "center",
      label: "Account Name",
    },
    {
      key: "accountNo",
      align: "center",
      label: "Account No",
    },
    {
      key: "branchName",
      align: "center",
      label: "Branch Name",
    },
  ];
  return (
    <div>
      <GlobalTable columns={columns} data={data} />
    </div>
  );
};

export default BackInfoComp;
