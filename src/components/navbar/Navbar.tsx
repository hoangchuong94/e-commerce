"use client";
import classnames from "classnames/bind";
import styles from "./navbar.module.scss";
import Link from "next/link";

const listCategory = [
  {
    id: 1,
    url: "/store",
    name: "store",
  },
  {
    id: 2,
    url: "/store/men",
    name: "men",
  },
  {
    id: 3,
    url: "/store/women",
    name: "women",
  },
  {
    id: 4,
    url: "/store/accessories",
    name: "accessories",
  },
];

const cx = classnames.bind(styles);
export default function Navbar() {
  return (
    <nav className={cx("container")}>
      <ul className={cx("list-category")}>
        {listCategory.map((item) => {
          return (
            <li key={item.id} className={cx("item")}>
              <Link className={cx("styleForPath")} href={item.url}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className={cx("list-infor")}>
        <li>
          <Link href={"/about"}>about</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
