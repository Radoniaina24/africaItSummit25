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
    fr: "L’Africa IT Summit 2025 proposera un espace d’exposition pour les entreprises fintech, les banques numériques et les startups afin de mettre en avant leurs solutions et services devant un public qualifié.",
    en: "The Africa IT Summit 2025 will feature an exhibition space for fintech companies, digital banks, and startups to showcase their solutions and services to a qualified audience.",
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
          "Présentez vos innovations fintech devant des investisseurs, institutions financières et entrepreneurs.",
        icon: FaLightbulb, // Icône représentant l'innovation
      },
      {
        description:
          "Attirez des clients et partenaires stratégiques en quête de solutions financières adaptées aux réalités africaines.",
        icon: FaHandshake, // Icône représentant le partenariat
      },
      {
        description:
          "Démontrez en direct l’efficacité de vos plateformes et technologies.",
        icon: FaPlayCircle, // Icône représentant une démonstration en direct
      },
    ],
    en: [
      {
        description:
          "Showcase your fintech innovations to investors, financial institutions, and entrepreneurs.",
        icon: FaLightbulb, // Icon representing innovation
      },
      {
        description:
          "Attract clients and strategic partners looking for financial solutions tailored to African realities.",
        icon: FaHandshake, // Icon representing partnership
      },
      {
        description:
          "Demonstrate the effectiveness of your platforms and technologies live.",
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
  const financialSolutions = {
    fr: [
      {
        title: "Ce que les visiteurs pourront explorer",
        highlights: [
          {
            text: "Applications de paiements mobiles et solutions de transfert d’argent.",
          },
          {
            text: "Services bancaires numériques et plateformes de microfinance.",
          },
          {
            text: "Solutions blockchain pour la finance et la sécurisation des transactions.",
          },
          {
            text: "Outils d’intelligence artificielle pour l’analyse des données financières.",
          },
          {
            text: "Systèmes de scoring de crédit et financement alternatif.",
          },
          {
            text: "Plateformes de finance décentralisée et gestion des actifs numériques.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739686192/2149187287_mekkak.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Opportunités dans la finance numérique",
        imageOnRight: false, // Positionne l'image à droite
      },
    ],
    en: [
      {
        title: "What Visitors Will Explore",
        highlights: [
          {
            text: "Mobile payment applications and money transfer solutions.",
          },
          {
            text: "Digital banking services and microfinance platforms.",
          },
          {
            text: "Blockchain solutions for finance and transaction security.",
          },
          {
            text: "AI tools for financial data analysis.",
          },
          {
            text: "Credit scoring systems and alternative financing.",
          },
          {
            text: "Decentralized finance platforms and digital asset management.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739686192/2149187287_mekkak.jpg", // Replace with the actual image URL
        imageAlt: "Opportunities in Digital Finance",
        imageOnRight: false, // Position the image on the right
      },
    ],
  };

  return (
    <section className="pt-10">
      <div className="container mx-auto">
        <div className="space-y-16 px-6 py-12 ">
          {financialSolutions[language].map((item, index) => (
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
