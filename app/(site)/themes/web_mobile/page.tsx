import { Metadata } from "next";
import React from "react";
import FintechFinancial from "@/app/features/fintech_financial";
export const metadata: Metadata = {
  title: "Fintech & Financial| Africa It Summit",
  description: "",
  // other metadata
};

export default function PageWebMobile() {
  return <FintechFinancial />;
}
