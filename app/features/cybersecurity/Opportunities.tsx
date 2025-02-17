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
            text: "B2B (Business to Business) : Collaborations entre entreprises IT, prestataires de cybersécurité et institutions financières.",
          },
          {
            text: "B2C (Business to Consumer) : Échanges sur les solutions de protection des données adaptées aux particuliers et aux entreprises.",
          },
          {
            text: "B2G (Business to Government) : Stratégies gouvernementales pour renforcer la cybersécurité et protéger les infrastructures nationales.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739758303/2150041847_g2jddu.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Développement des relations professionnelles",
        imageOnRight: true,
      },
      {
        title: "Exploration de nouveaux marchés",
        highlights: [
          {
            text: "L’adoption croissante des services numériques en Afrique accroît le besoin en cybersécurité.",
          },
          {
            text: "Les gouvernements investissent de plus en plus dans la protection des infrastructures critiques.",
          },
          {
            text: "Les entreprises cherchent à sécuriser leurs données et leurs transactions face aux risques cybernétiques grandissants.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739758436/2150038843_ypxk8z.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Exploration de nouveaux marchés",
        imageOnRight: false,
      },
    ],
    en: [
      {
        title: "Professional Relationship Development",
        highlights: [
          {
            text: "B2B (Business to Business): Collaborations between IT companies, cybersecurity providers, and financial institutions.",
          },
          {
            text: "B2C (Business to Consumer): Discussions on data protection solutions tailored to individuals and businesses.",
          },
          {
            text: "B2G (Business to Government): Government strategies to strengthen cybersecurity and protect national infrastructure.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739758303/2150041847_g2jddu.jpg", // Replace with the actual image URL
        imageAlt: "Professional Relationship Development",
        imageOnRight: true,
      },
      {
        title: "Exploring New Markets",
        highlights: [
          {
            text: "The growing adoption of digital services in Africa is increasing the demand for cybersecurity.",
          },
          {
            text: "Governments are increasingly investing in the protection of critical infrastructures.",
          },
          {
            text: "Companies are looking to secure their data and transactions in the face of growing cyber risks.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739758436/2150038843_ypxk8z.jpg", // Replace with the actual image URL
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
    fr: "L’Africa IT Summit 2025 réunira les acteurs du numérique, les experts en cybersécurité, les décideurs politiques et les investisseurs pour aborder les enjeux de la cybersécurité et de la protection des données en Afrique.",
    en: "The Africa IT Summit 2025 will bring together digital stakeholders, cybersecurity experts, policymakers, and investors to address the challenges of cybersecurity and data protection in Africa.",
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
