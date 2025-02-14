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
            text: "B2B (Business to Business) : Rencontres entre startups, entreprises IT, industriels et prestataires de services.",
          },
          {
            text: "B2C (Business to Consumer) : Exploration des solutions d’IA accessibles aux entreprises et aux consommateurs.",
          },
          {
            text: "B2G (Business to Government) : Discussions sur les stratégies nationales d’adoption de l’IA et de l’automatisation.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536578/2148339351_g7utaz.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Développement des relations professionnelles",
        imageOnRight: true,
      },
      {
        title: "Exploration de nouveaux marchés",
        highlights: [
          {
            text: "La demande en solutions IA explose en Afrique, avec des investissements croissants dans les infrastructures technologiques.",
          },
          {
            text: "De nombreux secteurs intègrent déjà l’IA et l’automatisation, créant de nouvelles opportunités pour les entreprises et les entrepreneurs.",
          },
          {
            text: "Les gouvernements africains mettent en place des stratégies numériques, ouvrant la voie à des collaborations et financements dans l’IA.",
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
            text: "B2B (Business to Business): Meetings between startups, IT companies, industrial players, and service providers.",
          },
          {
            text: "B2C (Business to Consumer): Exploration of AI solutions accessible to businesses and consumers.",
          },
          {
            text: "B2G (Business to Government): Discussions on national strategies for AI and automation adoption.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536578/2148339351_g7utaz.jpg", // Replace with the actual image URL
        imageAlt: "Professional Relationship Development",
        imageOnRight: true,
      },
      {
        title: "Exploring New Markets",
        highlights: [
          {
            text: "The demand for AI solutions is booming in Africa, with increasing investments in technology infrastructure.",
          },
          {
            text: "Many sectors are already integrating AI and automation, creating new opportunities for businesses and entrepreneurs.",
          },
          {
            text: "African governments are implementing digital strategies, paving the way for collaborations and AI funding.",
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
    fr: "L’Africa IT Summit 2025 rassemblera les entreprises technologiques, les startups, les investisseurs et les décideurs politiques pour explorer les opportunités qu’offre l’intelligence artificielle et l’automatisation en Afrique.",
    en: "The Africa IT Summit 2025 will bring together technology companies, startups, investors, and policymakers to explore the opportunities presented by artificial intelligence and automation in Africa.",
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
