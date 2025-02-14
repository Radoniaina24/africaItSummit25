import AiAutomatisation from "@/app/features/ai_automation";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "AI | Africa It Summit",
  description: "",
  // other metadata
};

export default function PageAiAutomation() {
  return <AiAutomatisation />;
}
