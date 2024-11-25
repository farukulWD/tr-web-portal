import CreditInfoComp from "@/components/Dashboard/Accounts/CreditInfoComp";

import React from "react";

export type TCreditInfo = {
  date: string;
  status: string;
  Credit: number;
  Due: number;
  Paid: number;
};

export default function CreditInfoPage() {
  const data: TCreditInfo[] = [
    {
      date: "Mon Nov 25 2024 13:32:20 GMT+0600 (Bangladesh Standard Time)", // Updated to the desired format
      status: "Paid",
      Credit: 5000,
      Due: 0,
      Paid: 5000,
    },
    {
      date: "Tue Nov 05 2024 09:00:00 GMT+0600 (Bangladesh Standard Time)", // Updated
      status: "Partial",
      Credit: 7000,
      Due: 2000,
      Paid: 5000,
    },
    {
      date: "Sun Nov 10 2024 12:00:00 GMT+0600 (Bangladesh Standard Time)", // Updated
      status: "Due",
      Credit: 10000,
      Due: 10000,
      Paid: 0,
    },
    {
      date: "Fri Nov 15 2024 16:45:00 GMT+0600 (Bangladesh Standard Time)", // Updated
      status: "Paid",
      Credit: 12000,
      Due: 0,
      Paid: 12000,
    },
    {
      date: "Wed Nov 20 2024 10:30:00 GMT+0600 (Bangladesh Standard Time)", // Updated
      status: "Partial",
      Credit: 8000,
      Due: 3000,
      Paid: 5000,
    },
  ];

  return (
    <div>
      <CreditInfoComp data={data} />
    </div>
  );
}
