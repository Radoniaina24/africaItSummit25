import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import { FaShieldAlt, FaHandshake, FaPlayCircle } from "react-icons/fa";

import { Card, CardContent } from "@/components/Ui/Card/card";
import SectionImageCity from "../health/SectionWithImage";
export default function Exhibitions() {
  const { language } = useLanguageContext();

  const title = {
    fr: "Exhibitions et Espace d’Innovation",
    en: "Exhibitions and Innovation Space",
  };
  const description = {
    fr: "L’Africa IT Summit 2025 offrira un espace dédié aux démonstrations et aux innovations en cybersécurité, permettant aux entreprises et startups du secteur de présenter leurs solutions et services à un public qualifié.",
    en: "The Africa IT Summit 2025 will offer a dedicated space for cybersecurity demonstrations and innovations, allowing companies and startups in the sector to showcase their solutions and services to a qualified audience.",
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
      </div>
      <section className="">
        <div className="container mx-auto ">
          <Opportunities />
          <AiSolutions />
        </div>
      </section>
    </section>
  );
}

const Opportunities = () => {
  const { language } = useLanguageContext();
  const why = {
    fr: "Opportunités pour les exposants",
    en: "Opportunities for Exhibitors",
  };
  const colors = ["#0796F5", "#D34FAC", "#562196"];
  const exhibitorOpportunities = {
    fr: [
      {
        description:
          "Mettre en avant leurs technologies et services de cybersécurité devant des entreprises et institutions en quête de solutions adaptées.",
        icon: FaShieldAlt, // Icône représentant la cybersécurité
      },
      {
        description:
          "Attirer des investisseurs et des partenaires pour accélérer leur croissance sur le marché africain.",
        icon: FaHandshake, // Icône représentant des partenariats stratégiques
      },
      {
        description:
          "Démontrer l’efficacité de leurs outils de protection contre les cyberattaques et la gestion des données sensibles.",
        icon: FaPlayCircle, // Icône représentant une démonstration en direct
      },
    ],
    en: [
      {
        description:
          "Showcase their cybersecurity technologies and services to businesses and institutions seeking tailored solutions.",
        icon: FaShieldAlt, // Icon representing cybersecurity
      },
      {
        description:
          "Attract investors and partners to accelerate their growth in the African market.",
        icon: FaHandshake, // Icon representing strategic partnerships
      },
      {
        description:
          "Demonstrate the effectiveness of their tools for protection against cyberattacks and managing sensitive data.",
        icon: FaPlayCircle, // Icon representing a live demonstration
      },
    ],
  };

  return (
    <section className="">
      <div className="container mx-auto">
        <div className="mb-15">
          {" "}
          <h2 className="mx-auto  mb-4 text-center text-2xl font-bold text-[#562196] md:w-4/5 xl:w-1/2 xl:text-3xl">
            {why[language]}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 p-4">
          {exhibitorOpportunities[language].map((item, index) => (
            <Card
              key={index}
              className="relative flex w-full flex-col items-center rounded-xl bg-gray-100 p-6 shadow-lg transition-all duration-300 hover:cursor-pointer hover:border-none  hover:shadow-xl sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded-full border border-gray-200 bg-gray-200 p-5 shadow-md">
                <item.icon
                  className="text-4xl"
                  style={{ color: colors[index % colors.length] }}
                />
              </div>
              <CardContent className="pt-10 text-center">
                <p className="text-md font-medium text-gray-700">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const AiSolutions = () => {
  const { language } = useLanguageContext();
  const cybersecuritySolutions = {
    fr: [
      {
        title: "Ce que les visiteurs pourront explorer",
        highlights: [
          {
            text: "Solutions de cybersécurité pour les entreprises, banques et institutions gouvernementales.",
          },
          {
            text: "Outils de protection des données personnelles et conformité aux réglementations.",
          },
          {
            text: "Systèmes avancés de détection et de prévention des cyberattaques.",
          },
          {
            text: "Technologies basées sur l’IA pour la surveillance et l’analyse des menaces.",
          },
          {
            text: "Plateformes de cybersécurité pour les infrastructures critiques.",
          },
          {
            text: "Solutions de protection contre la fraude numérique et la cybercriminalité.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536667/2147772278_udrnr0.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Solutions de cybersécurité",
        imageOnRight: false,
      },
    ],
    en: [
      {
        title: "What Visitors Can Explore",
        highlights: [
          {
            text: "Cybersecurity solutions for businesses, banks, and government institutions.",
          },
          {
            text: "Tools for personal data protection and regulatory compliance.",
          },
          {
            text: "Advanced systems for cyberattack detection and prevention.",
          },
          {
            text: "AI-based technologies for threat monitoring and analysis.",
          },
          {
            text: "Cybersecurity platforms for critical infrastructures.",
          },
          {
            text: "Solutions for protection against digital fraud and cybercrime.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536667/2147772278_udrnr0.jpg", // Replace with the actual image URL
        imageAlt: "Cybersecurity Solutions",
        imageOnRight: false,
      },
    ],
  };

  return (
    <section className="pt-10">
      <div className="container mx-auto">
        <div className="space-y-16 px-6 py-12 ">
          {cybersecuritySolutions[language].map((item, index) => (
            <SectionImageCity
              key={index}
              title={item.title}
              highlights={item.highlights}
              imageSrc={item.imageSrc}
              imageAlt={item.title}
              imageOnRight={item.imageOnRight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
