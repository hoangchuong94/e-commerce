import React from "react";
import classnames from "classnames/bind";
import styles from "./background.module.scss";
import Button from "@/components/button/Button";
import { BackgroundProps } from "@/type/type";

const cx = classnames.bind(styles);

const Backgorund = (props: BackgroundProps) => {
  return (
    <>
      <div className={cx("container")}>
        <div
          className={cx("image")}
          style={{ backgroundImage: `url(${props.url})` }}
        ></div>
        <div className={cx("wrapper-content", props.type)}>
          <div className={cx("content")}>
            <div className={cx("infor")}>
              <h1>{props.title}</h1>
              {props.description && <p>{props.description}</p>}
              <h3>{props.detail}</h3>
            </div>
            <div className={cx("wrapper-button")}>
              <Button text={"shop now"} size="big" backgroundColor="white" />
              <Button text={"find more"} outline size="big" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backgorund;
