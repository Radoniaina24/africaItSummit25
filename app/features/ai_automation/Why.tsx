import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import { InnovationItem } from "../audio_visuel/Innovation";

export default function Why() {
  const { language } = useLanguageContext();
  const networkingAI = {
    fr: [
      {
        text: "Accédez à un réseau de décideurs et d’experts en IA pour échanger avec des leaders de l’innovation, des investisseurs, des chercheurs et des entreprises technologiques.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739513528/2151003763_iqpv9a.jpg",
      },
      {
        text: "Participez à des sessions de networking B2B, B2C et B2G pour établir des partenariats stratégiques.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739513632/2147923358_ugp1yg.jpg",
      },
      {
        text: "Découvrez des cas concrets d’application de l’IA et de l’automatisation à travers différents secteurs.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739513791/2151133519_wsb4ex.jpg",
      },
      {
        text: "Explorez les dernières avancées en IA et automatisation et identifiez les solutions les plus adaptées à votre activité.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739513870/2150038862_ymjin0.jpg",
      },
      {
        text: "Apprenez comment intégrer l’IA pour optimiser la gestion des données et améliorer la prise de décision.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739513946/2151003701_zidubp.jpg",
      },
      {
        text: "Accédez à des opportunités de financement pour les startups et entreprises innovantes.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739514036/2148991374_y90kwy.jpg",
      },
      {
        text: "Découvrez les stratégies gagnantes pour développer des projets IA performants et rentables.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739514130/2151137386_en8eeu.jpg",
      },
      {
        text: "Échangez avec des leaders de l’innovation, des investisseurs, des chercheurs et des entreprises technologiques.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739514328/2149409842_ohrz63.jpg",
      },
    ],
    en: [
      {
        text: "Access a network of decision-makers and AI experts to connect with innovation leaders, investors, researchers, and tech companies.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739513528/2151003763_iqpv9a.jpg",
      },
      {
        text: "Participate in B2B, B2C, and B2G networking sessions to establish strategic partnerships.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739513632/2147923358_ugp1yg.jpg",
      },
      {
        text: "Discover real-world applications of AI and automation across different industries.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739513791/2151133519_wsb4ex.jpg",
      },
      {
        text: "Explore the latest advancements in AI and automation and identify the most suitable solutions for your business.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739513870/2150038862_ymjin0.jpg",
      },
      {
        text: "Learn how to integrate AI to optimize data management and improve decision-making.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739513946/2151003701_zidubp.jpg",
      },
      {
        text: "Access funding opportunities for startups and innovative businesses.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739514036/2148991374_y90kwy.jpg",
      },
      {
        text: "Discover winning strategies to develop high-performing and profitable AI projects.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739514130/2151137386_en8eeu.jpg",
      },
      {
        text: "Connect with innovation leaders, investors, researchers, and tech companies.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739514328/2149409842_ohrz63.jpg",
      },
    ],
  };

  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-1 gap-10 p-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {networkingAI[language].map((item, index) => (
          <InnovationItem data={item} key={index} textColor="text-white" />
        ))}
      </div>
    </div>
  );
}
