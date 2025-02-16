import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionImageCity from "../health/SectionWithImage";
import SectionHeader from "@/components/Common/SectionHeader";

export default function Opportunities() {
  const { language } = useLanguageContext();
  const why = {
    fr: "Pourquoi Participer à l’Africa IT Summit 2025 ?",
    en: "Why Attend the Africa IT Summit 2025?",
  };
  const panel = {
    fr: [
      {
        title: "Développement des relations professionnelles",
        highlights: [
          {
            text: "B2B (Business to Business) : Rencontres entre fintech, banques, investisseurs et entreprises technologiques.",
          },
          {
            text: "B2C (Business to Consumer) : Interactions avec les utilisateurs et présentation des solutions adaptées aux besoins des consommateurs africains.",
          },
          {
            text: "B2G (Business to Government) : Discussions sur la régulation, le cadre légal et les initiatives publiques en faveur de l’inclusion financière.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739689393/2147626268_knugn3.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Développement des relations professionnelles",
        imageOnRight: true,
      },
      {
        title: "Exploration de nouveaux marchés",
        highlights: [
          {
            text: "Le secteur fintech africain connaît une croissance exponentielle, attirant des investissements internationaux.",
          },
          {
            text: "De plus en plus de services financiers numériques émergent, touchant des millions de nouveaux utilisateurs.",
          },
          {
            text: "Les gouvernements africains soutiennent l’adoption des fintech pour moderniser l’économie et favoriser l’inclusion financière.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536667/2147772278_udrnr0.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Exploration de nouveaux marchés",
        imageOnRight: false,
      },
    ],
    en: [
      {
        title: "Professional Relationship Development",
        highlights: [
          {
            text: "B2B (Business to Business): Meetings between fintech, banks, investors, and tech companies.",
          },
          {
            text: "B2C (Business to Consumer): Interactions with users and presentation of solutions tailored to the needs of African consumers.",
          },
          {
            text: "B2G (Business to Government): Discussions on regulation, legal frameworks, and public initiatives supporting financial inclusion.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739689393/2147626268_knugn3.jpg", // Replace with the actual image URL
        imageAlt: "Professional Relationship Development",
        imageOnRight: true,
      },
      {
        title: "Exploring New Markets",
        highlights: [
          {
            text: "The African fintech sector is experiencing exponential growth, attracting international investments.",
          },
          {
            text: "Increasing numbers of digital financial services are emerging, reaching millions of new users.",
          },
          {
            text: "African governments are supporting the adoption of fintech to modernize the economy and promote financial inclusion.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536667/2147772278_udrnr0.jpg", // Replace with the actual image URL
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
    fr: "L’Africa IT Summit 2025 réunira les entreprises du numérique, les institutions financières, les startups fintech et les décideurs politiques pour façonner l’avenir des services financiers en Afrique.",
    en: "The Africa IT Summit 2025 will bring together digital enterprises, financial institutions, fintech startups, and policymakers to shape the future of financial services in Africa.",
  };

  return (
    <section className="bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] py-20">
      <div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: title[language],
              description: description[language],
            }}
            subtitleColor={["#0796F5", "#D34FAC", "#562196"]}
            descriptionColor="white"
          />
        </div>
        <div className="space-y-16 px-6 py-12 ">
          {panel[language].map((item, index) => (
            <SectionImageCity
              key={index}
              title={item.title}
              highlights={item.highlights}
              imageSrc={item.imageSrc}
              imageAlt={item.title}
              imageOnRight={item.imageOnRight}
              highlightTextColor="white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
