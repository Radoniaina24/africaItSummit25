import SmartCities from "@/app/features/smart_cities";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Smart cities| Africa It Summit",
  description: "",
  // other metadata
};

export default function PageSmartCities() {
  return <SmartCities />;
}
