"use client";

import classnames from "classnames/bind";
import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import logo from "/public/logo1@2x-free-img.png";
import Navbar from "@/components/navbar/Navbar";
import Account from "@/components/account/Account";
import ShopCart from "@/components/shop-cart/ShopCart";

const cx = classnames.bind(styles);

export default function Header() {
  const currentPath = usePathname();
  const [headerMobile, setHeaderMobile] = useState(false);
  const [headerStore, setHeaderStore] = useState("");
  const listUrl = ["/", "/about", "/contact"];
  const [menubarMobile, setMenubarMobile] = useState(false);

  const toggleMobileNavMenu = () => {
    setMenubarMobile((pre) => !pre);
  };

  useEffect(() => {
    setMenubarMobile(false);
    setHeaderStore(listUrl.includes(currentPath) ? "" : "store");
  }, [currentPath, headerStore]);

  return (
    <>
      <header className={cx("header", headerStore)}>
        <div className={cx("content")}>
          <Link href={"/"}>
            <Image className={cx("logo")} src={logo} alt="logo home" priority />
          </Link>
          <section>
            <div className={cx("navbar")}>
              <Navbar />
            </div>
            <div className={cx("wrapper-shopcard")}>
              <ShopCart />
            </div>
            <div className={cx("account")}>
              <Account />
            </div>
            <div className={cx("menu-icon")} onClick={toggleMobileNavMenu}>
              <CiMenuBurger />
            </div>
          </section>
        </div>
        {menubarMobile && (
          <div className={cx("menu-bar")}>
            <div className={cx("close-menu-bar")} onClick={toggleMobileNavMenu}>
              <AiOutlineClose />
            </div>
            <div className={cx("account-mobile")}>
              <Account />
            </div>
            <Navbar />
          </div>
        )}
      </header>
    </>
  );
}
