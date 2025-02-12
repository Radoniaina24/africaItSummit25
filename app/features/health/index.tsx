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
import HealthStrategique from "./HealthStrategique";
import PanelInteractif from "./PanelInteractif";

import AOS from "aos";
import Assurance from "./Assurance";
import EspaceNetworking from "./EspaceNetworking";
import InfoAfricaItSummit from "../Information";
export default function HealthDetails() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Transition fluide
    });
  }, []);
  const colors = ["#0796F5", "#D34FAC", "#562196"];
  const { language } = useLanguageContext();
  const title = {
    fr: "Santé Numérique & Opportunités d’Affaires à l’Africa IT Summit 2025",
    en: "Digital Health & Business Opportunities at the Africa IT Summit 2025",
  };
  const description = {
    fr: "L’Afrique est en pleine révolution numérique, et le secteur de la santé n’échappe pas à cette transformation. De la télémédecine à l’intelligence artificielle, en passant par la blockchain et les objets connectés, les innovations technologiques ouvrent un marché immense et prometteur pour les professionnels de la santé et du numérique.",
    en: "Africa is undergoing a digital revolution, and the healthcare sector is no exception to this transformation. From telemedicine to artificial intelligence, blockchain, and connected devices, technological innovations are opening up a vast and promising market for healthcare and digital professionals.",
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
  const description2 = {
    fr: "L’Africa IT Summit 2025 offrira une plateforme unique aux acteurs de la santé, de la technologie, des investissements et de la formation pour se rencontrer, découvrir les nouvelles endances et saisir les opportunités d’un marché en pleine expansion.",
    en: "The Africa IT Summit 2025 will provide a unique platform for stakeholders in healthcare, technology, investment, and education to connect, explore emerging trends, and seize opportunities in a rapidly expanding market.",
  };
  const why = {
    fr: "Pourquoi Participer à l’Africa IT Summit 2025",
    en: "Why Attend the Africa IT Summit 2025?",
  };
  const heathNumeric = {
    fr: "Santé Numérique : Un Enjeu Stratégique",
    en: "Digital Health: A Strategic Challenge",
  };
  return (
    <ParticleAnimation>
      <section className="">
        {/* Title and description */}
        <div className="relative h-[700px] bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] py-36">
          <div className="  ">
            <div className="mx-auto text-center">
              <h2 className="mx-auto mb-4 bg-gradient-to-r from-[#337dae]  via-[#562196] to-[#e722ac] bg-clip-text text-2xl   font-bold text-transparent md:w-4/5 lg:text-4xl xl:w-1/2 xl:text-4xl">
                {title[language]}
              </h2>
              <p className="mx-auto text-white md:w-4/5 lg:w-3/5 xl:w-[46%]">
                {description[language]}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 w-full">
            <FrameDecoration />
          </div>
        </div>

        {/* Title 2 and description with Image */}
        <div className=" container relative mx-auto">
          <div className=" py-20">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-center">
              {/* Partie texte */}
              <div className="text-center md:w-1/3 md:text-left">
                <h2 className="mb-4 text-3xl font-bold text-[#D34FAC]">
                  L’Africa IT Summit 2025
                </h2>
                <p className="text-md leading-relaxed text-gray-700">
                  {description2[language]}
                </p>
              </div>

              {/* Partie image */}
              <div className="relative flex justify-center md:w-1/3">
                <Image
                  width={400}
                  height={400}
                  src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1739262906/Radoniaina_Michael_ANDRIAMBOLA_digital_health_d6dd9028-5536-4e51-818c-b8591e83457a_ydoide.png"
                  alt="Africa IT Summit 2025"
                  className="rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* why choose africa it summit */}
        {/* Opportunities */}
        <section
          className="relative bg-cover bg-fixed bg-center px-6 py-16 text-white"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1739273129/17818_dbeonz.jpg')`,
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
          <div className="container mx-auto py-20">
            <div className="grid grid-cols-1 gap-10 p-4 md:grid-cols-2 lg:grid-cols-4">
              {opportunities[language].map((item, index) => (
                <Card
                  key={index}
                  className="relative rounded-xl  p-6 shadow-lg transition-all duration-300 hover:cursor-pointer hover:border-none hover:bg-[#55a5da] hover:text-white hover:shadow-xl"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded-full border border-gray-200 bg-gray-200 p-5 shadow-md">
                    <item.icon
                      className="text-4xl "
                      style={{ color: colors[index % colors.length] }}
                    />
                  </div>
                  <CardContent className="pt-10 text-center">
                    <p className="text-md font-medium text-gray-700">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Santé Numérique : Un Enjeu Stratégique */}

        <div className="relative z-10 mx-auto max-w-7xl py-20 text-center">
          <h2
            className=" mb-4 bg-gradient-to-r from-[#562196] via-[#D34FAC] to-[#0796F5] bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl "
            data-aos="fade-up"
          >
            {heathNumeric[language]}
          </h2>
        </div>
        <HealthStrategique />
        {/*panels interactifs et des retours d’expérience concrets */}
        <PanelInteractif />
        {/*Assurance*/}
        <Assurance />
        {/* Espace Networking */}
        <EspaceNetworking />
        <InfoAfricaItSummit />
      </section>
    </ParticleAnimation>
  );
}
