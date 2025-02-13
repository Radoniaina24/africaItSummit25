"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";

export default function EspaceNetworking() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Espace de Networking et d’Affaires : Rencontrez les Acteurs Clés du Secteur",
    en: "Networking and Business Space: Connect with Key Industry Players",
  };
  const description = {
    fr: "L’Africa IT Summit 2025 offrira un environnement propice aux rencontres et aux collaborations stratégiques.",
    en: "The Africa IT Summit 2025 will provide an ideal environment for meetings and strategic collaborations.",
  };

  return (
    <section className="bg-white py-20">
      <SectionHeader
        headerInfo={{
          title: "",
          subtitle: title[language],
          description: description[language],
        }}
        subtitleColor={"#42A9F5"}
      />
      <EventsSection language={language} />
      <ParticipationBenefits language={language} />
    </section>
  );
}

const EventCard = ({ event }) => {
  return (
    <div
      className="max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-6 shadow-lg hover:cursor-pointer"
      data-aos="zoom-out-down"
    >
      <div className="flex items-center justify-center text-4xl">
        {event.icon}
      </div>
      <h2 className="text-center text-xl font-semibold text-[#6ab8e8]">
        {event.title}
      </h2>
      <p className="text-center text-gray-600">{event.description}</p>
    </div>
  );
};

const EventsSection = ({ language = "fr" }) => {
  const events = {
    fr: [
      {
        title: "Networking",
        description:
          "Sessions de networking B2B ciblées pour maximiser vos rencontres stratégiques.",
        icon: "🤝", // Icône pour le networking
      },
      {
        title: "Atelier",
        description:
          "Ateliers pratiques et discussions sectorielles pour échanger sur des cas concrets.",
        icon: "🛠️", // Icône pour les ateliers pratiques
      },
      {
        title: "Conférence",
        description:
          "Conférences inspirantes avec des experts du marché pour mieux comprendre les tendances et les perspectives d’évolution.",
        icon: "🎤", // Icône pour les conférences
      },
    ],
    en: [
      {
        title: "Networking",
        description:
          "Targeted B2B networking sessions to maximize your strategic meetings.",
        icon: "🤝", // Icon for networking
      },
      {
        title: "Workshop",
        description:
          "Hands-on workshops and industry discussions to exchange on real-world cases.",
        icon: "🛠️", // Icon for workshops
      },
      {
        title: "Conference",
        description:
          "Inspiring conferences with market experts to better understand trends and future perspectives.",
        icon: "🎤", // Icon for conferences
      },
    ],
  };
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* <h1 className="mb-8 text-center text-3xl font-bold">
      {language === "fr" ? "Événements à venir" : "Upcoming Events"}
    </h1> */}
        <div className="flex flex-wrap justify-center gap-6">
          {events[language].map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ParticipationBenefits = ({ language = "fr" }) => {
  const participationBenefits = {
    fr: [
      {
        title: "Accès aux Décideurs",
        description:
          "Un accès direct aux décideurs du secteur, investisseurs et innovateurs en santé numérique.",
        icon: "🎯", // Icône pour la prise de décision
      },
      {
        title: "Opportunités de Réseautage",
        description:
          "Une opportunité de renforcer votre réseau et d’établir des partenariats stratégiques.",
        icon: "🤝", // Icône pour le réseautage
      },
      {
        title: "Marché en Croissance",
        description:
          "Un marché en pleine expansion avec des perspectives de croissance rapide.",
        icon: "📈", // Icône pour la croissance du marché
      },
      {
        title: "Espace d’Exposition",
        description:
          "Un espace d’exposition et de démonstration idéal pour promouvoir vos solutions.",
        icon: "🏢", // Icône pour l'exposition et la démonstration
      },
      {
        title: "Veille et Innovation",
        description:
          "Une occasion unique d’identifier les innovations et tendances qui façonneront l’avenir de la santé numérique en Afrique.",
        icon: "💡", // Icône pour l'innovation et la veille technologique
      },
    ],
    en: [
      {
        title: "Access to Decision-Makers",
        description:
          "Direct access to key industry decision-makers, investors, and digital health innovators.",
        icon: "🎯", // Icon for decision-making
      },
      {
        title: "Networking Opportunities",
        description:
          "An opportunity to strengthen your network and establish strategic partnerships.",
        icon: "🤝", // Icon for networking
      },
      {
        title: "Growing Market",
        description: "A rapidly expanding market with strong growth prospects.",
        icon: "📈", // Icon for market growth
      },
      {
        title: "Exhibition Space",
        description:
          "An ideal exhibition and demonstration space to showcase your solutions.",
        icon: "🏢", // Icon for exhibition
      },
      {
        title: "Trends & Innovation",
        description:
          "A unique opportunity to identify innovations and trends shaping the future of digital health in Africa.",
        icon: "💡", // Icon for innovation
      },
    ],
  };
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#7B42A6]">
          {language === "fr" ? "Pourquoi Participer ?" : "Why Participate ?"}
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {participationBenefits[language].map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};
