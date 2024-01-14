import React from "react";
import classNames from "classnames/bind";
import styles from "./productOptions.module.scss";

import Button from "@/components/button/Button";
import bgWoment from "/public/women-fashion-free-img.jpg";
import bgMen from "/public/men-fashion-free-img.jpg";
import bgFootwear from "/public/footwear-free-img.jpg";
import Image from "next/image";

const list = [
  {
    id: 1,
    url: bgWoment,
    title: "20% Off On Tank Tops",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinac dictum.",
  },
  {
    id: 2,
    url: bgMen,
    title: "Latest Eyewear For You",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinac dictum.",
  },
  {
    id: 3,
    url: bgFootwear,
    title: "Let's Lorem Suit Up!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinac dictum.",
  },
];

const cx = classNames.bind(styles);
const ProductOptions = function () {
  return (
    <>
      <ul className={cx("list")}>
        {list.map((product) => (
          <li className={cx("item")} key={product.id}>
            <Image
              className={cx("image")}
              src={product.url}
              alt="image product"
              sizes="(max-width: 876px) 75vw, 33vw"
              fill
              priority
            />
            <div className={cx("product-content")}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <Button text={"shop now"} size="big" backgroundColor="white" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductOptions;
