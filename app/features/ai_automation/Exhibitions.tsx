import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import { InnovationItem } from "../audio_visuel/Innovation";
import SectionHeader from "@/components/Common/SectionHeader";
import {
  FaIndustry,
  FaHospital,
  FaSeedling,
  FaLock,
  FaBalanceScale,
  FaChalkboardTeacher,
  FaRegMoneyBillAlt,
  FaRobot,
  FaChartLine,
  FaCity,
  FaShieldAlt,
  FaCogs,
  FaLightbulb,
  FaHandshake,
  FaPlayCircle,
} from "react-icons/fa";

import { Card, CardContent } from "@/components/Ui/Card/card";
import SectionImageCity from "../health/SectionWithImage";
export default function Exhibitions() {
  const { language } = useLanguageContext();

  const title = {
    fr: "Exhibitions et Espace d’Innovation",
    en: "Exhibitions and Innovation Space",
  };
  const description = {
    fr: "L’Africa IT Summit 2025 proposera un espace dédié aux démonstrations, aux startups innovantes et aux entreprises technologiques souhaitant exposer leurs solutions et leurs avancées en IA et automatisation.",
    en: "The Africa IT Summit 2025 will feature a dedicated space for demonstrations, innovative startups, and tech companies looking to showcase their solutions and advancements in AI and automation.",
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
  const innovationOpportunities = {
    fr: [
      {
        description:
          "Présenter leurs innovations en IA et en automatisation devant un public qualifié.",
        icon: FaLightbulb, // Icône représentant l'innovation
      },
      {
        description:
          "Attirer des investisseurs, des partenaires stratégiques et des clients potentiels.",
        icon: FaHandshake, // Icône représentant le partenariat
      },
      {
        description:
          "Démontrer en direct l’efficacité de leurs solutions pour répondre aux défis des entreprises et des gouvernements africains.",
        icon: FaPlayCircle, // Icône représentant une démonstration en direct
      },
    ],
    en: [
      {
        description:
          "Present their innovations in AI and automation to a qualified audience.",
        icon: FaLightbulb, // Icon representing innovation
      },
      {
        description:
          "Attract investors, strategic partners, and potential clients.",
        icon: FaHandshake, // Icon representing partnership
      },
      {
        description:
          "Demonstrate live the effectiveness of their solutions to address the challenges of African businesses and governments.",
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
          {innovationOpportunities[language].map((item, index) => (
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
  const aiSolutions = {
    fr: [
      {
        title: "Ce que les visiteurs pourront explorer",
        highlights: [
          {
            text: "Optimisation des entreprises et des services publics grâce à l’IA.",
          },
          {
            text: "Automatisation et robots dans les secteurs industriel, logistique et santé.",
          },
          {
            text: "Outils d’analyse de données et de prise de décision avec l’IA.",
          },
          {
            text: "Systèmes intelligents pour la gestion des infrastructures et des villes connectées.",
          },
          {
            text: "Plateformes d’apprentissage automatique et formations en IA.",
          },
          {
            text: "Solutions de cybersécurité basées sur l’intelligence artificielle.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739515105/2149524383_n27c5n.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Opportunités commerciales et networking",
        imageOnRight: false, // Positionne l'image à droite
      },
    ],
    en: [
      {
        title: "What Visitors Will Explore",
        highlights: [
          {
            text: "AI solutions for optimizing businesses and public services.",
          },
          {
            text: "Robots and automation in industry, logistics, and healthcare.",
          },
          {
            text: "AI-based data analysis and decision-making tools.",
          },
          {
            text: "Smart systems for managing infrastructure and connected cities.",
          },
          {
            text: "Machine learning platforms and AI training.",
          },
          {
            text: "AI-based cybersecurity solutions.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739515105/2149524383_n27c5n.jpg", // Replace with the actual image URL
        imageAlt: "Business Opportunities and Networking",
        imageOnRight: false, // Position the image on the right
      },
    ],
  };

  return (
    <section className="pt-10">
      <div className="container mx-auto">
        <div className="space-y-16 px-6 py-12 ">
          {aiSolutions[language].map((item, index) => (
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
