import React from "react";
import classnames from "classnames/bind";
import styles from "./navStore.module.scss";

const cx = classnames.bind(styles);

const NavStore = () => {
  return (
    <div className={cx("nav-product-wrapper")}>
      <nav>
        <h1>Home / Store</h1>
      </nav>
      <div className={cx("nav-product-option")}>
        <p>Showing 1–12 of 31 results</p>
        <form action="">
          <select aria-label="product-orderby">
            <option value="menu-oder" id="">
              Default sorting
            </option>
            <option value="popularity" id="">
              Sort by popularity
            </option>
            <option value="rating" id="">
              Sort by average rating
            </option>
            <option value="date" id="">
              Sort by latest
            </option>
            <option value="price" id="">
              Sort by price: low to high
            </option>
            <option value="price-desc" id="">
              Sort by price: high to low
            </option>
          </select>
          <input type="hidden" name="product-orderby-page" value={1} />
        </form>
      </div>
    </div>
  );
};

export default NavStore;
