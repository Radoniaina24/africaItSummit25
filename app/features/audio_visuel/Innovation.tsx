import { useLanguageContext } from "@/app/context/LanguageContext";
import SectionHeader from "@/components/Common/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Innovation() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Exhibitions et Espace d’Innovation",
    en: "Exhibitions and Innovation Space",
  };
  const description = {
    fr: "Les exposants auront toute liberté pour mettre en valeur leurs produits et solutions, avec un espace dédié aux démonstrations et aux rencontres professionnelles.",
    en: "Exhibitors will have the freedom to highlight their products and solutions, with a dedicated space for demonstrations and professional networking.",
  };

  return (
    <section className="bg-white py-20">
      <div className="mt-10">
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

      <PartnershipOpportunities />
      <Sectors />
    </section>
  );
}
const PartnershipOpportunities = () => {
  const { language } = useLanguageContext();
  const innovations = {
    fr: [
      {
        text: "Mettre en lumière les technologies récentes qui transforment le processus de tournage et de postproduction.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739448091/2149369105_ek3j8e.jpg",
      },
      {
        text: "Focus sur les outils logiciels qui optimisent les processus de création et de production.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739448168/2150038859_golozf.jpg",
      },
      {
        text: "Créer un environnement attractif pour les nouveaux partenaires à travers des démonstrations en direct.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739448274/2150966123_klfkgx.jpg",
      },
      {
        text: "Rencontrer des leaders du marché et explorer de nouvelles opportunités d'affaires.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739448362/2150769936_pzeayi.jpg",
      },
    ],
    en: [
      {
        text: "Highlight recent technologies that are transforming the shooting and postproduction process.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739448091/2149369105_ek3j8e.jpg",
      },
      {
        text: "Focus on software tools that optimize the creation and production processes.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739448168/2150038859_golozf.jpg",
      },
      {
        text: "Create an attractive environment for new partners through live demonstrations.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739448274/2150966123_klfkgx.jpg",
      },
      {
        text: "Meet industry leaders and explore new business opportunities.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739448362/2150769936_pzeayi.jpg",
      },
    ],
  };
  const titleOpôrtunities = {
    fr: "Une opportunité unique ",
    en: "A unique opportunity",
  };
  return (
    <div className="relative px-6 py-5">
      {/* Contenu principal */}
      <div className="mx-auto max-w-full text-center text-white">
        {/* Titre de la section */}
        <h1 className="my-12 text-4xl font-extrabold text-indigo-700">
          {titleOpôrtunities[language]}
        </h1>

        {/* Grille de cartes */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-10">
            {innovations[language].map((opportunity, index) => (
              <InnovationItem data={opportunity} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const InnovationItem = ({ data }) => {
  const { text, imageSource } = data;
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top mt-7.5 flex flex-col justify-between gap-5 p-4 pb-9 shadow-solid-8"
      >
        <div className="mb-3.5">
          <p className="text-gray-700">{text}</p>
        </div>

        <div className="relative h-0 w-full pb-[65%]">
          <Image
            src={imageSource}
            alt={imageSource}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </motion.div>
    </>
  );
};

const Sectors = () => {
  const { language } = useLanguageContext();
  const sectors = {
    fr: [
      {
        text: "Caméras et équipements de production nouvelle génération",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450160/2148038903_hsdshu.jpg",
      },
      {
        text: "Logiciels de montage, d’effets spéciaux et d’animation.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450252/2149269935_aoumwk.jpg",
      },
      {
        text: "Plateformes émergentes pour la distribution de contenu et les services de streaming.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450326/2150172379_vuhljg.jpg",
      },
      {
        text: "Studios virtuels et production décentralisée.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450586/2148815346_hqhm86.jpg",
      },
      {
        text: "Technologies immersives (réalité augmentée et virtuelle).",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450657/2148815718_qz32iy.jpg",
      },
      {
        text: "Blockchain et protection des droits d’auteur.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450741/2149074564_bwaly7.jpg",
      },
      {
        text: "Financement participatif et nouveaux modèles économiques.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450834/2147863948_ufwrg3.jpg",
      },
    ],
    en: [
      {
        text: "Next-generation cameras and production equipment",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450160/2148038903_hsdshu.jpg",
      },
      {
        text: "Editing, special effects, and animation software",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450252/2149269935_aoumwk.jpg",
      },
      {
        text: "Emerging platforms for content distribution and streaming services",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450326/2150172379_vuhljg.jpg",
      },
      {
        text: "Virtual studios and decentralized production",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450586/2148815346_hqhm86.jpg",
      },
      {
        text: "Immersive technologies (augmented and virtual reality)",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450657/2148815718_qz32iy.jpg",
      },
      {
        text: "Blockchain and copyright protection",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450741/2149074564_bwaly7.jpg",
      },
      {
        text: "Crowdfunding and new economic models",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739450834/2147863948_ufwrg3.jpg",
      },
    ],
  };

  const titleOpôrtunities = {
    fr: " Les secteurs représenté ",
    en: "The represented sectors",
  };
  return (
    <div className="relative px-6 py-5">
      {/* Contenu principal */}
      <div className="mx-auto max-w-full text-center text-white">
        {/* Titre de la section */}
        <h1 className="my-12 text-4xl font-extrabold text-indigo-700">
          {titleOpôrtunities[language]}
        </h1>

        {/* Grille de cartes */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-7">
            {sectors[language].map((opportunity, index) => (
              <InnovationItem data={opportunity} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
