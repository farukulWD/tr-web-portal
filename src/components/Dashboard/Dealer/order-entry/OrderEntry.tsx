import React from "react";
import OrderForm from "./OrderForm";
import OrderState from "./OrderState";
import OrderTable from "./OrderTable";

function OrderEntry() {
  return (
    <div className="overflow-hidden">
      <OrderState>
        <OrderForm />
        <OrderTable />
      </OrderState>
    </div>
  );
}

export default OrderEntry;
