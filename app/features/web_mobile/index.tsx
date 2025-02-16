"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import SectionHeader from "@/components/Common/SectionHeader";
import FrameDecoration from "@/components/Framedecoration/Framedecoration";
import ParticleAnimation from "@/components/Particles";
import React, { useEffect } from "react";
import AOS from "aos";
import ScrollTitle from "@/components/Scroll/ScrollTitle";

import InfoAfricaItSummit from "../Information";
import Networking from "./Networking";
import Opportunities from "./Opportunities";
import Exhibitions from "./Exhibitions";
import Panel from "./Panel";
import Why from "./Why";

export default function WebMobile() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Transition fluide
    });
  }, []);
  const colors = ["#0796F5", "#D34FAC", "#562196"];
  const { language } = useLanguageContext();
  const title = {
    fr: "Développement Web & Mobile",
    en: "Web & Mobile Development",
  };
  const description = {
    fr: "L’essor rapide des technologies web et mobiles transforme le paysage numérique africain, permettant aux entreprises, aux gouvernements et aux startups d’accéder à de nouveaux marchés, d’innover plus rapidement et d’améliorer l’expérience utilisateur. De l’e-commerce et la fintech aux applications basées sur l’intelligence artificielle et aux solutions cloud, les plateformes numériques stimulent la croissance économique et redéfinissent les industries à travers le continent.",
    en: "The rapid expansion of web and mobile technologies is transforming Africa’s digital landscape, enabling businesses, governments, and startups to reach new markets, innovate faster, and enhance user experiences. From e-commerce and fintech to AI-powered apps and cloud solutions, digital platforms are driving economic growth and reshaping industries across the continent.",
  };
  const why = {
    fr: "Pourquoi Participer à l’Africa IT Summit 2025",
    en: "Why Attend the Africa IT Summit 2025?",
  };

  const description2 = {
    fr: "Lors de l'Africa IT Summit 2025, les principaux développeurs web et mobiles, startups, entreprises technologiques, investisseurs et décideurs se réuniront pour explorer les innovations de pointe, les opportunités d’affaires et l’avenir de la transformation numérique en Afrique.",
    en: "At Africa IT Summit 2025, leading web & mobile developers, startups, tech enterprises, investors, and policymakers will gather to explore cutting-edge innovations, business opportunities, and the future of digital transformation in Africa.",
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

        {/*  description 2 */}
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

        {/* why choose africa it summit */}
        <Why />
        {/* Panel and conference */}
        <Panel />
        {/* Exhibitions */}
        <Exhibitions />
        {/* Opportunities */}
        {/* <Opportunities /> */}
        {/* Networking */}
        <Networking />
        <InfoAfricaItSummit />
      </section>
    </ParticleAnimation>
  );
}
