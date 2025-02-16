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
            text: "B2B (Business to Business) – Connectez-vous avec des entreprises de logiciels, des développeurs et des prestataires de services informatiques pour explorer des partenariats.",
          },
          {
            text: "B2C (Business to Consumer) – Engagez-vous avec des startups, des entrepreneurs et des entreprises à la recherche de solutions web et mobiles innovantes.",
          },
          {
            text: "B2G (Business to Government) – Discutez de la gouvernance électronique, de la numérisation du secteur public et des cadres réglementaires avec les décideurs politiques.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536578/2148339351_g7utaz.jpg",
        imageAlt: "Accédez aux meilleures opportunités de networking",
        imageOnRight: true,
      },
      {
        title: "Pourquoi Participer ?",
        highlights: [
          {
            text: "L'économie numérique de l'Afrique est en plein essor.",
          },
          {
            text: "Une base d'utilisateurs Internet en forte croissance et une pénétration mobile importante.",
          },
          {
            text: "Les gouvernements investissent massivement dans la transformation numérique et les infrastructures intelligentes.",
          },
          {
            text: "L'essor du travail à distance et de l'entrepreneuriat numérique.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739706527/2148793737_nydcq8.jpg",
        imageAlt: "Pourquoi participer au Africa IT Summit 2025",
        imageOnRight: false,
      },
      {
        title: "Accès Inégalé aux Investisseurs et Leaders de l'Industrie",
        highlights: [
          {
            text: "Rencontrez les principaux investisseurs en capital-risque, business angels et dirigeants du secteur technologique.",
          },
          {
            text: "Présentez vos travaux devant des responsables gouvernementaux et des leaders du secteur privé.",
          },
          {
            text: "Obtenez des financements et des partenariats pour vos projets technologiques.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739707049/2147923392_gp3vhq.jpg",
        imageAlt: "Accédez à des investisseurs et leaders de l'industrie",
        imageOnRight: true,
      },
      {
        title: "Positionnez-vous parmi les Leaders de l'Industrie",
        highlights: [
          {
            text: "Faites partie du plus grand événement de développement web et mobile d'Afrique.",
          },
          {
            text: "Participez à des discussions stimulantes et des sessions de partage de connaissances.",
          },
          {
            text: "Élargissez votre portée mondiale en réseautant avec des entreprises technologiques internationales.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739707170/2149352633_m5mazi.jpg",
        imageAlt: "Positionnez-vous parmi les leaders de l'industrie",
        imageOnRight: false,
      },
    ],
    en: [
      {
        title: "Access to:",
        highlights: [
          {
            text: "B2B (Business to Business) – Connect with software companies, developers, and IT service providers to explore partnerships.",
          },
          {
            text: "B2C (Business to Consumer) – Engage with startups, entrepreneurs, and enterprises seeking innovative web & mobile solutions.",
          },
          {
            text: "B2G (Business to Government) – Discuss e-governance, public sector digitalization, and regulatory frameworks with policymakers.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536578/2148339351_g7utaz.jpg",
        imageAlt: "Access the best networking opportunities",
        imageOnRight: true,
      },
      {
        title: "Why Participate?",
        highlights: [
          {
            text: "Africa’s Digital Economy is Booming",
          },
          {
            text: "A rapidly growing internet user base and mobile penetration.",
          },
          {
            text: "Governments investing heavily in digital transformation & smart infrastructure.",
          },
          {
            text: "The rise of remote work & digital entrepreneurship.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739706527/2148793737_nydcq8.jpg",
        imageAlt: "Why participate in the Africa IT Summit 2025",
        imageOnRight: false,
      },
      {
        title: "Unparalleled Access to Investors & Industry Leaders",
        highlights: [
          {
            text: "Meet top venture capitalists, angel investors, and corporate tech leaders.",
          },
          {
            text: "Showcase your work in front of government officials & private sector leaders.",
          },
          {
            text: "Secure funding & partnerships for your tech projects.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739707049/2147923392_gp3vhq.jpg",
        imageAlt: "Access to investors and industry leaders",
        imageOnRight: true,
      },
      {
        title: "Position Yourself Among Industry Leaders",
        highlights: [
          {
            text: "Be part of Africa’s largest web & mobile development event.",
          },
          {
            text: "Engage in thought-provoking discussions & knowledge-sharing sessions.",
          },
          {
            text: "Expand your global reach by networking with international tech firms.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739707170/2149352633_m5mazi.jpg",
        imageAlt: "Position yourself among industry leaders",
        imageOnRight: false,
      },
    ],
  };

  const title = {
    fr: "Réseautage Stratégique et Opportunités Commerciales",
    en: "Networking and Business Space",
  };
  const description = {
    fr: "L’Africa IT Summit 2025 constituera un environnement stratégique pour favoriser les échanges et les collaborations.",
    en: "Africa IT Summit 2025 will create an ideal environment for high-level business networking and collaboration.",
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
