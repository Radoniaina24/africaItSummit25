import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionImageCity from "../health/SectionWithImage";

export default function Why() {
  const { language } = useLanguageContext();
  const why = {
    fr: "Pourquoi Participer à l’Africa IT Summit 2025 ?",
    en: "Why Attend the Africa IT Summit 2025?",
  };
  const panel = {
    fr: [
      {
        title:
          "Développez Votre Réseau et Accédez à un Marché en Pleine Expansion",
        highlights: [
          {
            text: "Échangez avec des experts en Green IT, des startups innovantes, des régulateurs et des entreprises technologiques.",
          },
          {
            text: "Participez à des sessions de networking B2B, B2C et B2G pour développer des opportunités de collaboration.",
          },
          {
            text: "Découvrez les nouvelles tendances et technologies qui favorisent la transition vers un numérique plus responsable.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739724970/2150970181_powoi8.jpg",
        imageAlt: "Opportunités commerciales et networking",
        imageOnRight: true,
      },
      {
        title: "Adoptez des Solutions Durables pour un Numérique Responsable",
        highlights: [
          {
            text: "Explorez des solutions technologiques durables.",
          },
          {
            text: "Apprenez comment les infrastructures numériques vertes réduisent l’impact environnemental.",
          },
          {
            text: "Identifiez les meilleures pratiques pour rendre les entreprises et services IT plus écologiques.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436253/2149151164_kvcoql.jpg",
        imageAlt: "Technologies durables et innovation",
        imageOnRight: false,
      },
      {
        title: "Saisissez les Opportunités d’Investissement dans la Green Tech",
        highlights: [
          {
            text: "Accédez à des opportunités d’investissement dans les startups et initiatives de la Green Tech.",
          },
          {
            text: "Développez votre activité et saisissez de nouvelles opportunités de marché.",
          },
          {
            text: "L’Afrique connaît une accélération de la transition numérique, avec une forte demande pour des solutions technologiques à faible empreinte carbone.",
          },
          {
            text: "Les gouvernements et les grandes entreprises adoptent des stratégies de numérisation durable.",
          },
          {
            text: "De nouvelles réglementations environnementales encouragent l’innovation et l’investissement dans le numérique responsable.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436253/2149151164_kvcoql.jpg",
        imageAlt: "Opportunités d’investissement et croissance",
        imageOnRight: true,
      },
    ],
    en: [
      {
        title: "Expand Your Network and Access a Growing Market",
        highlights: [
          {
            text: "Engage with Green IT experts, innovative startups, regulators, and technology companies.",
          },
          {
            text: "Participate in B2B, B2C, and B2G networking sessions to develop collaboration opportunities.",
          },
          {
            text: "Discover new trends and technologies that support the transition to more responsible digital practices.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739724970/2150970181_powoi8.jpg",
        imageAlt: "Business Opportunities and Networking",
        imageOnRight: true,
      },
      {
        title: "Adopt Sustainable Solutions for Responsible Digitalization",
        highlights: [
          {
            text: "Explore sustainable technological solutions.",
          },
          {
            text: "Learn how green digital infrastructures reduce environmental impact.",
          },
          {
            text: "Identify best practices to make IT businesses and services more eco-friendly.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436253/2149151164_kvcoql.jpg",
        imageAlt: "Sustainable Technologies and Innovation",
        imageOnRight: false,
      },
      {
        title: "Seize Investment Opportunities in Green Tech",
        highlights: [
          {
            text: "Access investment opportunities in Green Tech startups and initiatives.",
          },
          {
            text: "Grow your business and seize new market opportunities.",
          },
          {
            text: "Africa is experiencing a rapid digital transition, with strong demand for low-carbon technology solutions.",
          },
          {
            text: "Governments and major companies are adopting sustainable digitization strategies.",
          },
          {
            text: "New environmental regulations encourage innovation and investment in responsible digital solutions.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436253/2149151164_kvcoql.jpg",
        imageAlt: "Investment Opportunities and Growth",
        imageOnRight: true,
      },
    ],
  };

  return (
    <section className="bg-white py-20">
      <div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h2
            className=" mb-4 bg-gradient-to-r from-[#562196] via-[#D34FAC] to-[#0796F5] bg-clip-text text-xl font-extrabold text-transparent md:text-4xl"
            data-aos="fade-up"
          >
            {why[language]}
          </h2>
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
