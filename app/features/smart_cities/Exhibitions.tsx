import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import { FaLightbulb, FaHandshake, FaPlayCircle } from "react-icons/fa";

import { Card, CardContent } from "@/components/Ui/Card/card";
import SectionImageCity from "../health/SectionWithImage";
export default function Exhibitions() {
  const { language } = useLanguageContext();

  const title = {
    fr: "Exhibitions et Espace d’Innovation",
    en: "Exhibitions and Innovation Space",
  };
  const description = {
    fr: "L’Africa IT Summit 2025 offrira un espace d’exposition dédié aux startups, entreprises technologiques et collectivités locales, afin de présenter leurs innovations et solutions en matière de villes intelligentes et d’infrastructures connectées.",
    en: "The Africa IT Summit 2025 will feature a dedicated exhibition space for startups, technology companies, and local authorities to showcase their innovations and solutions in smart cities and connected infrastructure.",
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto ">
        <div className="mb-10">
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
      </div>
      <section className="">
        <div className="container mx-auto ">
          <Opportunities />
          <AiSolutions />
        </div>
      </section>
    </section>
  );
}

const Opportunities = () => {
  const { language } = useLanguageContext();
  const why = {
    fr: "Opportunités pour les exposants",
    en: "Opportunities for Exhibitors",
  };
  const colors = ["#0796F5", "#D34FAC", "#562196"];
  const exhibitorOpportunities = {
    fr: [
      {
        description:
          "Mettre en avant leurs solutions en smart mobility, smart buildings, gestion des ressources et IoT.",
        icon: FaLightbulb, // Icône représentant l'innovation et la technologie
      },
      {
        description:
          "Attirer des investisseurs, des partenaires technologiques et des acteurs publics.",
        icon: FaHandshake, // Icône représentant les partenariats stratégiques
      },
      {
        description:
          "Démontrer en direct l’impact des nouvelles technologies sur la gestion des villes et des infrastructures.",
        icon: FaPlayCircle, // Icône représentant une démonstration en direct
      },
    ],
    en: [
      {
        description:
          "Showcase their solutions in smart mobility, smart buildings, resource management, and IoT.",
        icon: FaLightbulb, // Icon representing innovation and technology
      },
      {
        description:
          "Attract investors, technology partners, and public sector stakeholders.",
        icon: FaHandshake, // Icon representing strategic partnerships
      },
      {
        description:
          "Demonstrate live the impact of new technologies on urban management and infrastructure.",
        icon: FaPlayCircle, // Icon representing a live demonstration
      },
    ],
  };

  return (
    <section className="">
      <div className="container mx-auto">
        <div className="mb-15">
          {" "}
          <h2 className="mx-auto  mb-4 text-center text-2xl font-bold text-[#562196] md:w-4/5 xl:w-1/2 xl:text-3xl">
            {why[language]}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 p-4">
          {exhibitorOpportunities[language].map((item, index) => (
            <Card
              key={index}
              className="relative flex w-full flex-col items-center rounded-xl bg-gray-100 p-6 shadow-lg transition-all duration-300 hover:cursor-pointer hover:border-none  hover:shadow-xl sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded-full border border-gray-200 bg-gray-200 p-5 shadow-md">
                <item.icon
                  className="text-4xl"
                  style={{ color: colors[index % colors.length] }}
                />
              </div>
              <CardContent className="pt-10 text-center">
                <p className="text-md font-medium text-gray-700">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const AiSolutions = () => {
  const { language } = useLanguageContext();
  const smartCitySolutions = {
    fr: [
      {
        title: "Solutions pour les villes intelligentes",
        highlights: [
          {
            text: "Systèmes de gestion intelligente de la circulation et des transports urbains.",
          },
          {
            text: "Solutions d’énergie renouvelable et de gestion optimisée des ressources.",
          },
          {
            text: "Plateformes numériques pour la gestion des services urbains et de l’administration locale.",
          },
          {
            text: "Infrastructures connectées pour la sécurité publique et la surveillance urbaine.",
          },
          {
            text: "Technologies pour le développement de smart buildings et d’espaces intelligents.",
          },
          {
            text: "Plateformes Big Data pour la planification et l’optimisation des villes.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536667/2147772278_udrnr0.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Solutions pour les villes intelligentes",
        imageOnRight: false,
      },
    ],
    en: [
      {
        title: "Smart City Solutions",
        highlights: [
          {
            text: "Intelligent traffic and urban transport management systems.",
          },
          {
            text: "Renewable energy solutions and optimized resource management.",
          },
          {
            text: "Digital platforms for urban services management and local administration.",
          },
          {
            text: "Connected infrastructures for public safety and urban surveillance.",
          },
          {
            text: "Technologies for smart buildings and intelligent spaces development.",
          },
          {
            text: "Big Data platforms for city planning and optimization.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739536667/2147772278_udrnr0.jpg", // Replace with the actual image URL
        imageAlt: "Smart City Solutions",
        imageOnRight: false,
      },
    ],
  };

  return (
    <section className="pt-10">
      <div className="container mx-auto">
        <div className="space-y-16 px-6 py-12 ">
          {smartCitySolutions[language].map((item, index) => (
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
};
