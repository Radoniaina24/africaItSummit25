import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionImageCity from "../health/SectionWithImage";
import SectionHeader from "@/components/Common/SectionHeader";

export default function Opportunities() {
  const { language } = useLanguageContext();
  const businessOpportunities = {
    fr: [
      {
        title: "Développement des relations professionnelles",
        highlights: [
          {
            text: "B2B (Business to Business) : Échanges entre entreprises IT, opérateurs urbains et fournisseurs de solutions smart city.",
          },
          {
            text: "B2C (Business to Consumer) : Présentation des solutions de villes intelligentes adaptées aux citoyens et aux entreprises.",
          },
          {
            text: "B2G (Business to Government) : Collaborations avec les municipalités et gouvernements pour moderniser les infrastructures urbaines.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536578/business_relations.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Développement des relations professionnelles",
        imageOnRight: true,
      },
      {
        title: "Exploration de nouveaux marchés",
        highlights: [
          {
            text: "L’urbanisation rapide en Afrique crée un besoin urgent de solutions technologiques pour la gestion des villes.",
          },
          {
            text: "Les investissements dans les smart cities sont en forte croissance et attirent de nouveaux acteurs du numérique.",
          },
          {
            text: "Les gouvernements africains adoptent des stratégies numériques pour moderniser leurs infrastructures.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536667/market_exploration.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Exploration de nouveaux marchés",
        imageOnRight: false,
      },
    ],
    en: [
      {
        title: "Professional Relationship Development",
        highlights: [
          {
            text: "B2B (Business to Business): Exchanges between IT companies, urban operators, and smart city solution providers.",
          },
          {
            text: "B2C (Business to Consumer): Presentation of smart city solutions tailored for citizens and businesses.",
          },
          {
            text: "B2G (Business to Government): Collaborations with municipalities and governments to modernize urban infrastructure.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536578/business_relations.jpg", // Replace with the actual image URL
        imageAlt: "Professional Relationship Development",
        imageOnRight: true,
      },
      {
        title: "Exploring New Markets",
        highlights: [
          {
            text: "Rapid urbanization in Africa is creating an urgent need for technological solutions for city management.",
          },
          {
            text: "Investments in smart cities are growing rapidly and attracting new players in the digital sector.",
          },
          {
            text: "African governments are adopting digital strategies to modernize their infrastructure.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536667/market_exploration.jpg", // Replace with the actual image URL
        imageAlt: "Exploring New Markets",
        imageOnRight: false,
      },
    ],
  };

  const title = {
    fr: "Opportunités de Collaboration et de Marché",
    en: "Collaboration and Market Opportunities",
  };
  const description = {
    fr: "L’Africa IT Summit 2025 rassemblera les gouvernements, les entreprises technologiques, les startups et les investisseurs afin d’explorer les opportunités de financement et de développement des villes intelligentes en Afrique.",
    en: "The Africa IT Summit 2025 will bring together governments, tech companies, startups, and investors to explore funding and development opportunities for smart cities in Africa.",
  };

  return (
    <section className="bg-white">
      <div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
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
        <div className="space-y-16 px-6 py-12 ">
          {businessOpportunities[language].map((item, index) => (
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
}
