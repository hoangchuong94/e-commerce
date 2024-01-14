import React from "react";
import classname from "classnames/bind";
import styles from "./Popup.module.scss";
import { useDispatch } from "react-redux";
import { setAccount } from "@/lib/redux/sliceLogin";

const cx = classname.bind(styles);

export default function Popup({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("TOKEN_STORAGE_KEY")
        : null;
    if (token) {
      localStorage.removeItem("TOKEN_STORAGE_KEY");
      dispatch(
        setAccount({
          username: "",
          isAdmin: false,
          isLogin: false,
        })
      );
    }
  };

  const listItem = [
    {
      id: 1,
      type: "setting",
      path: "/home",
    },
    {
      id: 2,
      type: "logout",
      onclick: handleLogout,
    },
  ];
  return (
    <div className={cx("wrapper-content")}>
      {children}
      <div className={cx("list-item")}>
        {listItem.map((item) => (
          <li className={cx("item")} key={item.id} onClick={item.onclick}>
            {item.type}
          </li>
        ))}
        <span className={cx("arow")}></span>
        <span className={cx("cnter")}></span>
      </div>
    </div>
  );
}
