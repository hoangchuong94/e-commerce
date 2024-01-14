import classnames from "classnames/bind";
import styles from "./authLayout.module.scss";
import type { Metadata } from "next";
import Image from "next/image";

import bgLogin from "/public/bg-registration-form-1.jpg";
import banerLogin from "/public/registration-form-1.jpg";

export const metadata: Metadata = {
  title: "login and register",
  description: "Generated by create next app",
};

const cx = classnames.bind(styles);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cx("container")}>
      <div
        className={cx("background")}
        style={{ backgroundImage: `url(${bgLogin.src})` }}
      ></div>

      <div className={cx("wrapper-content")}>
        <div className={cx("content")}>
          <div className={cx("baner")}>
            <Image src={banerLogin} alt="image login" priority />
          </div>
          <div className={cx("form-wrapper")}>{children}</div>
        </div>
      </div>
    </div>
  );
}