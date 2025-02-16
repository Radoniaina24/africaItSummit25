import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionImageCity from "../health/SectionWithImage";
import SectionHeader from "@/components/Common/SectionHeader";

export default function Networking() {
  const { language } = useLanguageContext();

  const panel = {
    fr: [
      {
        title: "Accédez à :",
        highlights: [
          {
            text: "Sessions de networking B2B et B2G ciblées pour maximiser vos rencontres professionnelles.",
          },
          {
            text: "Ateliers et discussions interactives sur les meilleures stratégies de Green IT.",
          },
          {
            text: "Conférences inspirantes avec des experts du marché pour comprendre les tendances et les défis du numérique durable.",
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
            text: "Un accès direct aux décideurs, investisseurs et experts en Green Tech et infrastructures numériques durables.",
          },
          {
            text: "Une opportunité unique de renforcer votre réseau et de développer des partenariats stratégiques.",
          },
          {
            text: "Un marché en forte expansion avec des perspectives de croissance rapide.",
          },
          {
            text: "Un espace d’exposition idéal pour promouvoir vos solutions et attirer de nouveaux clients.",
          },
          {
            text: "Une chance d’identifier les innovations et tendances qui façonneront l’avenir du numérique responsable en Afrique.",
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
        title: "Access to : ",
        highlights: [
          {
            text: "Targeted B2B and B2G networking sessions to maximize your professional meetings.",
          },
          {
            text: "Workshops and interactive discussions on the best Green IT strategies.",
          },
          {
            text: "Inspiring conferences with market experts to understand the trends and challenges of sustainable digital technology.",
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
            text: "Direct access to decision-makers, investors, and experts in Green Tech and sustainable digital infrastructure.",
          },
          {
            text: "A unique opportunity to strengthen your network and develop strategic partnerships.",
          },
          {
            text: "A rapidly expanding market with fast growth potential.",
          },
          {
            text: "An ideal exhibition space to promote your solutions and attract new clients.",
          },
          {
            text: "A chance to identify the innovations and trends that will shape the future of responsible digital technology in Africa.",
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
    fr: "L’Africa IT Summit 2025 constituera un environnement stratégique pour nouer des relations d’affaires et explorer des opportunités d’investissement.",
    en: "The Africa IT Summit 2025 will provide a strategic environment for building business relationships and exploring investment opportunities.",
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
