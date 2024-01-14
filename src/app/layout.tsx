import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import ReduxProvider from "@/components/provider/reduxProvider";

const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  style: ["normal", "italic"],
  fallback: ["sans-serif", "arial"],
});

export const metadata: Metadata = {
  title: "emcommerce",
  description: "emcommerce layout application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
