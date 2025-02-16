import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import { InnovationItem } from "../audio_visuel/Innovation";
import SectionHeader from "@/components/Common/SectionHeader";
import {
  FaMobileAlt,
  FaBitcoin,
  FaHandHoldingUsd,
  FaRobot,
  FaShieldAlt,
  FaUniversity,
  FaGavel,
  FaUserGraduate,
} from "react-icons/fa";
export default function Panel() {
  const { language } = useLanguageContext();

  const title = {
    fr: "Conférences et Panels : Le Futur des Services Financiers en Afrique",
    en: "Conferences and Panels: The Future of Financial Services in Africa",
  };
  const description = {
    fr: "Les experts du secteur aborderont les tendances, innovations et stratégies pour accélérer la digitalisation des services financiers.",
    en: "Industry experts will discuss trends, innovations, and strategies to accelerate the digitalization of financial services.",
  };

  const fintechTopics = {
    fr: [
      {
        title: "Paiements mobiles et portefeuilles électroniques",
        description:
          "Comment les solutions fintech simplifient les transactions du quotidien.",
        icon: <FaMobileAlt />,
      },
      {
        title: "Blockchain et finance décentralisée (DeFi)",
        description:
          "Sécurisation des paiements, traçabilité et réduction des coûts.",
        icon: <FaBitcoin />,
      },
      {
        title: "Microcrédits et financement alternatif",
        description:
          "Solutions numériques pour démocratiser l’accès au crédit en Afrique.",
        icon: <FaHandHoldingUsd />,
      },
      {
        title:
          "L’intelligence artificielle et l’automatisation dans la finance",
        description:
          "Optimisation du scoring de crédit, détection de la fraude et personnalisation des services.",
        icon: <FaRobot />,
      },
      {
        title: "Cybersécurité et protection des transactions financières",
        description: "Stratégies pour renforcer la confiance des utilisateurs.",
        icon: <FaShieldAlt />,
      },
      {
        title: "Banques numériques et néobanques",
        description:
          "Comment les nouveaux acteurs disruptent le marché bancaire.",
        icon: <FaUniversity />,
      },
      {
        title: "Régulation et cadre légal des fintech en Afrique",
        description:
          "Perspectives et enjeux pour un développement équilibré du secteur.",
        icon: <FaGavel />,
      },
      {
        title: "Éducation financière et adoption des solutions numériques",
        description:
          "Comment accompagner les populations vers un usage sécurisé et efficace des fintech.",
        icon: <FaUserGraduate />,
      },
    ],
    en: [
      {
        title: "Mobile Payments and Digital Wallets",
        description: "How fintech solutions simplify everyday transactions.",
        icon: <FaMobileAlt />,
      },
      {
        title: "Blockchain and Decentralized Finance (DeFi)",
        description:
          "Securing payments, ensuring traceability, and reducing costs.",
        icon: <FaBitcoin />,
      },
      {
        title: "Microcredit and Alternative Financing",
        description:
          "Digital solutions to democratize access to credit in Africa.",
        icon: <FaHandHoldingUsd />,
      },
      {
        title: "Artificial Intelligence and Automation in Finance",
        description:
          "Optimizing credit scoring, fraud detection, and service personalization.",
        icon: <FaRobot />,
      },
      {
        title: "Cybersecurity and Financial Transaction Protection",
        description: "Strategies to strengthen user trust.",
        icon: <FaShieldAlt />,
      },
      {
        title: "Digital Banks and Neobanks",
        description: "How new players are disrupting the banking market.",
        icon: <FaUniversity />,
      },
      {
        title: "Fintech Regulation and Legal Framework in Africa",
        description:
          "Perspectives and challenges for balanced sector development.",
        icon: <FaGavel />,
      },
      {
        title: "Financial Education and Digital Adoption",
        description:
          "How to guide populations towards secure and efficient fintech usage.",
        icon: <FaUserGraduate />,
      },
    ],
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto ">
        <div className="mb-10">
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: title[language],
              description: description[language],
            }}
            subtitleColor={["#D34FAC", "#0796F5", "#562196"]}
            descriptionColor="gray"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fintechTopics[language].map((item, index) => (
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
              <h2 className="mt-6 text-lg font-bold text-blue-400">
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
