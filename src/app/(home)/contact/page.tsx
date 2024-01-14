import React from "react";
import classnames from "classnames/bind";
import styles from "./contact.module.scss";
import Background from "@/components/background/Background";
import bgContact from "/public/banner-06.jpg";
import Button from "@/components/button/Button";

const cx = classnames.bind(styles);
export default function ContactPage() {
  return (
    <div className={cx("container")}>
      <Background url={bgContact.src} type="basic" title="contact us" />
      <section className={cx("section-contact")}>
        <div className={cx("contact-title")}>
          <h4>Have any queries?</h4>
          <h2>We're here to help.​</h2>
          <span></span>
          <div className={cx("contact-list")}>
            <div className={cx("contact-item")}>
              <h3>Sales</h3>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
              <h5>1800 123 4567</h5>
            </div>
            <div className={cx("contact-item")}>
              <h3>Complaints</h3>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
              <h5>1900 223 8899</h5>
            </div>
            <div className={cx("contact-item")}>
              <h3>Returns</h3>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
              <h5>returns@mail.com</h5>
            </div>
            <div className={cx("contact-item")}>
              <h3>Marketing</h3>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
              <h5>1700 444 5578</h5>
            </div>
          </div>
          <div className={cx("feedback-wrapper")}>
            <div className={cx("feedback")}>
              <div className={cx("feedback-description")}>
                <h6>Don't be a stranger!</h6>
                <h2>You tell us. We listen.</h2>
                <p>
                  Cras elementum finibus lacus nec lacinia. Quisque non
                  convallis nisl, eu condimentum sem. Proin dignissim libero
                  lacus, ut eleifend magna vehicula et. Nam mattis est sed
                  tellus.
                </p>
              </div>
              <div className={cx("feedback-form")}>
                <form action="">
                  <input type="text" name="name" placeholder="NAME" />
                  <input type="text" name="subject" placeholder="SUBJECT" />
                  <input type="email" name="email" placeholder="EMAIL" />
                  <textarea name="message" placeholder="MESSAGE" />
                  <Button
                    text="send message"
                    size="big"
                    backgroundColor="var(--blue)"
                    outline
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
