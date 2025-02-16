import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionImageCity from "../health/SectionWithImage";
import SectionHeader from "@/components/Common/SectionHeader";

export default function Networking() {
  const { language } = useLanguageContext();

  const participationDetails = {
    fr: [
      {
        title: "Accédez à :",
        highlights: [
          {
            text: "Sessions de networking B2B et B2G ciblées pour maximiser vos rencontres d’affaires.",
          },
          {
            text: "Ateliers et discussions pratiques sur les stratégies et innovations en cybersécurité.",
          },
          {
            text: "Conférences animées par des experts du marché pour mieux comprendre les tendances et les enjeux.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536578/2148339351_g7utaz.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Accédez à",
        imageOnRight: true,
      },
      {
        title: "Pourquoi Participer ?",
        highlights: [
          {
            text: "Un accès direct aux experts, décideurs et investisseurs en cybersécurité.",
          },
          {
            text: "Une opportunité unique de renforcer votre réseau et de développer des partenariats stratégiques.",
          },
          {
            text: "Un marché en pleine expansion avec une forte demande en solutions de cybersécurité.",
          },
          {
            text: "Un espace d’exposition idéal pour présenter vos solutions et attirer de nouveaux clients.",
          },
          {
            text: "Une chance d’identifier les innovations et tendances qui façonneront l’avenir de la cybersécurité en Afrique.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536667/2147772278_udrnr0.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Pourquoi Participer ?",
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
            text: "Workshops and hands-on discussions on cybersecurity strategies and innovations.",
          },
          {
            text: "Conferences led by market experts to better understand the trends and challenges.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536578/2148339351_g7utaz.jpg", // Replace with the actual image URL
        imageAlt: "Access to",
        imageOnRight: true,
      },
      {
        title: "Why Participate?",
        highlights: [
          {
            text: "Direct access to cybersecurity experts, decision-makers, and investors.",
          },
          {
            text: "A unique opportunity to strengthen your network and build strategic partnerships.",
          },
          {
            text: "A rapidly growing market with a high demand for cybersecurity solutions.",
          },
          {
            text: "An ideal exhibition space to present your solutions and attract new clients.",
          },
          {
            text: "A chance to identify innovations and trends that will shape the future of cybersecurity in Africa.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536667/2147772278_udrnr0.jpg", // Replace with the actual image URL
        imageAlt: "Why Participate?",
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
          {participationDetails[language].map((item, index) => (
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
