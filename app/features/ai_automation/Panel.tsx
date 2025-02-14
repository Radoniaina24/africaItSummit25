import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import { InnovationItem } from "../audio_visuel/Innovation";
import SectionHeader from "@/components/Common/SectionHeader";
import {
  FaIndustry,
  FaHospital,
  FaSeedling,
  FaLock,
  FaBalanceScale,
  FaChalkboardTeacher,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
export default function Panel() {
  const { language } = useLanguageContext();

  const title = {
    fr: "Conférences et Panels",
    en: "Conferences and Panels",
  };
  const description = {
    fr: "Les meilleurs experts du domaine partageront leurs analyses et expériences sur des sujets clés :",
    en: "Top industry experts will share their insights and experiences on key topics:",
  };
  const aiAndAutomationTopics = {
    fr: [
      {
        title: "IA et automatisation dans l’entreprise",
        description:
          "Comment optimiser les opérations et améliorer la productivité.",
        icon: <FaIndustry />,
      },
      {
        title: "L’IA dans la finance et la banque",
        description:
          "Gestion des risques, détection de la fraude, automatisation des services financiers.",
        icon: <FaRegMoneyBillAlt />,
      },
      {
        title: "IA et e-santé",
        description:
          "Intelligence artificielle au service du diagnostic médical, de la télémédecine et de la gestion hospitalière.",
        icon: <FaHospital />,
      },
      {
        title: "Industrie 4.0 et automatisation",
        description:
          "Usines intelligentes, robots et optimisation des chaînes de production.",
        icon: <FaIndustry />,
      },
      {
        title: "Agriculture intelligente et IA",
        description:
          "Améliorer les rendements agricoles grâce à l’analyse des données et l’automatisation des tâches.",
        icon: <FaSeedling />,
      },
      {
        title: "L’IA au service de la cybersécurité",
        description:
          "Protection contre les cyberattaques et détection des menaces en temps réel.",
        icon: <FaLock />,
      },
      {
        title: "Éthique et régulation de l’IA en Afrique",
        description:
          "Enjeux juridiques et cadres réglementaires pour une adoption responsable.",
        icon: <FaBalanceScale />,
      },
      {
        title: "Formation et développement des compétences en IA",
        description:
          "Comment préparer la main-d’œuvre africaine aux métiers du futur.",
        icon: <FaChalkboardTeacher />,
      },
    ],
    en: [
      {
        title: "AI and Automation in Business",
        description: "How to optimize operations and improve productivity.",
        icon: <FaIndustry />,
      },
      {
        title: "AI in Finance and Banking",
        description:
          "Risk management, fraud detection, and automation of financial services.",
        icon: <FaRegMoneyBillAlt />,
      },
      {
        title: "AI and e-Health",
        description:
          "Artificial intelligence in medical diagnostics, telemedicine, and hospital management.",
        icon: <FaHospital />,
      },
      {
        title: "Industry 4.0 and Automation",
        description:
          "Smart factories, robots, and production line optimization.",
        icon: <FaIndustry />,
      },
      {
        title: "Smart Agriculture and AI",
        description:
          "Improving agricultural yields through data analysis and task automation.",
        icon: <FaSeedling />,
      },
      {
        title: "AI for Cybersecurity",
        description:
          "Protection against cyberattacks and real-time threat detection.",
        icon: <FaLock />,
      },
      {
        title: "Ethics and AI Regulation in Africa",
        description:
          "Legal challenges and regulatory frameworks for responsible adoption.",
        icon: <FaBalanceScale />,
      },
      {
        title: "AI Training and Skills Development",
        description:
          "How to prepare the African workforce for the jobs of the future.",
        icon: <FaChalkboardTeacher />,
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
          {aiAndAutomationTopics[language].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="relative flex transform flex-col items-start overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 to-white p-8 text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icône flottante */}
              <div className="absolute right-5 top-5 -mr-6 -mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-500 shadow">
                {item.icon}
              </div>

              {/* Titre */}
              <h2 className="mt-6 text-xl font-bold text-purple-500">
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
