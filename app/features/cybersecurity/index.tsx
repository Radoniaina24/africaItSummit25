"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import SectionHeader from "@/components/Common/SectionHeader";
import FrameDecoration from "@/components/Framedecoration/Framedecoration";
import ParticleAnimation from "@/components/Particles";
import React, { useEffect } from "react";
import AOS from "aos";
import ScrollTitle from "@/components/Scroll/ScrollTitle";
import Why from "./Why";
import Panel from "./Panel";
import Exhibitions from "./Exhibitions";
import Opportunities from "./Opportunities";
import Networking from "./Networking";
import InfoAfricaItSummit from "../Information";
export default function Cybersecurity() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Transition fluide
    });
  }, []);

  const { language } = useLanguageContext();
  const title = {
    fr: "Cybersécurité et Protection des Données",
    en: "Cybersecurity and Data Protection",
  };
  const description = {
    fr: "À l’ère du numérique, la cybersécurité et la protection des données sont devenues des enjeux majeurs pour les entreprises, les gouvernements et les particuliers. Alors que l’Afrique connaît une accélération de sa transformation digitale, les cyberattaques, les menaces informatiques et la vulnérabilité des infrastructures numériques représentent des défis critiques pour la sécurité des systèmes d’information.",
    en: "In the digital age, cybersecurity and data protection have become critical concerns for businesses, governments, and individuals alike. As Africa undergoes rapid digital transformation, cyberattacks, IT threats, and the vulnerability of digital infrastructures pose significant challenges to information system security.",
  };

  const description2 = {
    fr: "L’Africa IT Summit 2025 réunira les experts en cybersécurité, les entreprises technologiques, les institutions financières, les gouvernements et les startups pour explorer les dernières innovations, les stratégies de protection et les opportunités d’affaires dans le domaine de la cybersécurité en Afrique et dans l’océan Indien.",
    en: "The Africa IT Summit 2025 will bring together cybersecurity experts, technology companies, financial institutions, governments, and startups to explore the latest innovations, protection strategies, and business opportunities in cybersecurity across Africa and the Indian Ocean region.",
  };
  return (
    <ParticleAnimation>
      <section className="bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5]">
        <ScrollTitle text={title[language]} />
        {/* Title and description */}
        <div className="relative h-[500px]  bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] py-36">
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

        {/*  description 2 et 3 */}
        <section className="bg-white pb-10">
          <div className="container relative mx-auto px-5 py-4 text-center text-lg">
            <hr className="mx-auto mb-5 w-1/2 border-t-4 border-purple-600" />
            <SectionHeader
              headerInfo={{
                title: "",
                subtitle: "",
                description: description2[language],
              }}
            />
            <hr className="mx-auto mt-5 w-1/2 border-t-4 border-purple-600" />
          </div>
        </section>
        {/* Why */}
        <Why />
        {/* Panel and conference */}
        <Panel />
        {/* Exhibitions */}
        <Exhibitions />
        {/* Opportunities */}
        <Opportunities />
        {/* Networking */}
        <Networking />
        <InfoAfricaItSummit />
      </section>
    </ParticleAnimation>
  );
}
