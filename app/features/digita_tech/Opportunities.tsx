import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionImageCity from "../health/SectionWithImage";
import SectionHeader from "@/components/Common/SectionHeader";

export default function Opportunities() {
  const { language } = useLanguageContext();
  const panel = {
    fr: [
      {
        title: "Développement des relations professionnelles",
        highlights: [
          {
            text: "B2B (Business to Business) : Collaborations entre entreprises IT, Green Tech et opérateurs énergétiques.",
          },
          {
            text: "B2C (Business to Consumer) : Présentation des solutions numériques durables adaptées aux entreprises et consommateurs.",
          },
          {
            text: "B2G (Business to Government) : Discussions avec les autorités et gouvernements sur les stratégies numériques écoresponsables.",
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
            text: "L’urgence climatique pousse les entreprises à adopter des solutions numériques plus responsables.",
          },
          {
            text: "Les investissements dans la Green Tech sont en forte croissance et attirent de nouveaux acteurs du numérique.",
          },
          {
            text: "Les gouvernements africains adoptent des stratégies numériques vertes pour moderniser leurs infrastructures.",
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
            text: "B2B (Business to Business): Collaborations between IT companies, Green Tech, and energy operators.",
          },
          {
            text: "B2C (Business to Consumer): Presentation of sustainable digital solutions tailored for businesses and consumers.",
          },
          {
            text: "B2G (Business to Government): Discussions with authorities and governments on eco-responsible digital strategies.",
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
            text: "The climate emergency is driving businesses to adopt more responsible digital solutions.",
          },
          {
            text: "Investments in Green Tech are rapidly growing and attracting new players in the digital space.",
          },
          {
            text: "African governments are adopting green digital strategies to modernize their infrastructures.",
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
    fr: "L’Africa IT Summit 2025 réunira les gouvernements, les entreprises technologiques, les startups et les investisseurs pour échanger sur les meilleures stratégies de développement durable appliquées aux technologies numériques.",
    en: "The Africa IT Summit 2025 will bring together governments, technology companies, startups, and investors to discuss the best sustainable development strategies applied to digital technologies.",
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
          {panel[language].map((item, index) => (
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
