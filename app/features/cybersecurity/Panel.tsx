import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import {
  FaShieldAlt,
  FaDatabase,
  FaLock,
  FaBitcoin,
  FaRobot,
  FaCreditCard,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa";
export default function Panel() {
  const { language } = useLanguageContext();

  const title = {
    fr: "Conférences et Panels",
    en: "Conferences and Panels",
  };
  const description = {
    fr: "Les meilleurs experts partageront leur expertise sur les défis et opportunités liés à la cybersécurité",
    en: "The top experts will share their expertise on the challenges and opportunities related to cybersecurity.",
  };

  const cybersecurityTopics = {
    fr: [
      {
        title: "Menaces et cyberattaques en Afrique",
        description:
          "Décryptage des cyber-risques et des attaques ciblant les infrastructures critiques.",
        icon: <FaShieldAlt />,
      },
      {
        title: "Cybersécurité des entreprises et protection des données",
        description:
          "Solutions pour sécuriser les systèmes d’information et garantir la conformité réglementaire.",
        icon: <FaLock />,
      },
      {
        title: "Protection des données personnelles et réglementation",
        description:
          "Impact des nouvelles lois sur la protection des données en Afrique.",
        icon: <FaDatabase />,
      },
      {
        title: "Blockchain et cybersécurité",
        description:
          "Comment la blockchain renforce la sécurité des transactions et des échanges numériques.",
        icon: <FaBitcoin />,
      },
      {
        title: "L’intelligence artificielle au service de la cybersécurité",
        description:
          "Utilisation de l’IA pour détecter et prévenir les cyberattaques.",
        icon: <FaRobot />,
      },
      {
        title: "Sécurisation des paiements et des transactions financières",
        description:
          "Stratégies pour garantir la confiance des consommateurs et des entreprises.",
        icon: <FaCreditCard />,
      },
      {
        title: "Formation et montée en compétences en cybersécurité",
        description:
          "Développement des talents et stratégies pour renforcer l’expertise locale.",
        icon: <FaGraduationCap />,
      },
      {
        title: "Cybersécurité et infrastructures critiques",
        description:
          "Protection des systèmes énergétiques, bancaires et gouvernementaux contre les cybermenaces.",
        icon: <FaBuilding />,
      },
    ],
    en: [
      {
        title: "Threats and Cyberattacks in Africa",
        description:
          "Analysis of cyber risks and attacks targeting critical infrastructure.",
        icon: <FaShieldAlt />,
      },
      {
        title: "Enterprise Cybersecurity and Data Protection",
        description:
          "Solutions to secure information systems and ensure regulatory compliance.",
        icon: <FaLock />,
      },
      {
        title: "Personal Data Protection and Regulation",
        description: "Impact of new data protection laws in Africa.",
        icon: <FaDatabase />,
      },
      {
        title: "Blockchain and Cybersecurity",
        description:
          "How blockchain enhances the security of transactions and digital exchanges.",
        icon: <FaBitcoin />,
      },
      {
        title: "Artificial Intelligence for Cybersecurity",
        description: "Using AI to detect and prevent cyberattacks.",
        icon: <FaRobot />,
      },
      {
        title: "Securing Payments and Financial Transactions",
        description: "Strategies to ensure consumer and business trust.",
        icon: <FaCreditCard />,
      },
      {
        title: "Training and Skill Development in Cybersecurity",
        description:
          "Developing talent and strategies to strengthen local expertise.",
        icon: <FaGraduationCap />,
      },
      {
        title: "Cybersecurity and Critical Infrastructure",
        description:
          "Protecting energy, banking, and government systems from cyber threats.",
        icon: <FaBuilding />,
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
          {cybersecurityTopics[language].map((item, index) => (
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
