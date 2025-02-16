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
export default function DigitalTechnologie() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Transition fluide
    });
  }, []);
  const colors = ["#0796F5", "#D34FAC", "#562196"];
  const { language } = useLanguageContext();
  const title = {
    fr: "Technologies Numériques Durables ",
    en: "Sustainable Digital Technologies",
  };
  const description = {
    fr: "À l’heure où le numérique révolutionne tous les secteurs, la question de la durabilité et de l’impact environnemental des technologies devient essentielle. L’Afrique, en pleine transformation digitale, a l’opportunité d’adopter des solutions numériques responsables pour favoriser une croissance économique durable tout en réduisant son empreinte écologique.",
    en: "As digital technologies continue to revolutionize every sector, the question of sustainability and the environmental impact of technology has become crucial. Africa, undergoing a profound digital transformation, has the opportunity to embrace responsible digital solutions that drive sustainable economic growth while minimizing its ecological footprint.",
  };

  const description2 = {
    fr: "Des centres de données écoénergétiques à l’intelligence artificielle pour l’optimisation énergétique, en passant par l’économie circulaire des équipements électroniques et la blockchain pour la traçabilité des ressources, les technologies durables ouvrent un nouveau champ d’innovation et d’opportunités économiques.",
    en: "From energy-efficient data centers to artificial intelligence for energy optimization, circular economy initiatives for electronic equipment, and blockchain for resource traceability, sustainable technologies are unlocking new avenues for innovation and economic opportunities.",
  };
  const description3 = {
    fr: "L’Africa IT Summit 2025 réunira les entreprises technologiques, les startups, les décideurs politiques, les investisseurs et les chercheurs pour discuter des avancées, des défis et des opportunités liés aux technologies numériques durables en Afrique et dans l’océan Indien.",
    en: "The Africa IT Summit 2025 will bring together technology companies, startups, policymakers, investors, and researchers to discuss advancements, challenges, and opportunities related to sustainable digital technologies in Africa and the Indian Ocean region.",
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
