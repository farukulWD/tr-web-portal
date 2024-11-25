import MrInfoComp from "@/components/Dashboard/Accounts/MrInfoComp";
import React from "react";
export type TMRInfo = {
  mrNo: string;
  date: string;
  bankName: string;
  chequeNo: string;
  amount: number;
};

const MRInfoPage = () => {
  const data: TMRInfo[] = [
    {
      mrNo: "MR-118489349",
      date: "Mon Nov 25 2024 13:32:20 GMT+0600 (Bangladesh Standard Time)",
      bankName: "125487",
      chequeNo: "20241121-575107-1",
      amount: 20000,
    },
    {
      mrNo: "CN-112446020",
      date: "Tue Nov 05 2024 09:00:00 GMT+0600 (Bangladesh Standard Time)",
      bankName: "44218",
      chequeNo: "TEL Growth CN Oct-24",
      amount: 9833,
    },
  ];
  return (
    <div>
      <MrInfoComp data={data} />
    </div>
  );
};

export default MRInfoPage;
