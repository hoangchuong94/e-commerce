import React from "react";
import classnames from "classnames/bind";
import styles from "./about.module.scss";

import Link from "next/link";
import {
  FaApple,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import Image from "next/image";
import bgBaner from "/public/banner-04.jpg";
import bgAbout from "/public/banner-04.jpg";
import bgInfor from "/public/slide-image-free-img.jpg";
import Background from "@/components/background/Background";
import MemberList from "@/components/member-list/MemberList";
import PaymentShippingInfo from "@/components/payment-shipping-info/PaymentShippingInfo";

const cx = classnames.bind(styles);

export default function AboutPage() {
  return (
    <>
      <div className={cx("container")}>
        <Background type="basic" url={bgAbout.src} title="about" />
        <section className={cx("section-infor")}>
          <div className={cx("title-infor")}>
            <div className={cx("title-infor-content")}>
              <span></span>
              <h2>Who We Are</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam
                nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
                vitae erat consequat auctor eu in elit.
              </p>
            </div>
          </div>
          <div className={cx("infor-image")}>
            <Image
              src={bgInfor}
              alt="slide image"
              sizes="(max-width: 1024px) 75vw, 50vw"
              fill
              priority
            />
          </div>
        </section>

        <section className={cx("member-section")}>
          <div className={cx("member-content")}>
            <div className={cx("member-content-title")}>
              <span></span>
              <h4>A Few Words About</h4>
              <div></div>
              <h2>Our Team</h2>
              <p>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra.
              </p>
            </div>
            <MemberList />
          </div>
        </section>
        <div className={cx("baner-wrapper")}>
          <Background type="basic" url={bgBaner.src} />
          <div className={cx("fllow")}>
            <div className={cx("fllow-content-wrapper")}>
              <div className={cx("fllow-content")}>
                <span></span>
                <h2>follow us</h2>
                <ul className={cx("connect-icon-list")}>
                  <li>
                    <Link href={"https://www.facebook.com/"}>
                      <span>
                        <FaFacebookF />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://www.youtube.com/"}>
                      <span>
                        <FaYoutube />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://twitter.com/"}>
                      <span>
                        <FaTwitter />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://www.instagram.com/"}>
                      <span>
                        <FaInstagram />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://www.google.com/"}>
                      <span>
                        <FaGoogle />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://www.apple.com/"}>
                      <span>
                        <FaApple />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <PaymentShippingInfo />
      </div>
    </>
  );
}
