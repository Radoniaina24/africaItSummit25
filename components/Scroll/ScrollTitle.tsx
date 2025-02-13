"use client";
import { useState } from "react";
interface ScrollTitleProps {
  text: string; // Le texte à afficher
}
const ScrollTitle: React.FC<ScrollTitleProps> = ({ text }) => {
  return (
    <div className={` sticky left-1/2 top-24 z-50  `}>
      <div className="mx-auto max-w-4xl rounded-lg bg-transparent px-5  text-center text-2xl font-semibold text-blue-600  backdrop-blur-sm  sm:text-2xl md:text-4xl lg:text-4xl">
        <div className="bg-gradient-to-br from-[#337dae]  via-[#562196] to-[#e722ac] bg-clip-text text-transparent">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ScrollTitle;
