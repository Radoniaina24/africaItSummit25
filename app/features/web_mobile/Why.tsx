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
        title:
          "Explorez un marché en pleine expansion et connectez-vous avec les acteurs clés",
        highlights: [
          {
            text: "Interagissez avec les principales entreprises de technologies web et mobiles, des investisseurs et des responsables gouvernementaux.",
          },
          {
            text: "Rencontrez des ingénieurs logiciels, des designers UI/UX, des architectes cloud et des développeurs d'applications façonnant l'économie numérique de l'Afrique.",
          },
          {
            text: "Découvrez des opportunités dans les applications web, le SaaS, les super apps et les solutions mobiles.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739710822/2147737976_yykpzi.jpg",
        imageAlt: "Accédez aux meilleures opportunités de networking",
        imageOnRight: true,
      },
      {
        title:
          "Découvrez les dernières tendances en développement web et mobile",
        highlights: [
          {
            text: "Progressive Web Apps (PWA) : Des expériences plus rapides et hors ligne qui révolutionnent la navigation mobile.",
          },
          {
            text: "IA et apprentissage automatique dans les applications web et mobiles : Automatisation des processus, amélioration des expériences utilisateur et stimulation de la croissance des entreprises.",
          },
          {
            text: "Développement basé sur le cloud : Solutions évolutives, sécurisées et rentables pour les entreprises et les gouvernements.",
          },
          {
            text: "Innovation mobile-first : L'essor des super apps, des paiements mobiles et des portefeuilles numériques.",
          },
          {
            text: "E-commerce et plateformes web : De nouveaux modèles commerciaux alimentant l'essor du commerce en ligne en Afrique.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739710906/2150038906_rjraty.jpg",
        imageAlt: "Pourquoi participer au Africa IT Summit 2025",
        imageOnRight: false,
      },
      {
        title: "Présentez vos innovations et gagnez en visibilité",
        highlights: [
          {
            text: "Présentez vos solutions de développement web et mobile aux leaders du secteur, investisseurs et décideurs.",
          },
          {
            text: "Participez à des sessions de networking B2B, B2C et B2G pour des collaborations à forte valeur ajoutée.",
          },
          {
            text: "Présentez votre startup aux investisseurs en capital-risque et aux accélérateurs technologiques.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739710990/2150461353_aseuha.jpg",
        imageAlt: "Présentez vos innovations et gagnez en visibilité",
        imageOnRight: true,
      },
    ],
    en: [
      {
        title: "Explore a Thriving Market & Connect with Key Players",
        highlights: [
          {
            text: "Engage with leading web & mobile tech companies, investors, and government officials.",
          },
          {
            text: "Meet software engineers, UI/UX designers, cloud architects, and app developers shaping Africa’s digital economy.",
          },
          {
            text: "Discover opportunities in web applications, SaaS, super apps, and mobile solutions.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739710822/2147737976_yykpzi.jpg",
        imageAlt: "Access the best networking opportunities",
        imageOnRight: true,
      },
      {
        title: "Discover the Latest Trends in Web & Mobile Development",
        highlights: [
          {
            text: "Progressive Web Apps (PWA): Faster, offline-first experiences revolutionizing mobile browsing.",
          },
          {
            text: "AI & Machine Learning in Web & Mobile Apps: Automating processes, enhancing user experiences, and driving business growth.",
          },
          {
            text: "Cloud-Based Development: Scalable, secure, and cost-effective solutions for businesses and governments.",
          },
          {
            text: "Mobile-First Innovation: The rise of super apps, mobile payments, and digital wallets.",
          },
          {
            text: "E-Commerce & Web Platforms: New business models driving Africa’s online retail boom.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739710906/2150038906_rjraty.jpg",
        imageAlt: "Why participate in the Africa IT Summit 2025",
        imageOnRight: false,
      },
      {
        title: "Showcase Your Innovations & Gain Business Exposure",
        highlights: [
          {
            text: "Present your web & mobile development solutions to industry leaders, investors, and decision-makers.",
          },
          {
            text: "Engage in B2B, B2C, and B2G networking sessions for high-value collaborations.",
          },
          {
            text: "Pitch your startup to venture capitalists and technology accelerators.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739710990/2150461353_aseuha.jpg",
        imageAlt: "Showcase your innovations and gain business exposure",
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
