import { useLanguageContext } from "@/app/context/LanguageContext";
import SectionHeader from "@/components/Common/SectionHeader";
import { Card, CardContent } from "@/components/Ui/Card/card";
import React from "react";
import {
  FaFilm,
  FaLaptopCode,
  FaChartBar,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa";
export default function Networking() {
  const { language } = useLanguageContext();
  const colors = ["#0796F5", "#D34FAC", "#562196"];
  const title = {
    fr: "Un Accès Unique aux Opportunités de Marché et au Networking",
    en: "A Unique Gateway to Market Opportunities and Networking",
  };
  const professionalRelations = {
    fr: [
      {
        title: "Développement des relations B2B",
        description:
          "Identifiez des partenaires stratégiques, des distributeurs et des investisseurs pour vos projets audiovisuels.",
        icon: "🤝", // Partenariats commerciaux
      },
      {
        title: "Engagement auprès du grand public (B2C)",
        description:
          "Interagissez avec le public cible et adaptez vos offres aux nouvelles tendances du marché.",
        icon: "🛍️", // Interaction avec les consommateurs
      },
      {
        title: "Collaboration avec le secteur public (B2G)",
        description:
          "Échangez avec les gouvernements et institutions publiques pour comprendre les politiques d’investissement et de soutien au secteur.",
        icon: "🏛️", // Institutions publiques
      },
      {
        title: "Partenariats éducatifs et professionnels (B2E)",
        description:
          "Établissez des collaborations entre universités, écoles et entreprises pour former la prochaine génération de talents.",
        icon: "🎓", // Éducation et formation
      },
    ],
    en: [
      {
        title: "B2B Partnership Development",
        description:
          "Identify strategic partners, distributors, and investors for your audiovisual projects.",
        icon: "🤝", // Business partnerships
      },
      {
        title: "B2C Market Engagement",
        description:
          "Interact with the target audience and tailor your offerings to emerging market trends.",
        icon: "🛍️", // Consumer interaction
      },
      {
        title: "Collaboration with Public Sector (B2G)",
        description:
          "Engage with governments and public institutions to understand investment policies and sector support.",
        icon: "🏛️", // Public institutions
      },
      {
        title: "Educational and Professional Partnerships (B2E)",
        description:
          "Establish collaborations between universities, schools, and businesses to train the next generation of professionals.",
        icon: "🎓", // Education and training
      },
    ],
  };

  const why = {
    fr: "Pourquoi cet événement est fait pour vous ?",
    en: "Why is this event the perfect fit for you?",
  };

  const opportunities = {
    fr: [
      {
        text: "Vous êtes un professionnel du cinéma et de l’audiovisuel et souhaitez découvrir les tendances, innovations et opportunités du marché.",
        icon: FaFilm,
      },
      {
        text: "Vous êtes une entreprise technologique développant des solutions pour le secteur et souhaitez présenter vos innovations.",
        icon: FaLaptopCode,
      },
      {
        text: "Vous êtes un investisseur à la recherche de projets prometteurs dans l’industrie du divertissement et du numérique.",
        icon: FaChartBar,
      },
      {
        text: "Vous êtes un étudiant, un formateur ou une institution académique cherchant à aligner la formation avec les besoins du marché.",
        icon: FaGraduationCap,
      },
      {
        text: "Vous êtes un décideur politique ou un acteur institutionnel impliqué dans le développement du secteur audiovisuel en Afrique.",
        icon: FaBuilding,
      },
    ],
    en: [
      {
        text: "You are a film and audiovisual professional looking to discover market trends, innovations, and opportunities.",
        icon: FaFilm,
      },
      {
        text: "You are a tech company developing solutions for the industry and want to showcase your innovations.",
        icon: FaLaptopCode,
      },
      {
        text: "You are an investor seeking promising projects in the entertainment and digital industry.",
        icon: FaChartBar,
      },
      {
        text: "You are a student, trainer, or academic institution looking to align education with market needs.",
        icon: FaGraduationCap,
      },
      {
        text: "You are a policymaker or institutional actor involved in the development of the audiovisual sector in Africa.",
        icon: FaBuilding,
      },
    ],
  };

  return (
    <section className="py-20">
      <div className="mb-16">
        <SectionHeader
          headerInfo={{
            title: "",
            subtitle: title[language],
            description: "",
          }}
          subtitleColor={["#0796F5", "#562196", "#562196"]}
          descriptionColor="#FFFFFF"
        />
      </div>
      <div className=" container relative z-10 mx-auto   text-center text-indigo-700">
        <div className="grid gap-8 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {professionalRelations[language].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="relative flex transform flex-col items-start overflow-hidden rounded-xl bg-purple-300 p-8 text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icône flottante */}
              <div className="absolute right-0 top-0 -mr-6 -mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-600 shadow">
                {item.icon}
              </div>

              {/* Titre */}
              <h2 className="mt-6 text-xl font-bold text-indigo-600">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-4 leading-relaxed text-gray-700">
                {item.description}
              </p>

              {/* Effet visuel */}
              <div className="absolute inset-0 z-[-1] rounded-xl bg-gradient-to-br from-indigo-50 to-white opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
      <section className="">
        <div className="container mx-auto py-20">
          <div className="mb-15">
            {" "}
            <SectionHeader
              headerInfo={{
                title: "",
                subtitle: why[language],
                description: "",
              }}
              subtitleColor={["#0796F5", "#562196", "#562196"]}
              descriptionColor="#FFFFFF"
            />
          </div>

          <div
            className="grid grid-cols-1 gap-10 p-4 md:grid-cols-2 lg:grid-cols-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              justifyContent: "center",
            }}
          >
            {opportunities[language].map((item, index) => (
              <Card
                key={index}
                className="relative rounded-xl bg-purple-300  p-6 shadow-lg transition-all duration-300 hover:cursor-pointer hover:border-none hover:bg-[#55a5da] hover:text-white hover:shadow-xl"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded-full border border-gray-200 bg-gray-200 p-5 shadow-md">
                  <item.icon
                    className="text-4xl "
                    style={{ color: colors[index % colors.length] }}
                  />
                </div>
                <CardContent className="pt-10 text-center">
                  <p className="text-md font-medium text-gray-700">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
