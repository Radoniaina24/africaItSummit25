"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import themes from "./dataTheme";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
export default function ThemeAfricaSummit() {
  const { language } = useLanguageContext();
  return (
    <div className="container mx-auto px-4">
      <SectionHeader
        headerInfo={{
          title: "",
          subtitle: "Theme Africa It Summit 2025",
          description: "",
        }}
      />
      <div className="my-20 mt-14 flex flex-wrap justify-center gap-6">
        {themes[language].map((theme, index) => (
          <Link
            href={theme.link}
            key={index}
            className="flex h-[400px] w-full cursor-pointer flex-col rounded-xl border p-4 shadow-md transition-all duration-300  hover:shadow-lg md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={theme.image}
                alt={theme.title}
                className="h-56 w-full rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                width={500}
                height={500}
              />
            </div>
            <div className="my-4 flex flex-1 flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-[#0796F5] transition-colors duration-300 ">
                {theme.title.toUpperCase()}
              </h3>
              <p className="mt-2 text-gray-600 transition-colors duration-300 ">
                {theme.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
