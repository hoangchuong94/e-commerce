import NavStore from "@/components/nav-store/NavStore";
import Products from "@/components/products/Products";
import React from "react";

const page = () => {
  return (
    <>
      <NavStore />
      <Products />
    </>
  );
};

export default page;
