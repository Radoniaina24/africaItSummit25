import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionImageCity from "../health/SectionWithImage";
import SectionHeader from "@/components/Common/SectionHeader";

export default function Networking() {
  const { language } = useLanguageContext();

  const networking = {
    fr: [
      {
        title: "Accédez à :",
        highlights: [
          {
            text: "Sessions de networking B2B et B2G ciblées pour maximiser vos rencontres d’affaires.",
          },
          {
            text: "Ateliers et discussions interactives sur les meilleures stratégies de développement des fintech en Afrique.",
          },
          {
            text: "Conférences animées par des experts du marché pour mieux comprendre les tendances et anticiper les évolutions du secteur.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536578/2148339351_g7utaz.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Accédez aux meilleures opportunités de networking",
        imageOnRight: true,
      },
      {
        title: "Pourquoi Participer ?",
        highlights: [
          {
            text: "Un accès direct aux décideurs du secteur financier et aux investisseurs en fintech.",
          },
          {
            text: "Une opportunité unique de renforcer votre réseau et de développer des partenariats stratégiques.",
          },
          {
            text: "Un marché en pleine expansion avec une adoption massive des solutions de paiement numérique.",
          },
          {
            text: "Un espace d’exposition idéal pour promouvoir vos solutions et attirer de nouveaux clients.",
          },
          {
            text: "Une chance d’identifier les innovations et tendances qui façonneront l’avenir des services financiers en Afrique.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739689318/2149035672_in3j3k.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Pourquoi participer au Africa IT Summit 2025",
        imageOnRight: false,
      },
    ],
    en: [
      {
        title: "Access to:",
        highlights: [
          {
            text: "Targeted B2B and B2G networking sessions to maximize your business meetings.",
          },
          {
            text: "Workshops and interactive discussions on the best strategies for fintech development in Africa.",
          },
          {
            text: "Conferences led by industry experts to better understand trends and anticipate sector developments.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536578/2148339351_g7utaz.jpg", // Replace with the actual image URL
        imageAlt: "Access the best networking opportunities",
        imageOnRight: true,
      },
      {
        title: "Why Participate?",
        highlights: [
          {
            text: "Direct access to decision-makers in the financial sector and fintech investors.",
          },
          {
            text: "A unique opportunity to strengthen your network and develop strategic partnerships.",
          },
          {
            text: "A rapidly growing market with massive adoption of digital payment solutions.",
          },
          {
            text: "An ideal exhibition space to promote your solutions and attract new clients.",
          },
          {
            text: "A chance to identify innovations and trends that will shape the future of financial services in Africa.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739689318/2149035672_in3j3k.jpg", // Replace with the actual image URL
        imageAlt: "Why participate in the Africa IT Summit 2025",
        imageOnRight: false,
      },
    ],
  };

  const title = {
    fr: "Espace de Networking et d’Affaires ",
    en: "Networking and Business Space",
  };
  const description = {
    fr: "L’Africa IT Summit 2025 constituera un environnement stratégique pour favoriser les échanges et les collaborations.",
    en: "The Africa IT Summit 2025 will provide a strategic environment to foster exchanges and collaborations.",
  };

  return (
    <section className="bg-white py-20">
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
          {networking[language].map((item, index) => (
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
