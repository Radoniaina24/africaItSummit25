"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import FeaturesTab from "@/components/FeaturesTab";
import FrameDecoration from "@/components/Framedecoration/Framedecoration";
import ScrollTitle from "@/components/Scroll/ScrollTitle";
import React from "react";

export default function GetYourPass() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Obtenez votre pass",
    en: "Get your pass",
  };
  const description = {
    fr: "Décembre 2025 à Maurice",
    en: "December 2025 in Mauritius",
  };
  return (
    <section className="bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5]">
      {/* Title and description */}
      <div className="relative flex items-center justify-center bg-gradient-to-br from-[#63b6f1]  via-[#a261d4] to-[#e575c5] py-36 sm:h-[300px] lg:h-[400px] xl:h-[600px]">
        {/* <ScrollTitle text={title[language]} /> */}
        <div className="mx-auto max-w-4xl rounded-lg bg-transparent px-5  text-center text-2xl font-semibold text-blue-600  backdrop-blur-sm  sm:text-2xl md:text-4xl lg:text-4xl  xl:text-5xl">
          <div className="bg-gradient-to-br from-[#337dae] via-[#562196]  to-[#e722ac] bg-clip-text uppercase text-transparent">
            {title[language]}
          </div>
          <p className="py-5 text-3xl">{description[language]}</p>
        </div>
        <div className="absolute bottom-0 w-full">
          <FrameDecoration />
        </div>
      </div>

      <FeaturesTab />
    </section>
  );
}
