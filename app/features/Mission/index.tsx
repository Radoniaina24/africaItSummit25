"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import MissionCards from "./MissionCard";
import VisionSection from "./Vision";
import EventSection from "./Event";

export default function Mission() {
  const { language } = useLanguageContext();

  const title =
    language === "fr"
      ? "Africa IT Summit – Le Sommet Annuel du Numérique en Afrique."
      : "Africa IT Summit – The Annual Digital Summit in Africa";
  const subtitle =
    language === "fr"
      ? "L’Africa IT Summit est le rendez-vous annuel incontournable pour accélérer la transformation digitale du continent. Il rassemble les leaders technologiques, entreprises innovantes, startups, investisseurs et décideurs publics afin de créer un écosystème dynamique propice à l’innovation, aux investissements et aux collaborations stratégiques."
      : "The Africa IT Summit is the premier annual event dedicated to accelerating the continent’s digital transformation. It brings together technology leaders, innovative companies, startups, investors, and policymakers to foster a dynamic ecosystem that drives innovation, investment, and strategic collaborations.";
  return (
    <section>
      <div className="relative bg-white px-6 py-20 ">
        {/* Overlay pour améliorer la lisibilité */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

        {/* Contenu principal */}
        <div className="relative z-10 mx-auto mb-10 max-w-7xl text-center">
          {/* Titre principal */}
          <h2
            className=" mb-4 bg-gradient-to-r from-[#0796F5] via-[#D34FAC] to-[#562196] bg-clip-text text-xl font-extrabold text-transparent md:text-4xl"
            data-aos="fade-up"
          >
            {title.toLocaleUpperCase()}
          </h2>

          {/* Sous-titre */}
          <p
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 "
            data-aos="fade-in"
          >
            {subtitle}
          </p>
        </div>
        <VisionSection lang={language} />
        <MissionCards lang={language} />
        <EventSection lang={language} />
      </div>
    </section>
  );
}
