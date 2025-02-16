import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import {
  FaServer,
  FaLightbulb,
  FaRecycle,
  FaCloud,
  FaCity,
  FaShieldAlt,
  FaGavel,
  FaMicrochip,
} from "react-icons/fa";
export default function Panel() {
  const { language } = useLanguageContext();

  const title = {
    fr: "Conférences et Panels",
    en: "Conferences and Panels",
  };
  const description = {
    fr: "Les experts du secteur partageront leurs connaissances et leurs expériences pour développer un écosystème numérique plus durable.",
    en: "Industry experts will share their knowledge and experiences to foster a more sustainable digital ecosystem.",
  };

  const sustainableITTopics = {
    fr: [
      {
        title:
          "Green Data Centers et infrastructures numériques écoénergétiques",
        description:
          "Comment réduire l’impact environnemental des infrastructures IT.",
        icon: <FaServer />,
      },
      {
        title: "L’intelligence artificielle pour l’optimisation énergétique",
        description:
          "Applications et solutions pour une gestion intelligente des ressources.",
        icon: <FaLightbulb />,
      },
      {
        title: "Blockchain et traçabilité environnementale",
        description:
          "Garantir une transparence totale dans la gestion des ressources naturelles et industrielles.",
        icon: <FaMicrochip />,
      },
      {
        title: "Économie circulaire et recyclage des équipements numériques",
        description:
          "Stratégies pour une gestion durable des déchets électroniques.",
        icon: <FaRecycle />,
      },
      {
        title: "Cloud computing et efficacité énergétique",
        description:
          "Optimisation des services cloud pour minimiser leur empreinte carbone.",
        icon: <FaCloud />,
      },
      {
        title: "Smart cities et infrastructures durables",
        description:
          "Rôle du numérique dans la construction de villes intelligentes et écoresponsables.",
        icon: <FaCity />,
      },
      {
        title: "Cybersécurité et protection des données vertes",
        description:
          "Sécurisation des infrastructures tout en minimisant leur consommation énergétique.",
        icon: <FaShieldAlt />,
      },
      {
        title:
          "Régulation et cadre législatif pour un numérique durable en Afrique",
        description:
          "Défis et opportunités des politiques publiques en matière d’IT responsable.",
        icon: <FaGavel />,
      },
    ],
    en: [
      {
        title: "Green Data Centers and Energy-Efficient Digital Infrastructure",
        description:
          "How to reduce the environmental impact of IT infrastructure.",
        icon: <FaServer />,
      },
      {
        title: "Artificial Intelligence for Energy Optimization",
        description:
          "Applications and solutions for intelligent resource management.",
        icon: <FaLightbulb />,
      },
      {
        title: "Blockchain and Environmental Traceability",
        description:
          "Ensuring full transparency in the management of natural and industrial resources.",
        icon: <FaMicrochip />,
      },
      {
        title: "Circular Economy and Digital Equipment Recycling",
        description: "Strategies for sustainable electronic waste management.",
        icon: <FaRecycle />,
      },
      {
        title: "Cloud Computing and Energy Efficiency",
        description:
          "Optimizing cloud services to minimize their carbon footprint.",
        icon: <FaCloud />,
      },
      {
        title: "Smart Cities and Sustainable Infrastructure",
        description:
          "The role of digital technology in building smart and eco-friendly cities.",
        icon: <FaCity />,
      },
      {
        title: "Cybersecurity and Green Data Protection",
        description:
          "Securing infrastructure while minimizing energy consumption.",
        icon: <FaShieldAlt />,
      },
      {
        title: "Regulation and Legal Framework for Sustainable IT in Africa",
        description:
          "Challenges and opportunities of public policies for responsible IT.",
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
          {sustainableITTopics[language].map((item, index) => (
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
