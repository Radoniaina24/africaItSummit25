import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import {
  FaBuilding,
  FaCarSide,
  FaCog,
  FaDatabase,
  FaGavel,
  FaLock,
  FaSun,
  FaWifi,
} from "react-icons/fa";
export default function Panel() {
  const { language } = useLanguageContext();

  const title = {
    fr: "Conférences et Panels",
    en: "Conferences and Panels",
  };
  const description = {
    fr: "Les villes intelligentes et infrastructures connectées seront au centre des discussions lors de l’Africa IT Summit 2025.",
    en: "Smart cities and connected infrastructures will be at the heart of discussions at the Africa IT Summit 2025.",
  };

  const smartCityTopics = {
    fr: [
      {
        title: "L’intelligence artificielle et la gestion des villes",
        description:
          "Optimisation des flux de circulation, gestion énergétique et automatisation des services municipaux.",
        icon: <FaCog />,
      },
      {
        title: "Internet des Objets (IoT) et infrastructures intelligentes",
        description:
          "Comment les capteurs connectés permettent une gestion plus efficace des ressources urbaines.",
        icon: <FaWifi />,
      },
      {
        title: "Mobilité urbaine et transport intelligent",
        description:
          "L’essor des véhicules électriques, des transports autonomes et des solutions de mobilité partagée.",
        icon: <FaCarSide />,
      },
      {
        title: "Énergies renouvelables et gestion des ressources",
        description:
          "Intégration des énergies propres dans les infrastructures urbaines.",
        icon: <FaSun />,
      },
      {
        title: "Smart buildings et construction durable",
        description:
          "Comment l’architecture et la technologie repensent les bâtiments pour plus d’efficacité énergétique.",
        icon: <FaBuilding />,
      },
      {
        title: "Cybersécurité et villes intelligentes",
        description:
          "Sécurisation des systèmes urbains contre les cyberattaques et protection des données des citoyens.",
        icon: <FaLock />,
      },
      {
        title: "Big Data et gouvernance urbaine",
        description:
          "Utilisation des données pour améliorer la prise de décision et la gestion des services publics.",
        icon: <FaDatabase />,
      },
      {
        title: "Régulation et cadre légal des villes intelligentes en Afrique",
        description:
          "Développement d’un cadre législatif pour accompagner l’évolution des smart cities.",
        icon: <FaGavel />,
      },
    ],
    en: [
      {
        title: "Artificial Intelligence and City Management",
        description:
          "Optimization of traffic flow, energy management, and automation of municipal services.",
        icon: <FaCog />,
      },
      {
        title: "Internet of Things (IoT) and Smart Infrastructure",
        description:
          "How connected sensors enable more efficient urban resource management.",
        icon: <FaWifi />,
      },
      {
        title: "Urban Mobility and Intelligent Transport",
        description:
          "The rise of electric vehicles, autonomous transport, and shared mobility solutions.",
        icon: <FaCarSide />,
      },
      {
        title: "Renewable Energy and Resource Management",
        description: "Integration of clean energy into urban infrastructure.",
        icon: <FaSun />,
      },
      {
        title: "Smart Buildings and Sustainable Construction",
        description:
          "How architecture and technology are reshaping buildings for greater energy efficiency.",
        icon: <FaBuilding />,
      },
      {
        title: "Cybersecurity and Smart Cities",
        description:
          "Securing urban systems against cyberattacks and protecting citizens' data.",
        icon: <FaLock />,
      },
      {
        title: "Big Data and Urban Governance",
        description:
          "Using data to improve decision-making and public service management.",
        icon: <FaDatabase />,
      },
      {
        title: "Regulation and Legal Framework for Smart Cities in Africa",
        description:
          "Developing a legislative framework to support the evolution of smart cities.",
        icon: <FaGavel />,
      },
    ],
  };

  return (
    <section className="bg-gradient-to-br from-[#a261d4] via-[#63b6f1] to-[#e575c5] py-20">
      <div className="container mx-auto ">
        <div className="mb-10">
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: title[language],
              description: description[language],
            }}
            subtitleColor={["#D34FAC", "#0796F5", "#562196"]}
            descriptionColor="white"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {smartCityTopics[language].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="relative flex transform flex-col items-start overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 to-white p-8 text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icône flottante */}
              <div className="absolute right-5 top-5 -mr-6 -mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-600 shadow">
                {item.icon}
              </div>

              {/* Titre */}
              <h2 className="mt-6 text-xl font-bold text-indigo-600">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-4 leading-relaxed text-gray-700">
                {item.description}
              </p>

              {/* Effet visuel */}
              <div className="absolute inset-0 z-[-1] rounded-xl bg-gradient-to-br from-indigo-50 to-white opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
