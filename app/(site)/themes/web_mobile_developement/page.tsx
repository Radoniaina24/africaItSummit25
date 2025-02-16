import HealthDetails from "@/app/features/health";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Web & Mobile | Africa It Summit",
  description: "",
  // other metadata
};

export default function WebMobile() {
  return <HealthDetails />;
}
