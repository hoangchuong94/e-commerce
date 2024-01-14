import React from "react";
import styles from "@/app/(home)/homePage.module.scss";
import classnames from "classnames/bind";

import bgHome from "/public/home-new-bg-free-img.jpg";
import ProductList from "@/components/products/Products";
import Background from "@/components/background/Background";
import SupplierList from "@/components/supplierList/SupplierList";
import ProductOptions from "@/components/product-options/ProductOptions";
import PaymentShippingInfo from "@/components/payment-shipping-info/PaymentShippingInfo";

const cx = classnames.bind(styles);

export default function HomePage() {
  return (
    <>
      <Background
        type="background"
        url={bgHome.src}
        title="raining offers for hot summer!"
        detail="25% off on all products"
      />
      <section className={cx("section-product-option")}>
        <div className={cx("product-option")}>
          <SupplierList />
          <ProductOptions />
        </div>
      </section>
      <section className={cx("section-product-featured")}>
        <div className={cx("product-featured-container")}>
          <div className={cx("product-featured")}>
            <div className={cx("product-featured-title")}>
              <h1>featured products</h1>
              <div className={cx("separation-title")}>
                <span></span>
              </div>
            </div>
            <ProductList />
          </div>
          <Background
            type="baner"
            url="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg"
            title="Limited Time Offer"
            detail="Buy This T-shirt At 20% Discount, Use Code OFF20"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
          leo."
          />
          <PaymentShippingInfo />
        </div>
      </section>
    </>
  );
}
