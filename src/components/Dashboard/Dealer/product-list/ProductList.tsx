"use client";

import React from "react";
import ProductTable from "./ProductTable";
import { useGeltAllProductsQuery } from "@/redux/api/productApi/productApi";


function ProductList() {
  const { data: products } = useGeltAllProductsQuery(undefined);

  return (
    <>
      <div className="mb-5">
        <h2>All Available Products</h2>
      </div>
      <ProductTable data={products?.data || []} />
    </>
  );
}

export default ProductList;
