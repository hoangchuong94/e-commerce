import React from "react";
import classnames from "classnames/bind";
import styles from "./ratedProduct.module.scss";
import productBag from "/public/product-bag4-600x600.jpg";
import Image from "next/image";

const cx = classnames.bind(styles);
const listTopRatedProduct = [
  {
    id: 1,
    image: productBag,
    name: "Anchor Bracelet",
    price: 250.0,
  },
  {
    id: 2,
    image: productBag,
    name: "Anchor Bracelet",
    price: 250.0,
  },
  {
    id: 3,
    image: productBag,
    name: "Anchor Bracelet",
    price: 250.0,
  },
  {
    id: 4,
    image: productBag,
    name: "Anchor Bracelet",
    price: 250.0,
  },
  {
    id: 5,
    image: productBag,
    name: "Anchor Bracelet",
    price: 250.0,
  },
];

const ratedProduct = () => {
  return (
    <div className={cx("top-rated-products-list")}>
      <h2>Our Best Sellers</h2>
      <ul>
        {listTopRatedProduct.map((product) => (
          <li key={product.id}>
            <div className={cx("top-rated-products-item")}>
              <Image
                src={product.image}
                width={64}
                height={64}
                priority
                alt="product-bag"
              />
              <div className={cx("top-rated-products-item-infor")}>
                <span>{product.name}</span>
                <br />
                <span>${product.price}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ratedProduct;
