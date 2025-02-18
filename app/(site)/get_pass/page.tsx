import { Metadata } from "next";
import React from "react";
import GetYourPass from "@/app/features/get_pass";
export const metadata: Metadata = {
  title: "Get pass | Africa It Summit",
  description: "",
  // other metadata
};

export default function PageGetPass() {
  return <GetYourPass />;
}
