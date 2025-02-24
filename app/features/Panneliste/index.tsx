"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import FrameDecoration from "@/components/Framedecoration/Framedecoration";
import ScrollTitle from "@/components/Scroll/ScrollTitle";
import React from "react";
import FormPanelist from "./FormPanelist";
import Why from "./Why";
import Biography from "./Biography";

export default function index() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Devenez Panneliste VIP",
    en: "Become a VIP Panelist",
  };
  const description = {
    fr: "Participez en tant que panneliste VIP à cet événement de renommée internationale et positionnez-vous comme un acteur clé du secteur numérique en Afrique. Saisissez l’opportunité de partager votre expertise et de rejoindre un réseau exclusif d’investisseurs, de décideurs et de leaders d’opinion.",
    en: "Join us as a VIP panelist at this internationally renowned event and establish yourself as a key player in Africa’s digital sector. Seize the opportunity to share your expertise and connect with an exclusive network of investors, decision-makers, and thought leaders.",
  };
  return (
    <section className="bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5]">
      {/* Title and description */}
      <div className="relative h-[500px]  bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] py-36">
        {/* <ScrollTitle text={title[language]} /> */}
        <div className="  ">
          <div className="mx-auto text-center">
            <div className={``}>
              <div className="mx-auto mb-10 max-w-4xl rounded-lg bg-transparent px-5 text-center text-2xl font-semibold text-blue-600  backdrop-blur-sm  sm:text-2xl md:text-4xl lg:text-4xl">
                <div className="bg-gradient-to-br from-[#337dae]  via-[#562196] to-[#e722ac] bg-clip-text text-transparent">
                  {title[language]}
                </div>
              </div>
            </div>
            <p className="mx-auto text-white md:w-4/5 lg:w-3/5 xl:w-[46%]">
              {description[language]}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <FrameDecoration />
        </div>
      </div>

      <Biography />
      <FormPanelist />
      <Why />
    </section>
  );
}
