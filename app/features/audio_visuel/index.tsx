"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import FrameDecoration from "@/components/Framedecoration/Framedecoration";
import ParticleAnimation from "@/components/Particles";
import ScrollTitle from "@/components/Scroll/ScrollTitle";
import React from "react";
import Why from "./Why";

export default function AudioVisuel() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Cinématographie et Audiovisuel à l’Ère du Numérique",
    en: "Cinematography and Audiovisual Media in the Digital Age",
  };
  const description = {
    fr: "Le monde du cinéma et de l’audiovisuel en Afrique est en pleine transformation ! L’essor des nouvelles technologies révolutionne la production, la distribution et la monétisation des contenus, ouvrant la voie à de nouvelles opportunités commerciales et professionnelles. Que vous soyez créateur de contenu, professionnel du secteur, investisseur, entreprise technologique, décideur public ou acteur de la formation, l’Africa IT Summit 2025 est l’événement incontournable pour comprendre, anticiper et exploiter le potentiel du numérique dans l’audiovisuel.",
    en: "The world of cinema and audiovisual media in Africa is undergoing a major transformation! The rise of new technologies is revolutionizing content production, distribution, and monetization, paving the way for new business and professional opportunities. Whether you are a content creator, industry professional, investor, tech company, policymaker, or involved in training and education, the Africa IT Summit 2025 is the must-attend event to understand, anticipate, and harness the potential of digital innovation in the audiovisual sector.",
  };

  return (
    <ParticleAnimation>
      <section className="bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5]">
        <ScrollTitle text={title[language]} />
        <div className="relative h-[500px]  py-36">
          {/* <ScrollTitle text={title[language]} /> */}
          <div className="  ">
            <div className="mx-auto text-center">
              <p className="mx-auto text-white md:w-4/5 lg:w-3/5 xl:w-[46%]">
                {description[language]}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 w-full">
            <FrameDecoration />
          </div>
        </div>
        <Why />
      </section>
    </ParticleAnimation>
  );
}
