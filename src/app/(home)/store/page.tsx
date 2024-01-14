import React from "react";

import NavStore from "@/components/nav-store/NavStore";
import Products from "@/components/products/Products";

export default function StorePage() {
  return (
    <>
      <NavStore />
      <Products />
    </>
  );
}
