import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import {
  FaCrown,
  FaGlobe,
  FaUsers,
  FaLightbulb,
  FaUserTie,
} from "react-icons/fa";
export default function Why() {
  const speakerOpportunities = {
    fr: [
      {
        title: "Développez votre image de leader",
        description:
          "Mettez en avant votre nom et votre expertise dans un contexte prestigieux pour renforcer votre crédibilité dans le secteur numérique.",
        icon: <FaCrown />, // Icône représentant le leadership
      },
      {
        title: "Gagnez en visibilité internationale",
        description:
          "Bénéficiez d’une promotion sur les plateformes digitales et d’une couverture médiatique avant, pendant et après l’événement.",
        icon: <FaGlobe />, // Icône représentant la visibilité internationale
      },
      {
        title: "Accédez à un réseau d’élite",
        description:
          "Échangez avec des investisseurs, des dirigeants et des représentants gouvernementaux pour créer des opportunités stratégiques.",
        icon: <FaUsers />, // Icône représentant le networking
      },
      {
        title: "Contribuez à la transformation numérique",
        description:
          "Partagez vos idées avec des décideurs et des acteurs du changement pour accélérer l’innovation en Afrique.",
        icon: <FaLightbulb />, // Icône représentant l’innovation et la transformation
      },
      {
        title: "Renforcez votre branding personnel",
        description:
          "Valorisez votre expertise et vos réalisations en intervenant sur des panels de haut niveau et en bénéficiant d’une exposition ciblée.",
        icon: <FaUserTie />, // Icône représentant le branding personnel
      },
    ],
    en: [
      {
        title: "Establish Your Leadership Image",
        description:
          "Showcase your name and expertise in a prestigious setting to strengthen your credibility in the digital sector.",
        icon: <FaCrown />, // Icon representing leadership
      },
      {
        title: "Increase Your Global Visibility",
        description:
          "Gain exposure through digital platform promotion and media coverage before, during, and after the event.",
        icon: <FaGlobe />, // Icon representing global visibility
      },
      {
        title: "Connect with an Elite Network",
        description:
          "Engage with investors, executives, and government representatives to create strategic opportunities.",
        icon: <FaUsers />, // Icon representing networking
      },
      {
        title: "Drive Digital Transformation",
        description:
          "Share your insights with key decision-makers and change-makers to accelerate innovation in Africa.",
        icon: <FaLightbulb />, // Icon representing innovation and transformation
      },
      {
        title: "Enhance Your Personal Brand",
        description:
          "Showcase your expertise and achievements by speaking on high-level panels and gaining targeted exposure.",
        icon: <FaUserTie />, // Icon representing personal branding
      },
    ],
  };

  const { language } = useLanguageContext();
  const why = {
    fr: "Pourquoi devenir Panneliste VIP ?",
    en: "Why Become a VIP Panelist",
  };
  const description = {
    fr: "Devenir Panneliste VIP à l’Africa IT Summit 2025 est une occasion unique d’avoir un impact sur l’avenir du numérique en Afrique. Voici les principaux avantages :",
    en: "Becoming a VIP Panelist at the Africa IT Summit 2025 is a unique opportunity to make an impact on the future of digital innovation in Africa. Here are the key benefits:",
  };

  return (
    <section className="bg-gradient-to-r from-[#a261d4] via-[#63b6f1] to-[#e575c5] py-20">
      <div className="container mx-auto">
        <SectionHeader
          headerInfo={{
            title: "",
            subtitle: why[language],
            description: description[language],
          }}
          subtitleColor={["#D34FAC", "#0796F5", "#562196"]}
          descriptionColor="white"
        />
        <div className="mt-12 flex flex-wrap justify-center gap-10 p-4">
          {speakerOpportunities[language].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="relative flex w-full max-w-sm flex-col items-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 to-white p-8 text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icône flottante */}
              <div className="absolute -right-2 -top-1 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-2xl text-[#a261d4] shadow">
                {item.icon}
              </div>

              {/* Titre */}
              <h2 className="mt-6 text-center text-lg font-bold text-blue-400">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-4 text-center leading-relaxed text-gray-700">
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
