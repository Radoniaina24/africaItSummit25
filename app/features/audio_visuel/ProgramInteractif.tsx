import { useLanguageContext } from "@/app/context/LanguageContext";
import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";

export default function ProgramInteractif() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Ce Que Vous Pourrez Explorer à l’Africa IT Summit 2025",
    en: "What You Can Explore at Africa IT Summit 2025",
  };
  const description = {
    fr: "L’Africa IT Summit proposera un programme riche et interactif, mettant en lumière les tendances, innovations et défis du secteur cinématographique et audiovisuel en Afrique.",
    en: "Africa IT Summit 2025 will feature a rich and interactive program, highlighting the trends, innovations, and challenges in the African film and audiovisual industry.",
  };

  return (
    <section>
      <div className="mt-10">
        <SectionHeader
          headerInfo={{
            title: "",
            subtitle: title[language],
            description: description[language],
          }}
          subtitleColor={"#0796F5"}
          descriptionColor="#FFFFFF"
        />
      </div>

      <PartnershipOpportunities />
    </section>
  );
}
const PartnershipOpportunities = () => {
  const { language } = useLanguageContext();
  const professionnel = {
    fr: [
      {
        title: "Production et postproduction numérique",
        description:
          "Comment le numérique révolutionne la manière de tourner, monter et finaliser les œuvres audiovisuelles.",
        icon: "🎬",
      },
      {
        title: "L’intelligence artificielle appliquée à l’audiovisuel",
        description:
          "De la génération de scénarios automatisés aux effets spéciaux pilotés par l’IA.",
        icon: "🤖",
      },
      {
        title: "Les nouvelles stratégies de monétisation des contenus",
        description:
          "Abonnements, publicité, NFT, blockchain, quelles sont les meilleures approches pour rentabiliser la production ?",
        icon: "💰",
      },
      {
        title: "Le streaming et la distribution digitale",
        description:
          "Comment les plateformes africaines et internationales changent les règles du jeu ?",
        icon: "📡",
      },
      {
        title: "Réalité virtuelle et augmentée dans le cinéma",
        description:
          "Une révolution pour l’expérience utilisateur et la création immersive.",
        icon: "🎥",
      },
      {
        title: "Formation et montée en compétences",
        description:
          "Quels cursus, certifications et collaborations entre universités et entreprises pour accompagner la digitalisation du secteur ?",
        icon: "📚",
      },
      {
        title: "Coproduction et accès aux marchés internationaux",
        description:
          "Comment exporter les contenus africains et attirer des financements étrangers ?",
        icon: "🌍",
      },
    ],
    en: [
      {
        title: "Digital Production and Postproduction",
        description:
          "How digital technology is revolutionizing the way audiovisual works are filmed, edited, and finalized.",
        icon: "🎬",
      },
      {
        title: "Artificial Intelligence in Audiovisual Media",
        description:
          "From automated script generation to AI-driven special effects.",
        icon: "🤖",
      },
      {
        title: "New Content Monetization Strategies",
        description:
          "Subscriptions, advertising, NFTs, blockchain—what are the best approaches for monetizing production?",
        icon: "💰",
      },
      {
        title: "Streaming and Digital Distribution",
        description:
          "How African and international platforms are changing the rules of the game.",
        icon: "📡",
      },
      {
        title: "Virtual and Augmented Reality in Cinema",
        description: "A revolution for user experience and immersive creation.",
        icon: "🎥",
      },
      {
        title: "Training and Skill Development",
        description:
          "What programs, certifications, and collaborations between universities and businesses are needed to support the sector's digital transformation?",
        icon: "📚",
      },
      {
        title: "Coproduction and Access to International Markets",
        description:
          "How to export African content and attract foreign investment?",
        icon: "🌍",
      },
    ],
  };
  const titleOpôrtunities = {
    fr: "Conférences et Panels",
    en: "Conferences and Panels",
  };
  return (
    <div className="relative px-6 py-16">
      {/* Contenu principal */}
      <div className=" container mx-auto  text-center text-white">
        {/* Titre de la section */}
        <h1 className="mb-12 text-4xl font-extrabold text-indigo-700">
          {titleOpôrtunities[language]}
        </h1>

        {/* Grille de cartes */}
        <div className="flex flex-wrap justify-center gap-8">
          {professionnel[language].map((opportunity, index) => (
            <div
              key={index}
              className="relative flex w-full transform flex-col items-center overflow-hidden rounded-3xl bg-purple-300 p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl sm:w-80 sm:p-8 md:w-96 md:p-10 lg:w-1/3 xl:w-1/4"
              data-aos="zoom-out"
            >
              {/* Icône dynamique */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-3xl text-white transition-transform duration-300 ease-in-out hover:rotate-12 sm:mb-6 sm:h-20 sm:w-20 sm:text-4xl">
                {opportunity.icon}
              </div>

              {/* Titre de l'opportunité */}
              <h2 className="mb-3 text-xl font-semibold text-indigo-700 sm:mb-4">
                {opportunity.title}
              </h2>

              {/* Description de l'opportunité */}
              <p className="mb-4 text-sm leading-relaxed text-gray-800 sm:mb-6 sm:text-base">
                {opportunity.description}
              </p>

              {/* Bordure subtile au survol */}
              <div className="absolute inset-0 rounded-3xl border-2 border-indigo-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
