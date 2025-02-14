import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionImageCity from "../health/SectionWithImage";
import SectionHeader from "@/components/Common/SectionHeader";

export default function Networking() {
  const { language } = useLanguageContext();

  const panelNetworking = {
    fr: [
      {
        title: "Accédez à :",
        highlights: [
          {
            text: "Accédez à des sessions de networking B2B et B2G ciblées pour maximiser vos rencontres d’affaires.",
          },
          {
            text: "Participez à des ateliers interactifs et discussions sectorielles pour explorer des cas d’usage concrets.",
          },
          {
            text: "Assistez à des conférences inspirantes avec des experts du marché pour mieux comprendre les tendances et les opportunités du secteur.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739537810/2151003746_xsarde.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Espace de Networking et d’Affaires",
        imageOnRight: true,
      },
      {
        title: "Pourquoi Participer ?",
        highlights: [
          {
            text: "Un accès direct aux décideurs du secteur, investisseurs et innovateurs en IA et automatisation.",
          },
          {
            text: "Une opportunité de renforcer votre réseau et d’établir des partenariats stratégiques.",
          },
          {
            text: "Un marché en pleine expansion avec des perspectives de croissance rapide.",
          },
          {
            text: "Un espace d’exposition et de démonstration idéal pour promouvoir vos solutions.",
          },
          {
            text: "Une occasion unique d’identifier les innovations et tendances qui façonneront l’avenir de l’IA en Afrique.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739537677/2148932312_c32zzx.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Pourquoi Participer",
        imageOnRight: false,
      },
    ],
    en: [
      {
        title: "Access:",
        highlights: [
          {
            text: "Gain access to targeted B2B and B2G networking sessions to maximize business connections.",
          },
          {
            text: "Participate in interactive workshops and industry discussions to explore real-world use cases.",
          },
          {
            text: "Attend inspiring conferences with market experts to better understand industry trends and opportunities.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739537810/2151003746_xsarde.jpg", // Replace with the actual image URL
        imageAlt: "Networking and Business Space",
        imageOnRight: true,
      },
      {
        title: "Why Participate?",
        highlights: [
          {
            text: "Direct access to key decision-makers, investors, and innovators in AI and automation.",
          },
          {
            text: "An opportunity to strengthen your network and establish strategic partnerships.",
          },
          {
            text: "A rapidly expanding market with high growth potential.",
          },
          {
            text: "An ideal exhibition and demonstration space to showcase your solutions.",
          },
          {
            text: "A unique chance to identify the innovations and trends shaping the future of AI in Africa.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739537677/2148932312_c32zzx.jpg", // Replace with the actual image URL
        imageAlt: "Why Participate",
        imageOnRight: false,
      },
    ],
  };

  const title = {
    fr: "Espace de Networking et d’Affaires ",
    en: "Networking and Business Space",
  };
  const description = {
    fr: "L’Africa IT Summit 2025 offrira un environnement propice aux rencontres et aux collaborations stratégiques.",
    en: "The Africa IT Summit 2025 will provide a conducive environment for meetings and strategic collaborations.",
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
          {panelNetworking[language].map((item, index) => (
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
