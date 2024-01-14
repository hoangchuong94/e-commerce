"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import classnames from "classnames/bind";
import styles from "./supplierList.module.scss";
import logo1 from "/public/client-logo-1.png";
import logo2 from "/public/client-logo-2.png";
import logo3 from "/public/client-logo-3.png";
import logo4 from "/public/client-logo-4.png";
import logo5 from "/public/client-logo-5.png";
import Image from "next/image";

const listLogo = [
  {
    id: 1,
    alt: "supplier",
    image: logo1,
  },
  {
    id: 2,
    alt: "supplier",
    image: logo2,
  },
  {
    id: 3,
    alt: "supplier",
    image: logo3,
  },
  {
    id: 4,
    alt: "supplier",
    image: logo4,
  },
  {
    id: 5,
    alt: "supplier",
    image: logo5,
  },
];
const cx = classnames.bind(styles);

const SupplierList = function () {
  return (
    <div className={cx("list-logo")}>
      <Swiper
        breakpoints={{
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {listLogo.map((logo) => (
          <SwiperSlide key={logo.id}>
            <div className={cx("item")}>
              <Image className={cx("logo")} src={logo.image} alt={logo.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SupplierList;
