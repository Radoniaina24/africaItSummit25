"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopicItem from "./TopicItem";
export default function HealthStrategique() {
  const { language } = useLanguageContext();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 770 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 770, min: 0 },
      items: 1,
    },
  };

  const content = {
    title: {
      fr: "Conférences et Panels",
      en: "Conferences and Panels",
    },
    description: {
      fr: "Plongez au cœur de la transformation digitale du secteur médical. Les meilleurs experts du domaine partageront leurs analyses et expériences autour de sujets clés :",
      en: "Dive into the heart of the digital transformation in the medical sector. Leading experts in the field will share their insights and experiences on key topics:",
    },
    topics: {
      fr: [
        {
          title: "Télémédecine et accès aux soins à distance",
          description:
            "Comment le digital révolutionne la prise en charge des patients, notamment en zones rurales.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739336922/8508_rn00ry.jpg",
        },
        {
          title: "Intelligence artificielle et diagnostic médical",
          description:
            "Accélérer et fiabiliser l’analyse des données médicales.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337023/96336_t3cjag.jpg",
        },
        {
          title: "Optimisation des infrastructures hospitalières",
          description:
            "Comment les hôpitaux connectés améliorent la gestion et l’efficacité des soins.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337175/61796_vlkltf.jpg",
        },
        {
          title: "Cybersécurité et protection des données médicales",
          description:
            "Stratégies pour assurer la confidentialité et la sécurité des informations patients.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337259/2149595831_anmoip.jpg",
        },
        {
          title: "Gestion des pandémies et crises sanitaires",
          description:
            "Surveillance épidémiologique, intelligence artificielle et outils prédictifs pour anticiper les crises sanitaires.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337338/2148483263_u3dzyw.jpg",
        },
        {
          title: "Blockchain et transparence dans l’industrie pharmaceutique",
          description: "Suivi des médicaments et lutte contre la contrefaçon.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337476/2151111124_fyqvdm.jpg",
        },
        {
          title: "Financement et innovation en e-santé",
          description:
            "Accéder aux fonds d’investissement et aux modèles économiques gagnants.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337579/454_gutzhv.jpg",
        },
        {
          title: "Formation et transformation des compétences",
          description:
            "Les nouveaux métiers de la santé numérique et l’adaptation des cursus académiques.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337653/144838_y8u58z.jpg",
        },
      ],
      en: [
        {
          title: "Telemedicine and remote healthcare access",
          description:
            "How digital technology is revolutionizing patient care, especially in rural areas.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739336922/8508_rn00ry.jpg",
        },
        {
          title: "Artificial intelligence and medical diagnosis",
          description:
            "Accelerating and enhancing the reliability of medical data analysis.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337023/96336_t3cjag.jpg",
        },
        {
          title: "Optimization of hospital infrastructure",
          description:
            "How connected hospitals improve healthcare management and efficiency.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337175/61796_vlkltf.jpg",
        },
        {
          title: "Cybersecurity and protection of medical data",
          description:
            "Strategies to ensure patient information confidentiality and security.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337259/2149595831_anmoip.jpg",
        },
        {
          title: "Pandemic and health crisis management",
          description:
            "Epidemiological surveillance, artificial intelligence, and predictive tools to anticipate health crises.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337338/2148483263_u3dzyw.jpg",
        },
        {
          title: "Blockchain and transparency in the pharmaceutical industry",
          description: "Tracking medications and combating counterfeiting.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337476/2151111124_fyqvdm.jpg",
        },
        {
          title: "Funding and innovation in e-health",
          description:
            "Accessing investment funds and winning business models.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337579/454_gutzhv.jpg",
        },
        {
          title: "Training and skill transformation",
          description:
            "New careers in digital health and the adaptation of academic curricula.",
          image:
            "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739337653/144838_y8u58z.jpg",
        },
      ],
    },
  };

  return (
    <section className="bg-gradient-to-br from-[#42A9F5] via-[#7B42A6] to-[#E05CBB] py-10 lg:py-10 xl:py-10">
      <div className="mt-10">
        <SectionHeader
          headerInfo={{
            title: "",
            subtitle: content.title[language],
            description: content.description[language],
          }}
          subtitleColor={"#0796F5"}
          descriptionColor="#FFFFFF"
        />
      </div>
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        {/* <div className="lg:grid-cols- grid grid-cols-1 gap-7.5 md:grid-cols-4 xl:gap-10">
          {BlogData.slice(0, 4).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div> */}

        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={1000} // Contrôle la vitesse du défilement, 1000ms est plus rapide
          transitionDuration={1000} // Transition fluide, moins de temps entre chaque changement
          responsive={responsive}
          itemClass="px-3"
          arrows={false} // Désactive les flèches pour ne pas interrompre le défilement
          swipeable={false} // Désactive le glissement manuel, assurant un défilement automatique fluide
          focusOnSelect={false} // Empêche le focus sur les éléments lors du défilement
          dotListClass="custom-dot-list-style" // Personnalisation des indicateurs de pagination (optionnel)
        >
          {content.topics[language].map((topic, key) => (
            <TopicItem
              textColor="black"
              titleColor="white"
              topic={topic}
              key={key}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
