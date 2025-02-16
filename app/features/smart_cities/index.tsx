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
export default function SmartCities() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Transition fluide
    });
  }, []);
  const colors = ["#0796F5", "#D34FAC", "#562196"];
  const { language } = useLanguageContext();
  const title = {
    fr: "Villes Intelligentes et Infrastructures Connectées",
    en: "Smart Cities and Connected Infrastructures",
  };
  const description = {
    fr: "L’urbanisation rapide de l’Afrique pose de nouveaux défis en matière de mobilité, gestion des ressources, sécurité, énergie et qualité de vie des citoyens. Pour répondre à ces enjeux, les villes intelligentes et les infrastructures connectées émergent comme des solutions clés pour bâtir des environnements urbains plus durables, efficaces et inclusifs.",
    en: "Africa's rapid urbanization presents new challenges in mobility, resource management, security, energy, and citizens' quality of life. To address these issues, smart cities and connected infrastructures are emerging as key solutions to build more sustainable, efficient, and inclusive urban environments.",
  };

  const description2 = {
    fr: "Grâce aux avancées en intelligence artificielle, Internet des Objets (IoT), Big Data, blockchain et 5G, il est désormais possible d’optimiser la gestion des villes, d’améliorer les services publics et d’assurer une meilleure interaction entre les citoyens et leur environnement.",
    en: "Thanks to advancements in artificial intelligence, the Internet of Things (IoT), Big Data, blockchain, and 5G, it is now possible to optimize city management, improve public services, and ensure better interaction between citizens and their environment.",
  };
  const description3 = {
    fr: "L’Africa IT Summit 2025 réunira des experts en urbanisme, des entreprises technologiques, des investisseurs, des startups et des décideurs politiques pour discuter des stratégies, technologies et opportunités liées aux villes intelligentes et aux infrastructures connectées en Afrique.",
    en: "The Africa IT Summit 2025 will bring together urban planning experts, technology companies, investors, startups, and policymakers to discuss strategies, technologies, and opportunities related to smart cities and connected infrastructures in Africa.",
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
            <SectionHeader
              headerInfo={{
                title: "",
                subtitle: "",
                description: description3[language],
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
