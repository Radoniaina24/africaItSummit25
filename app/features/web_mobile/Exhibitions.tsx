import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import {
  FaLightbulb,
  FaHandshake,
  FaPlayCircle,
  FaRocket,
  FaMicrophone,
} from "react-icons/fa";

import { Card, CardContent } from "@/components/Ui/Card/card";
import SectionImageCity from "../health/SectionWithImage";
export default function Exhibitions() {
  const { language } = useLanguageContext();

  const title = {
    fr: "Vitrine de l’Innovation & Exposition des Startups",
    en: "Innovation Showcase & Startup Exhibitions",
  };
  const description = {
    fr: "L'Africa IT Summit 2025 accueillera un hub d’innovation où les startups, entreprises et développeurs pourront présenter leurs solutions web et mobiles révolutionnaires.",
    en: "Africa IT Summit 2025 will feature an innovation hub where startups, enterprises, and developers can demonstrate their groundbreaking web & mobile solutions.",
  };

  return (
    <section className="bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] py-20">
      <div className="container mx-auto ">
        <div className="mb-10">
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: title[language],
              description: description[language],
            }}
            subtitleColor={["#D34FAC", "#0796F5", "#562196"]}
            descriptionColor="white"
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
          "Présentez vos applications, plateformes et technologies web aux investisseurs et clients potentiels.",
        icon: FaLightbulb, // Icône représentant l'innovation
      },
      {
        description:
          "Démontrez la puissance de vos solutions numériques aux entreprises en quête de transformation web et mobile.",
        icon: FaRocket, // Icône représentant la transformation numérique
      },
      {
        description:
          "Pitcher vos innovations devant des capital-risqueurs, investisseurs providentiels et équipes d'innovation d’entreprises.",
        icon: FaMicrophone, // Icône représentant une présentation/pitch
      },
    ],
    en: [
      {
        description:
          "Showcase your applications, platforms, and web-based technologies to investors and potential clients.",
        icon: FaLightbulb, // Icon representing innovation
      },
      {
        description:
          "Demonstrate the power of your digital solutions to businesses looking for web & mobile transformation.",
        icon: FaRocket, // Icon representing digital transformation
      },
      {
        description:
          "Pitch your innovations to venture capitalists, angel investors, and corporate innovation teams.",
        icon: FaMicrophone, // Icon representing a pitch/presentation
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
  const techInnovations = {
    fr: [
      {
        title: "Ce que les visiteurs pourront explorer",
        highlights: [
          {
            text: "Applications mobiles de nouvelle génération et portefeuilles numériques.",
          },
          {
            text: "Plateformes de e-commerce et marketplaces adaptées aux consommateurs africains.",
          },
          {
            text: "Solutions cloud pour des applications web évolutives et sécurisées.",
          },
          {
            text: "Outils et frameworks de développement multiplateforme.",
          },
          {
            text: "Solutions de Réalité Augmentée (AR) et Réalité Virtuelle (VR) pour des expériences immersives.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739705543/24746653_7002417_i1yasj.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Innovations technologiques et solutions numériques",
        imageOnRight: false, // Positionne l'image à droite
      },
    ],
    en: [
      {
        title: "What Visitors Will Explore",
        highlights: [
          {
            text: "Next-generation mobile apps and digital wallets.",
          },
          {
            text: "E-commerce and marketplace platforms tailored for African consumers.",
          },
          {
            text: "Cloud solutions for scalable and secure web applications.",
          },
          {
            text: "Cross-platform development tools and frameworks.",
          },
          {
            text: "Augmented Reality (AR) & Virtual Reality (VR) solutions for immersive experiences.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739705543/24746653_7002417_i1yasj.jpg", // Replace with the actual image URL
        imageAlt: "Tech innovations and digital solutions",
        imageOnRight: false, // Position the image on the right
      },
    ],
  };

  return (
    <section className="pt-10 ">
      <div className="container mx-auto">
        <div className="space-y-16 px-6 py-12 ">
          {techInnovations[language].map((item, index) => (
            <SectionImageCity
              key={index}
              title={item.title}
              highlights={item.highlights}
              imageSrc={item.imageSrc}
              imageAlt={item.title}
              imageOnRight={item.imageOnRight}
              highlightTextColor="white"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
