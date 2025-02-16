"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import SectionHeader from "@/components/Common/SectionHeader";
import FrameDecoration from "@/components/Framedecoration/Framedecoration";
import ParticleAnimation from "@/components/Particles";
import React, { useEffect } from "react";
import AOS from "aos";
import ScrollTitle from "@/components/Scroll/ScrollTitle";

import InfoAfricaItSummit from "../Information";
import Exhibitions from "../ai_automation/Exhibitions";
import Networking from "../ai_automation/Networking";
import Opportunities from "../ai_automation/Opportunities";
import Panel from "../ai_automation/Panel";
import Why from "../ai_automation/Why";
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
    fr: "Intelligence Artificielle et Automatisation",
    en: "Artificial Intelligence and Automation",
  };
  const description = {
    fr: "L’intelligence artificielle (IA) et l’automatisation redéfinissent la manière dont les entreprises et les industries opèrent à travers le monde. En Afrique, ces technologies offrent des opportunités considérables pour améliorer l’efficacité des entreprises, optimiser les processus, renforcer la prise de décision et stimuler la productivité dans de nombreux secteurs : santé, finance, logistique, industrie, éducation, agriculture et bien plus encore.",
    en: "Artificial Intelligence (AI) and automation are redefining how businesses and industries operate worldwide. In Africa, these technologies present significant opportunities to enhance business efficiency, optimize processes, strengthen decision-making, and boost productivity across various sectors, including healthcare, finance, logistics, industry, education, agriculture, and many more.",
  };
  const why = {
    fr: "Pourquoi Participer à l’Africa IT Summit 2025",
    en: "Why Attend the Africa IT Summit 2025?",
  };

  const description2 = {
    fr: "L’Africa IT Summit 2025 mettra en avant le rôle stratégique de l’IA et de l’automatisation dans la transformation digitale du continent. L’événement réunira des leaders technologiques, des entreprises, des startups, des chercheurs et des décideurs politiques pour explorer les tendances, les défis et les opportunités liées à l’adoption de ces technologies en Afrique et dans l’océan Indien.",
    en: "The Africa IT Summit 2025 will highlight the strategic role of AI and automation in the digital transformation of the continent. The event will bring together technology leaders, businesses, startups, researchers, and policymakers to explore trends, challenges, and opportunities related to the adoption of these technologies in Africa and the Indian Ocean region.",
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
        <section
          className="relative bg-cover bg-fixed bg-center px-6 py-16 text-white"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1739515105/2149524383_n27c5n.jpg')`,
          }}
        >
          <div className="relative z-10 mx-auto max-w-7xl text-center">
            <h2
              className=" mb-4 bg-gradient-to-r from-[#562196] via-[#D34FAC] to-[#0796F5] bg-clip-text text-xl font-extrabold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              {why[language]}
            </h2>
          </div>
          <Why />
        </section>

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
