import type { Metadata } from "next";
import styles from "./store.module.scss";
import classnames from "classnames/bind";

import WidgetProduct from "@/components/widget-product/WidgetProduct";

const cx = classnames.bind(styles);

export const metadata: Metadata = {
  title: "ecommerce sotore",
  description: "ecommerce sotore application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={cx("container")}>
      <section className={cx("store")}>
        <WidgetProduct />
        <div className={cx("products-wrapper")}>{children}</div>
      </section>
    </main>
  );
}
