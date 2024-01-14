import React from "react";
import classnames from "classnames/bind";
import styles from "./products.module.scss";
import Link from "next/link";

import { usePathname } from "next/navigation";
import bgProduct from "/public/sports-shoe1-600x600.jpg";
import Image from "next/image";

const list = [
  {
    id: 1,
    title: "DNK Yellow Shoes",
    sex: "Men",
    price: "130.00",
    image: bgProduct,
  },
  {
    id: 2,
    title: "DNK Yellow Shoes",
    sex: "Men",
    price: "130.00",
    image: bgProduct,
  },
  {
    id: 3,
    title: "DNK Yellow Shoes",
    sex: "Men",
    price: "130.00",
    image: bgProduct,
  },
  {
    id: 4,
    title: "DNK Yellow Shoes",
    sex: "Men",
    price: "130.00",
    image: bgProduct,
  },
  {
    id: 5,
    title: "DNK Yellow Shoes",
    sex: "Men",
    price: "130.00",
    image: bgProduct,
  },
  {
    id: 6,
    title: "DNK Yellow Shoes",
    sex: "Men",
    price: "130.00",
    image: bgProduct,
  },
  {
    id: 7,
    title: "DNK Yellow Shoes",
    sex: "Men",
    price: "130.00",
    image: bgProduct,
  },
  {
    id: 8,
    title: "DNK Yellow Shoes",
    sex: "Men",
    price: "130.00",
    image: bgProduct,
  },
  {
    id: 9,
    title: "DNK Yellow Shoes",
    sex: "Men",
    price: "130.00",
    image: bgProduct,
  },
  {
    id: 10,
    title: "DNK Yellow Shoes",
    sex: "Men",
    price: "130.00",
    image: bgProduct,
  },
];

const cx = classnames.bind(styles);

const Products = function () {
  return (
    <>
      <ul className={cx("list")}>
        {list.map((product) => (
          <li className={cx("item")} key={product.id}>
            <Link href={"/dashboard"}>
              <div className={cx("product")}>
                <div className={cx("product-image")}>
                  <Image
                    src={product.image}
                    alt="product option"
                    sizes="(max-width:375px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    fill
                    priority
                  />
                </div>
                <div className={cx("content")}>
                  <h2>{product.title}</h2>
                  <span>{product.sex}</span>
                  <span>${product.price}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
