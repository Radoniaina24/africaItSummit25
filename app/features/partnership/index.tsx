"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import Sponsors from "./Sponsors";
import Partnerships from "./Partnership";
import Why from "./why";
export default function Partnership() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Opportunités de Sponsoring & Partenariats – Africa IT Summit 2025",
    en: "Sponsorship & Partnership Opportunities",
  };
  const description = {
    fr: "L’Africa IT Summit 2025 vous propose des opportunités stratégiques pour associer votre marque à l’un des événements les plus influents du secteur numérique en Afrique. Choisissez parmi nos différentes catégories de sponsoring et partenariat pour maximiser votre visibilité, développer des partenariats clés et jouer un rôle central dans l’innovation numérique du continent.",
    en: "The Africa IT Summit 2025 offers strategic opportunities to align your brand with one of the most influential digital industry events in Africa. Choose from our various sponsorship and partnership categories to maximize your visibility, build key relationships, and play a central role in driving digital innovation on the continent.",
  };
  return (
    <section className="bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5]">
      {/* Title and description */}
      <div className="  bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] py-36">
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
        {/* <div className="absolute bottom-0 w-full">
          <FrameDecoration />
        </div> */}
        <Sponsors />
        <Partnerships />
        <Why />
      </div>
    </section>
  );
}
