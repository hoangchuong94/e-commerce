import React from "react";
import styles from "./button.module.scss";
import classnames from "classnames/bind";
import { ButtonProps } from "@/type/type";

const cx = classnames.bind(styles);

const Button = function (props: ButtonProps) {
  const { size, outline, backgroundColor, type, text, children } = props;
  return (
    <>
      <button
        className={cx("button", size, {
          outline,
        })}
        style={{
          backgroundColor,
        }}
        type={type}
      >
        {children || text}
      </button>
    </>
  );
};

export default Button;
