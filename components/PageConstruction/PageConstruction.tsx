"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";

export default function PageConstruction() {
  const { language } = useLanguageContext();
  const btntext = {
    fr: "Retour à la page d'accueil ",
    en: "Return to Home",
  };
  const text = {
    fr: "Cette page est actuellement en cours de  construction.",
    en: "This page is currently under construction.",
  };
  return (
    <section className="flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#42A9F5] via-[#E05CBB] to-[#7B42A6] pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
      <div className="animate_top mx-auto max-w-[518px] text-center">
        <h2 className="mb-9 bg-gradient-to-br from-[#42A9F5] via-[#7B42A6] to-[#E05CBB] bg-clip-text text-2xl font-semibold  text-transparent md:text-3xl">
          {text[language]}
        </h2>

        <a
          href="/"
          className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
        >
          {btntext[language]}
          <svg
            className="fill-white"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
              fill=""
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
