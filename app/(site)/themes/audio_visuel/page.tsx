import AudioVisuel from "@/app/features/audio_visuel";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Themes | Africa It Summit",

  // other metadata
};
export default function PageAudioVisuel() {
  return <AudioVisuel />;
}
