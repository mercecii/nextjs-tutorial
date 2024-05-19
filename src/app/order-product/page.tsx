"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();
  return (
    <div>
      <h1>OrderProduct</h1>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderProduct;
