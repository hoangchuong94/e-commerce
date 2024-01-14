"use client";
import React from "react";
import store from "@/lib/redux/store";
import { Provider as ReduxProvider } from "react-redux";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;
