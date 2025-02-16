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
        title: "Opportunités d'Investissement et Développement Urbain Durable",
        highlights: [
          {
            text: "Explorez les opportunités d’investissement dans les infrastructures intelligentes.",
          },
          {
            text: "Accédez à des projets ambitieux de développement urbain financés par des institutions publiques et privées.",
          },
          {
            text: "Découvrez les innovations qui façonneront les villes de demain.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739724970/2150970181_powoi8.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Opportunités d'Investissement",
        imageOnRight: true,
      },
      {
        title: "Technologies et Innovations pour des Villes Intelligentes",
        highlights: [
          {
            text: "Découvrez comment les technologies intelligentes transforment la gestion des villes et des infrastructures.",
          },
          {
            text: "Comprenez comment l’IA, l’IoT et la blockchain optimisent la mobilité, l’énergie et la gestion des services publics.",
          },
          {
            text: "Identifiez les nouvelles tendances du smart building et des infrastructures durables.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536253/2149151164_kvcoql.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Technologies des Villes Intelligentes",
        imageOnRight: false,
      },
      {
        title: "Collaboration et Networking pour la Transformation Urbaine",
        highlights: [
          {
            text: "Échangez avec des acteurs du secteur immobilier, des gouvernements et des entreprises technologiques.",
          },
          {
            text: "Participez à des sessions de networking B2B, B2C et B2G pour tisser des relations d’affaires.",
          },
          {
            text: "Rencontrez des décideurs politiques impliqués dans la transformation urbaine et numérique.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536667/2147772278_udrnr0.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Networking et Collaboration",
        imageOnRight: true,
      },
    ],
    en: [
      {
        title: "Investment Opportunities and Sustainable Urban Development",
        highlights: [
          {
            text: "Explore investment opportunities in smart infrastructure.",
          },
          {
            text: "Access ambitious urban development projects funded by public and private institutions.",
          },
          {
            text: "Discover innovations that will shape the cities of tomorrow.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739724970/2150970181_powoi8.jpg", // Replace with the actual image URL
        imageAlt: "Investment Opportunities",
        imageOnRight: true,
      },
      {
        title: "Technologies and Innovations for Smart Cities",
        highlights: [
          {
            text: "Discover how smart technologies are transforming city management and infrastructure.",
          },
          {
            text: "Understand how AI, IoT, and blockchain optimize mobility, energy, and public service management.",
          },
          {
            text: "Identify new trends in smart buildings and sustainable infrastructure.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536253/2149151164_kvcoql.jpg", // Replace with the actual image URL
        imageAlt: "Smart City Technologies",
        imageOnRight: false,
      },
      {
        title: "Collaboration and Networking for Urban Transformation",
        highlights: [
          {
            text: "Engage with real estate sector players, governments, and technology companies.",
          },
          {
            text: "Participate in B2B, B2C, and B2G networking sessions to build business relationships.",
          },
          {
            text: "Meet policymakers involved in urban and digital transformation.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536667/2147772278_udrnr0.jpg", // Replace with the actual image URL
        imageAlt: "Networking and Collaboration",
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
