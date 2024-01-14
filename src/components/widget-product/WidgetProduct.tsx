import React from "react";
import classnames from "classnames/bind";
import { GrNext } from "react-icons/gr";

import styles from "./widgetProduct.module.scss";
import Button from "@/components/button/Button";
import PriceSlider from "@/components/price-slider/PriceSlider";
import TopRatedProduct from "@/components/top-rated-products/RatedProduct";

const cx = classnames.bind(styles);

const widgetProduct = () => {
  return (
    <div className={cx("widget")}>
      <div className={cx("search-product")}>
        <form action="">
          <input
            type="text"
            name="search-product"
            placeholder="Search product..."
          />
          <Button backgroundColor="var(--blue)" size="small">
            <GrNext aria-label="Search" />
          </Button>
        </form>
      </div>
      <PriceSlider />
      <div className={cx("product-category")}>
        <h2>Categories</h2>
        <ul>
          <li>
            <a href="">Accessories</a>
            <span>(7)</span>
          </li>
          <li>
            <a href="">Men</a>
            <span>(14)</span>
          </li>
          <li>
            <a href="">Woment</a>
            <span>(22)</span>
          </li>
        </ul>
      </div>
      <TopRatedProduct />
    </div>
  );
};

export default widgetProduct;
