import React, { useState } from "react";
import styles from "./product.module.scss";
import classnames from "classnames/bind";

import productStore from "/public/product-w-jeans1-600x600.jpg";
import aboutProduct1 from "/public/product-about-01.jpg";
import aboutProduct2 from "/public/product-about-02.jpg";
import aboutProduct3 from "/public/product-about-03.jpg";
import aboutProduct4 from "/public/product-about-04.jpg";
import Button from "@/components/button/Button";
import Image from "next/image";

const cx = classnames.bind(styles);

const list = [
  {
    id: 1,
    image: aboutProduct1,
    title: "More about the product",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.",
  },
  {
    id: 2,
    image: aboutProduct2,
    title: "More about the product",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.",
  },
  {
    id: 3,
    image: aboutProduct3,
    title: "More about the product",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.",
  },
  {
    id: 4,
    image: aboutProduct4,
    title: "More about the product",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.",
  },
];
const ProductPage = () => {
  const [description, setDescription] = useState("desc");

  const showDetail = function () {
    return (
      <div className={cx("detail")}>
        <h1>product description</h1>
        <div className={cx("detail-desc")}>
          <p>
            Since it’s creation lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <div className={cx("list-detail-image")}>
          <ul>
            {list.map((item) => {
              let styleImage = Number(item.id) % 2 === 0 ? "active" : "";
              return (
                <li key={item.id} className={cx("item-detail", styleImage)}>
                  <div className={cx("detail-image")}>
                    <Image
                      src={item.image}
                      alt="about product"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                  <div className={cx("detail-desc-image")}>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  const showPreview = function () {
    return <h1>hello</h1>;
  };
  return (
    <main className={cx("container")}>
      <div className={cx("section-product-sumary")}>
        <div className={cx("product-sumary-wrapper")}>
          <div className={cx("product-image")}>
            <Image
              src={productStore}
              alt="product store"
              sizes="75vw"
              fill
              priority
            />
          </div>
          <div className={cx("product-sumary")}>
            <nav>
              <h1>Home / Store</h1>
            </nav>
            <div className={cx("product-sumary-category")}>
              <span>men</span>
            </div>
            <div className={cx("product-sumary-name")}>
              <h1>DNK Yellow Shoes</h1>
            </div>
            <div className={cx("product-sumary-price")}>
              <p>
                <span>
                  <del>
                    <span>$</span>150.00
                  </del>
                  <ins>
                    <span>$</span>120.00
                  </ins>
                </span>
              </p>
            </div>
            <div className={cx("product-sumary-desc")}>
              <p>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit
                sed.
              </p>
            </div>
            <div className={cx("product-sumary-btn-wrapper")}>
              <input type="number" value={1} />
              <Button
                text="add to cart"
                backgroundColor="var(--blue)"
                size="medium"
                outline
              />
            </div>
          </div>
        </div>
        <div className={cx("detail-information")}>
          <div className={cx("nav-detail")}>
            <ul className={cx("list-nav-detail")}>
              <li
                className={cx("item-nav-detail", "active")}
                onClick={() => setDescription("desc")}
              >
                description
              </li>
              <li
                className={cx("item-nav-detail")}
                onClick={() => setDescription("review")}
              >
                reviews
              </li>
            </ul>
          </div>
          {(description === "desc" && showDetail()) ||
            (description === "review" && showPreview())}
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
