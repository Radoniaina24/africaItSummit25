import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionImageCity from "../health/SectionWithImage";

export default function Why() {
  const { language } = useLanguageContext();
  const why = {
    fr: "Pourquoi Participer à l’Africa IT Summit 2025 ?",
    en: "Why Attend the Africa IT Summit 2025?",
  };
  const cybersecurityPanel = {
    fr: [
      {
        title: "Réseautage et Partenariats Stratégiques",
        highlights: [
          {
            text: "Accédez à un réseau stratégique d’experts et de décideurs en cybersécurité.",
          },
          {
            text: "Rencontrez des leaders de la cybersécurité, des institutions publiques et des entreprises innovantes.",
          },
          {
            text: "Participez à des sessions de networking B2B, B2C et B2G pour établir des partenariats stratégiques.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739757837/2148510462_hjk7mv.jpg",
        imageAlt: "Réseautage et Partenariats",
        imageOnRight: true,
      },
      {
        title: "Tendances et Innovations en Cybersécurité",
        highlights: [
          {
            text: "Échangez sur les menaces cybernétiques émergentes et les solutions adaptées au contexte africain.",
          },
          {
            text: "Explorez les dernières tendances et technologies en cybersécurité.",
          },
          {
            text: "Découvrez les meilleures pratiques pour sécuriser les infrastructures numériques.",
          },
          {
            text: "Identifiez les solutions adaptées aux entreprises, aux gouvernements et aux particuliers.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739757960/2149595831_1_l35qcw.jpg",
        imageAlt: "Tendances en Cybersécurité",
        imageOnRight: false,
      },
      {
        title: "Financement et Opportunités d’Investissement",
        highlights: [
          {
            text: "Bénéficiez d’opportunités de financement et d’investissement.",
          },
          {
            text: "Accédez à des opportunités d’investissement pour les entreprises spécialisées en cybersécurité.",
          },
          {
            text: "Échangez avec des institutions financières et des fonds d’investissement intéressés par la sécurisation du numérique en Afrique.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739758035/2148780559_vlbbd5.jpg",
        imageAlt: "Opportunités d’Investissement",
        imageOnRight: true,
      },
    ],
    en: [
      {
        title: "Networking and Strategic Partnerships",
        highlights: [
          {
            text: "Access a strategic network of cybersecurity experts and decision-makers.",
          },
          {
            text: "Meet cybersecurity leaders, public institutions, and innovative companies.",
          },
          {
            text: "Join B2B, B2C, and B2G networking sessions to establish strategic partnerships.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739757837/2148510462_hjk7mv.jpg",
        imageAlt: "Networking and Partnerships",
        imageOnRight: true,
      },
      {
        title: "Cybersecurity Trends and Innovations",
        highlights: [
          {
            text: "Discuss emerging cyber threats and solutions tailored to the African context.",
          },
          {
            text: "Explore the latest trends and technologies in cybersecurity.",
          },
          {
            text: "Discover best practices for securing digital infrastructures.",
          },
          {
            text: "Identify solutions for businesses, governments, and individuals.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739757960/2149595831_1_l35qcw.jpg",
        imageAlt: "Cybersecurity Trends",
        imageOnRight: false,
      },
      {
        title: "Funding and Investment Opportunities",
        highlights: [
          {
            text: "Benefit from financing and investment opportunities.",
          },
          {
            text: "Access investment opportunities for cybersecurity-focused companies.",
          },
          {
            text: "Engage with financial institutions and investment funds interested in digital security in Africa.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739758035/2148780559_vlbbd5.jpg",
        imageAlt: "Investment Opportunities",
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
          {cybersecurityPanel[language].map((item, index) => (
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
