import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import { InnovationItem } from "../audio_visuel/Innovation";
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
    fr: "L’Africa IT Summit 2025 offrira un espace d’exposition pour les entreprises Green Tech, les fournisseurs d’infrastructures numériques durables et les startups innovantes.",
    en: "The Africa IT Summit 2025 will provide an exhibition space for Green Tech companies, sustainable digital infrastructure providers, and innovative startups.",
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
  const ecoFriendlyITSolutions = {
    fr: [
      {
        description:
          "Présenter leurs solutions IT écoresponsables devant des investisseurs et des décideurs.",
        icon: FaLightbulb, // Icône représentant l'innovation
      },
      {
        description:
          "Attirer des clients et partenaires stratégiques à la recherche de solutions technologiques durables.",
        icon: FaHandshake, // Icône représentant le partenariat
      },
      {
        description:
          "Démontrer en direct l’efficacité de leurs innovations pour réduire l’impact environnemental du numérique.",
        icon: FaPlayCircle, // Icône représentant une démonstration en direct
      },
    ],
    en: [
      {
        description:
          "Present their eco-friendly IT solutions to investors and decision-makers.",
        icon: FaLightbulb, // Icon representing innovation
      },
      {
        description:
          "Attract clients and strategic partners looking for sustainable technological solutions.",
        icon: FaHandshake, // Icon representing partnership
      },
      {
        description:
          "Demonstrate live the effectiveness of their innovations to reduce the environmental impact of digital technology.",
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
          {ecoFriendlyITSolutions[language].map((item, index) => (
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
  const ecoFriendlyTechSolutions = {
    fr: [
      {
        title: "Solutions technologiques écoresponsables",
        highlights: [
          {
            text: "Centres de données et infrastructures cloud à faible consommation énergétique.",
          },
          {
            text: "Technologies d’optimisation des ressources et d’efficacité énergétique pour les entreprises IT.",
          },
          {
            text: "Outils d’intelligence artificielle et d’analyse de données pour la transition écologique.",
          },
          {
            text: "Solutions de recyclage et d’économie circulaire des équipements numériques.",
          },
          {
            text: "Smart grids et gestion intelligente de l’énergie dans les infrastructures numériques.",
          },
          {
            text: "Logiciels et plateformes dédiés à la réduction de l’empreinte carbone des activités numériques.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739755758/2148884838_1_mauddu.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Solutions technologiques écologiques",
        imageOnRight: false, // Positionne l'image à droite
      },
    ],
    en: [
      {
        title: "Eco-Friendly Technological Solutions",
        highlights: [
          {
            text: "Data centers and cloud infrastructure with low energy consumption.",
          },
          {
            text: "Resource optimization and energy efficiency technologies for IT businesses.",
          },
          {
            text: "AI tools and data analysis for ecological transition.",
          },
          {
            text: "Recycling solutions and circular economy for digital equipment.",
          },
          {
            text: "Smart grids and intelligent energy management in digital infrastructures.",
          },
          {
            text: "Software and platforms dedicated to reducing the carbon footprint of digital activities.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739755758/2148884838_1_mauddu.jpg", // Replace with the actual image URL
        imageAlt: "Eco-friendly technological solutions",
        imageOnRight: false, // Position the image on the right
      },
    ],
  };

  return (
    <section className="pt-10">
      <div className="container mx-auto">
        <div className="space-y-16 px-6 py-12 ">
          {ecoFriendlyTechSolutions[language].map((item, index) => (
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
