import React from "react";
import styles from "./paymentShippingInfo.module.scss";
import classnames from "classnames/bind";

import bgShippingWorldwide from "/public/globe-free-img.png";
import bgBestQuality from "/public/quality-free-img.png";
import bgBestOffers from "/public/tag-free-img.png";
import bgSecurePayments from "/public/lock-free-img.png";
import Image from "next/image";

const cx = classnames.bind(styles);
const PaymentShippingInfo = function () {
  return (
    <div className={cx("infor")}>
      <div className={cx("content")}>
        <ul className={cx("list")}>
          <li className={cx("item")}>
            <div className={cx("option")}>
              <Image
                className={cx("image")}
                src={bgShippingWorldwide}
                alt="logo shipping infor"
                priority
              />
              <h5>Worldwide Shipping</h5>
              <p>
                It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
          </li>
          <li className={cx("item")}>
            <div className={cx("option")}>
              <figure>
                <Image
                  className={cx("image")}
                  src={bgBestQuality}
                  alt="logo shipping infor"
                />
              </figure>
              <h5>Worldwide Shipping</h5>
              <p>
                It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
          </li>
          <li className={cx("item")}>
            <div className={cx("option")}>
              <figure>
                <Image
                  className={cx("image")}
                  src={bgBestOffers}
                  alt="logo shipping infor"
                />
              </figure>
              <h5>Worldwide Shipping</h5>
              <p>
                It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
          </li>
          <li className={cx("item")}>
            <div className={cx("option")}>
              <figure>
                <Image
                  className={cx("image")}
                  src={bgSecurePayments}
                  alt="logo shipping infor"
                />
              </figure>
              <h5>Worldwide Shipping</h5>
              <p>
                It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentShippingInfo;
