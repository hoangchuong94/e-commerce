import Link from "next/link";
import React, { useEffect, useMemo } from "react";
import classnames from "classnames/bind";
import { FaUserAlt } from "react-icons/fa";
import styles from "./account.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { RootState } from "@/lib/redux/sliceLogin";
import { setAccount } from "@/lib/redux/sliceLogin";
import { JwtUser } from "@/type/type";

import Popup from "@/components/popup/Popup";

const cx = classnames.bind(styles);

const Account = function () {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("TOKEN_STORAGE_KEY")
      : null;
  const user = useSelector((state: RootState) => state.account);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      try {
        const userDecode: JwtUser = jwtDecode(token);
        dispatch(
          setAccount({
            username: userDecode.sub,
            isAdmin: userDecode.admin,
            isLogin: true,
          })
        );
      } catch (error) {}
    }
  }, [user]);

  return (
    <div className={cx("container")}>
      {user.isLogin ? (
        <Popup>
          <div className={cx("user-infor")}>
            <FaUserAlt className={cx("user-icon")} />
            <a className={cx("username")}>Hi. {user.username}</a>
          </div>
        </Popup>
      ) : (
        <Link href={"/auth/login"}>
          <FaUserAlt className={cx("user-icon")} />
        </Link>
      )}
    </div>
  );
};

export default Account;
