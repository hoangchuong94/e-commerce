import React from "react";
import styles from "./priceSlider.module.scss";
import classnames from "classnames/bind";
import Button from "@/components/button/Button";

const cx = classnames.bind(styles);
const PriceSlider = () => {
  return (
    <>
      <form className={cx("form")}>
        <h2>Filter by Price</h2>
        <input
          type="range"
          id="rangeInput"
          name="rangeInput"
          min="1"
          max="100"
          step="1"
          title="Choose a value between 1 and 100"
        />
        <div className={cx("option")}>
          <Button
            text="filter"
            backgroundColor="var(--blue)"
            size="small"
            outline
          />
          <div>
            <label>Price : $20 — $290</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default PriceSlider;
