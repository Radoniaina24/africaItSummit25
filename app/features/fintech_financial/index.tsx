"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import SectionHeader from "@/components/Common/SectionHeader";
import FrameDecoration from "@/components/Framedecoration/Framedecoration";
import ParticleAnimation from "@/components/Particles";
import React, { useEffect } from "react";
import AOS from "aos";
import ScrollTitle from "@/components/Scroll/ScrollTitle";

import InfoAfricaItSummit from "../Information";
import Why from "./Why";
import Panel from "./Panel";
import Exhibitions from "./Exhibitions";
import Opportunities from "./Opportunities";
import Networking from "./Networking";
export default function FintechFinancial() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Transition fluide
    });
  }, []);
  const colors = ["#0796F5", "#D34FAC", "#562196"];
  const { language } = useLanguageContext();
  const title = {
    fr: "Fintech et Inclusion Financière",
    en: "Fintech and Financial Inclusion",
  };
  const description = {
    fr: "L’Afrique connaît une révolution financière sans précédent, portée par l’essor des technologies numériques. La Fintech redéfinit les services bancaires, l’accès au crédit, les paiements mobiles et les investissements, ouvrant la voie à une inclusion financière massive sur le continent.",
    en: "Africa is experiencing an unprecedented financial revolution driven by the rise of digital technologies. Fintech is reshaping banking services, access to credit, mobile payments, and investments, paving the way for widespread financial inclusion across the continent.",
  };
  const why = {
    fr: "Pourquoi Participer à l’Africa IT Summit 2025",
    en: "Why Attend the Africa IT Summit 2025?",
  };

  const description2 = {
    fr: "L’Africa IT Summit 2025 réunira les entreprises fintech, les institutions financières, les startups, les investisseurs et les décideurs politiques pour explorer les opportunités et les défis de l’inclusion financière à travers les technologies numériques.",
    en: "The Africa IT Summit 2025 will bring together fintech companies, financial institutions, startups, investors, and policymakers to explore the opportunities and challenges of financial inclusion through digital technologies.",
  };
  return (
    <ParticleAnimation>
      {" "}
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
        <section className=" bg-white pb-10">
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
        <section className="bg-gradient-to-br from-[#a261d4] via-[#63b6f1] to-[#e575c5] py-20">
          <div className="relative z-10 mx-auto max-w-7xl text-center">
            <h2
              className="  bg-gradient-to-r from-[#562196] via-[#D34FAC] to-[#0796F5] bg-clip-text text-xl font-extrabold text-transparent md:text-4xl"
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
