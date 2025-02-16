import { Metadata } from "next";
import React from "react";
import FintechFinancial from "@/app/features/fintech_financial";
import WebMobile from "@/app/features/web_mobile";
export const metadata: Metadata = {
  title: "Web & Mobile | Africa It Summit",
  description: "",
  // other metadata
};

export default function PageWebMobile() {
  return <WebMobile />;
}
