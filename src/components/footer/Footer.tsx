import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";
import classnames from "classnames/bind";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaApple,
} from "react-icons/fa";

import Button from "@/components/button/Button";
import logo from "/public/logo@2x-free-img.png";
import Image from "next/image";

const cx = classnames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx("container")}>
      <div className={cx("title")}>
        <Link href={"/dashboard"}>
          <h3>
            SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
          </h3>
        </Link>
      </div>
      <div className={cx("section")}>
        <div className={cx("content")}>
          <div className={cx("logo")}>
            <Link href={"/dashboard"}>
              <Image src={logo} alt="logo home" priority />
            </Link>
            <h3>The best look anytime, anywhere.</h3>
          </div>
          <div className={cx("women-category")}>
            <h2>for her</h2>
            <ul className={cx("list-women-category")}>
              <li>
                <Link href={"/dashboard"}>Women Jeans</Link>
              </li>
              <li>
                <Link href={"/dashboard"}>Tops and Shirts</Link>
              </li>
              <li>
                <Link href={"/dashboard"}>Women Jackets</Link>
              </li>
              <li>
                <Link href={"/dashboard"}>Heels and Flats</Link>
              </li>
              <li>
                <Link href={"/dashboard"}>Women Accessories</Link>
              </li>
            </ul>
          </div>
          <div className={cx("men-category")}>
            <h2>for him</h2>
            <ul className={cx("list-men-category")}>
              <li>
                <Link href={"/dashboard"}>Men Jeans</Link>
              </li>
              <li>
                <Link href={"/dashboard"}>Men Shirts</Link>
              </li>
              <li>
                <Link href={"/dashboard"}>Men Shoes</Link>
              </li>
              <li>
                <Link href={"/dashboard"}>Men Accessories</Link>
              </li>
              <li>
                <Link href={"/dashboard"}>Men Jackets</Link>
              </li>
            </ul>
          </div>
          <div className={cx("subscribe")}>
            <h2>subscribe</h2>
            <form action="">
              <label htmlFor="subscribe-email"></label>
              <input
                id="subscribe-email"
                type="text"
                placeholder="you email adddress ...."
              />
              <br />
              <Button
                text="subscribe"
                size="medium"
                backgroundColor="var(--blue)"
                outline
              />
            </form>
          </div>
        </div>
      </div>
      <div className={cx("conection")}>
        <div className={cx("infor")}>
          <p>Copyright © 2023 Brandstore. Powered by Brandstore.</p>
          <ul className={cx("list-connect")}>
            <li className={cx("list-connect-item")}>
              <Link href={"https://www.facebook.com/"}>
                <span>
                  <FaFacebookF />
                </span>
              </Link>
            </li>
            <li className={cx("list-connect-item")}>
              <Link href={"https://www.youtube.com/"}>
                <span>
                  <FaYoutube />
                </span>
              </Link>
            </li>
            <li className={cx("list-connect-item")}>
              <Link href={"https://twitter.com/"}>
                <span>
                  <FaTwitter />
                </span>
              </Link>
            </li>
            <li className={cx("list-connect-item")}>
              <Link href={"https://www.instagram.com/"}>
                <span>
                  <FaInstagram />
                </span>
              </Link>
            </li>
            <li className={cx("list-connect-item")}>
              <Link href={"https://www.google.com/"}>
                <span>
                  <FaGoogle />
                </span>
              </Link>
            </li>
            <li className={cx("list-connect-item")}>
              <Link href={"https://www.apple.com/"}>
                <span>
                  <FaApple />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
