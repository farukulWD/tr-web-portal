import DamageEntry from "@/components/Dashboard/Dealer/damage-entry/DamageEntry";
import Incentive from "@/components/Dashboard/Dealer/incentive/Incentive";
import OrderEntry from "@/components/Dashboard/Dealer/order-entry/OrderEntry";
import ProductList from "@/components/Dashboard/Dealer/product-list/ProductList";
import Undelivered from "@/components/Dashboard/Dealer/undelivered/Undelivered";
import ViewOrder from "@/components/Dashboard/Dealer/view-order/ViewOrder";
import React from "react";

const dealerDynamicPage = async ({
  params,
}: {
  params: Promise<{ sub: string }>;
}) => {
  const subRoute = (await params).sub;

  return (
    (subRoute === "order-entry" && <OrderEntry />) ||
    (subRoute === "damage-entry" && <DamageEntry />) ||
    (subRoute === "product-list" && <ProductList />) ||
    (subRoute === "undelivered" && <Undelivered />) ||
    (subRoute === "view-order" && <ViewOrder />) ||
    (subRoute === "incentive" && <Incentive />) ||
    null
  );
};

export default dealerDynamicPage;
