"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";

export default function Assurance() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Opportunités de Collaboration et de Marché",
    en: "Collaboration and Market Opportunities",
  };
  const description = {
    fr: "L’Africa IT Summit 2025 rassemblera les entreprises du numérique, les professionnels de la santé, les investisseurs et les décideurs politiques pour façonner l’avenir de la e-santé en Afrique.",
    en: "The Africa IT Summit 2025 will bring together digital companies, healthcare professionals, investors, and policymakers to shape the future of e-health in Africa.",
  };

  return (
    <section className="bg-gradient-to-br from-[#42A9F5] via-[#7B42A6] to-[#E05CBB] px-6 py-10 lg:py-10 xl:py-20">
      <div className=" ">
        <SectionHeader
          headerInfo={{
            title: "",
            subtitle: title[language],
            description: description[language],
          }}
          subtitleColor={"#0796F5"}
          descriptionColor="#FFFFFF"
        />
        <ProfessionnalRelations />
        <MarketExploration />
      </div>
    </section>
  );
}
const ProfessionnalRelations = () => {
  const { language } = useLanguageContext();
  const professionalRelations = {
    fr: [
      {
        title: "Développement des relations B2B",
        description:
          "Nouez des relations commerciales entre startups, entreprises IT, laboratoires pharmaceutiques et établissements de santé.",
        icon: "🏢", // Icône personnalisée
      },
      {
        title: "Compréhension des attentes B2C",
        description:
          "Comprenez les attentes des patients et utilisateurs finaux des solutions e-santé.",
        icon: "🧑‍⚕️", // Icône personnalisée
      },
      {
        title: "Collaboration avec le secteur public (B2G)",
        description:
          "Échangez avec les gouvernements et institutions publiques sur les politiques et financements dédiés à la santé numérique.",
        icon: "🏛️", // Icône personnalisée
      },
    ],
    en: [
      {
        title: "B2B Relationship Development",
        description:
          "Establish commercial partnerships between startups, IT companies, pharmaceutical laboratories, and healthcare institutions.",
        icon: "🏢", // Custom icon
      },
      {
        title: "Understanding B2C Expectations",
        description:
          "Gain insights into the needs of patients and end-users of e-health solutions.",
        icon: "🧑‍⚕️", // Custom icon
      },
      {
        title: "Collaboration with the Public Sector (B2G)",
        description:
          "Engage with governments and public institutions on policies and funding for digital health initiatives.",
        icon: "🏛️", // Custom icon
      },
    ],
  };
  return (
    <div className="relative  py-20">
      {/* Contenu de la section */}
      <div className="relative z-10 mx-auto max-w-6xl text-center text-indigo-700">
        <h1 className="mb-12 text-4xl font-extrabold">
          {language === "fr"
            ? "Développement des relations professionnelles"
            : "Professional Relationship Development"}
        </h1>

        <div className="grid gap-8  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {professionalRelations[language].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="relative flex transform flex-col items-start overflow-hidden rounded-xl bg-white p-8 text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icône flottante */}
              <div className="absolute right-0 top-0 -mr-6 -mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-600 shadow">
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
    </div>
  );
};

const MarketExploration = () => {
  const { language } = useLanguageContext();
  const marketExploration = {
    fr: [
      {
        title: "Croissance de la demande en e-santé",
        description:
          "L’Afrique connaît une explosion de la demande pour les services numériques en santé.",
        icon: "📈", // Icône personnalisée
      },
      {
        title: "Investissements en forte croissance",
        description:
          "Les investissements dans les infrastructures médicales digitales sont en pleine expansion.",
        icon: "💰", // Icône personnalisée
      },
      {
        title: "Nouvelles opportunités de partenariats",
        description:
          "De nouvelles opportunités de partenariats et de financement émergent pour les entreprises et startups du secteur.",
        icon: "🤝", // Icône personnalisée
      },
      {
        title: "Espace de Networking et d’Affaires",
        description:
          "Rencontrez les acteurs clés du secteur et développez votre réseau professionnel.",
        icon: "🌐", // Icône personnalisée
      },
    ],
    en: [
      {
        title: "Growing Demand for E-Health",
        description:
          "Africa is experiencing a surge in demand for digital healthcare services.",
        icon: "📈", // Custom icon
      },
      {
        title: "Rapid Growth in Investments",
        description:
          "Investments in digital medical infrastructure are expanding significantly.",
        icon: "💰", // Custom icon
      },
      {
        title: "New Partnership Opportunities",
        description:
          "Emerging opportunities for partnerships and funding are driving innovation for companies and startups in the sector.",
        icon: "🤝", // Custom icon
      },
      {
        title: "Networking and Business Hub",
        description:
          "Connect with key industry players and expand your professional network.",
        icon: "🌐", // Custom icon
      },
    ],
  };
  return (
    <div className="relative ">
      {/* Contenu de la section */}
      <div className=" relative z-10  mx-auto max-w-6xl text-center text-indigo-700">
        <h1 className="mb-12 text-4xl font-extrabold">
          {language === "fr"
            ? "Exploration de nouveaux marchés"
            : "Exploring New Markets"}
        </h1>

        <div className="grid gap-8  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {marketExploration[language].map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="relative  flex transform flex-col items-start overflow-hidden rounded-xl bg-white p-8 text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icône flottante */}
              <div className="absolute right-0 top-0 -mr-6 -mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-600 shadow">
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
    </div>
  );
};
