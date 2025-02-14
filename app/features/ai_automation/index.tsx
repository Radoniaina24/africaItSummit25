"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import SectionHeader from "@/components/Common/SectionHeader";
import FrameDecoration from "@/components/Framedecoration/Framedecoration";
import HeroBanner from "@/components/HeroBanner";
import ParticleAnimation from "@/components/Particles";
import { Card, CardContent } from "@/components/Ui/Card/card";

import Image from "next/image";
import React, { useEffect } from "react";

import {
  FaNetworkWired,
  FaHandshake,
  FaLightbulb,
  FaUserMd,
  FaRocket,
  FaRobot,
  FaTools,
  FaHospital,
  FaChartLine,
  FaClinicMedical,
  FaMoneyBillWave,
  FaBusinessTime,
} from "react-icons/fa";
import AOS from "aos";
import ScrollTitle from "@/components/Scroll/ScrollTitle";
import Why from "./Why";
export default function AiAutomatisation() {
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

  const opportunities = {
    fr: [
      {
        text: "Échangez avec des décideurs du secteur, startups innovantes, grandes entreprises IT, laboratoires pharmaceutiques et investisseurs.",
        icon: FaHandshake,
      },
      {
        text: "Participez à des sessions de networking B2B, B2C et B2G, pour nouer des partenariats stratégiques et accélérer votre croissance.",
        icon: FaLightbulb,
      },
      {
        text: "Présentez vos solutions devant un public qualifié à la recherche d’innovations en santé numérique.",
        icon: FaUserMd,
      },

      {
        text: "Découvrez les dernières innovations en e-santé, télémédecine et intelligence artificielle.",
        icon: FaRobot,
      },

      {
        text: "La demande en solutions de santé numérique explose en Afrique, portée par des besoins croissants en accès aux soins et en efficacité médicale.",
        icon: FaClinicMedical,
      },
      {
        text: "Les gouvernements et les acteurs privés investissent massivement dans la transformation digitale du secteur.",
        icon: FaMoneyBillWave,
      },
      {
        text: "De nombreuses opportunités de financement attendent les startups et entreprises qui innovent dans ce domaine.",
        icon: FaBusinessTime,
      },

      {
        text: "Identifiez les meilleures pratiques pour intégrer les nouvelles technologies dans vos services.",
        icon: FaTools,
      },
      {
        text: "Optimisez votre gestion hospitalière et vos opérations grâce aux solutions digitales exposées.",
        icon: FaHospital,
      },
      {
        text: "Un marché en forte croissance à ne pas manquer",
        icon: FaChartLine,
      },
      {
        text: "Développez votre réseau et accédez à des opportunités d’affaires",
        icon: FaNetworkWired,
      },
      {
        text: "Trouvez des solutions concrètes pour booster votre activité",
        icon: FaRocket,
      },
    ],
    en: [
      {
        text: "Engage with industry leaders, innovative startups, major IT corporations, pharmaceutical labs, and investors.",
        icon: FaHandshake,
      },
      {
        text: "Participate in B2B, B2C, and B2G networking sessions to forge strategic partnerships and accelerate your growth.",
        icon: FaLightbulb,
      },
      {
        text: "Showcase your solutions to a qualified audience seeking innovations in digital health.",
        icon: FaUserMd,
      },
      {
        text: "Discover the latest innovations in e-health, telemedicine, and artificial intelligence.",
        icon: FaRobot,
      },
      {
        text: "The demand for digital health solutions is booming in Africa, driven by increasing needs for healthcare access and medical efficiency.",
        icon: FaClinicMedical,
      },
      {
        text: "Governments and private sector players are heavily investing in the digital transformation of healthcare.",
        icon: FaMoneyBillWave,
      },
      {
        text: "Numerous funding opportunities await startups and companies innovating in this sector.",
        icon: FaBusinessTime,
      },
      {
        text: "Identify best practices for integrating new technologies into your services.",
        icon: FaTools,
      },
      {
        text: "Optimize hospital management and operations with the digital solutions showcased.",
        icon: FaHospital,
      },
      {
        text: "A rapidly growing market not to be missed.",
        icon: FaChartLine,
      },
      {
        text: "Expand your network and access business opportunities.",
        icon: FaNetworkWired,
      },
      {
        text: "Find concrete solutions to boost your business.",
        icon: FaRocket,
      },
    ],
  };
  const why = {
    fr: "Pourquoi Participer à l’Africa IT Summit 2025",
    en: "Why Attend the Africa IT Summit 2025?",
  };
  const heathNumeric = {
    fr: "Santé Numérique : Un Enjeu Stratégique",
    en: "Digital Health: A Strategic Challenge",
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

        {/* Stratégique */}
        {/* <section className="bg-white">
          <div className="relative z-10 mx-auto max-w-7xl py-20 text-center">
            <h2
              className=" mb-4 bg-gradient-to-r from-[#562196] via-[#D34FAC] to-[#0796F5] bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl "
              data-aos="fade-up"
            >
              {heathNumeric[language]}
            </h2>
          </div>
        </section> */}
      </section>
    </ParticleAnimation>
  );
}
