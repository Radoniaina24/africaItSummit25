import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import {
  FaMobileAlt,
  FaBitcoin,
  FaRobot,
  FaShieldAlt,
  FaWifi,
  FaCode,
  FaCity,
  FaDollarSign,
} from "react-icons/fa";
export default function Panel() {
  const { language } = useLanguageContext();

  const title = {
    fr: "Conférences & Panels : L’Avenir des Technologies Web & Mobiles en Afrique",
    en: "Conferences & Panels: The Future of Web & Mobile Tech in Africa",
  };
  const description = {
    fr: "Des experts issus des plus grandes entreprises technologiques, startups et institutions de recherche analyseront les tendances émergentes et les stratégies qui façonnent l’économie numérique africaine.",
    en: "Experts from top tech firms, startups, and research institutions will discuss emerging trends and strategies shaping Africa’s digital economy.",
  };

  const webMobileTopics = {
    fr: [
      {
        title: "IA et Automatisation dans le Développement d’Applications",
        description:
          "L'impact des chatbots IA, assistants vocaux et analyses prédictives sur l'expérience utilisateur.",
        icon: <FaRobot />,
      },
      {
        title: "L’Essor du No-Code & Low-Code",
        description:
          "Accélération du développement d’applications et démocratisation de la technologie.",
        icon: <FaCode />,
      },
      {
        title: "5G & Connectivité Internet en Afrique",
        description:
          "Accès plus rapide et plus fiable aux services web et mobiles.",
        icon: <FaWifi />,
      },
      {
        title: "Cybersécurité & Protection des Données",
        description:
          "Garantir des interactions numériques sécurisées et protéger les données des utilisateurs.",
        icon: <FaShieldAlt />,
      },
      {
        title: "Blockchain & Applications Web3",
        description:
          "Solutions décentralisées pour des transactions sécurisées et des identités numériques fiables.",
        icon: <FaBitcoin />,
      },
      {
        title: "Super Apps & Avenir du Commerce Mobile",
        description:
          "Leçons tirées de WeChat, Paytm et de l'écosystème numérique africain.",
        icon: <FaMobileAlt />,
      },
      {
        title: "E-Gouvernement & Villes Intelligentes",
        description:
          "Utilisation des solutions web et mobiles pour une gouvernance efficace et des services publics optimisés.",
        icon: <FaCity />,
      },
      {
        title: "Stratégies de Monétisation pour les Développeurs",
        description:
          "Modèles économiques basés sur les abonnements, les achats in-app et la publicité.",
        icon: <FaDollarSign />,
      },
    ],
    en: [
      {
        title: "AI & Automation in App Development",
        description:
          "The impact of AI-powered chatbots, voice assistants, and predictive analytics on user experience.",
        icon: <FaRobot />,
      },
      {
        title: "The Rise of No-Code & Low-Code Development",
        description: "Accelerating app creation and democratizing technology.",
        icon: <FaCode />,
      },
      {
        title: "5G & Internet Connectivity in Africa",
        description:
          "Unlocking faster, more reliable web & mobile experiences.",
        icon: <FaWifi />,
      },
      {
        title: "Cybersecurity & Data Protection",
        description:
          "Ensuring safe digital interactions and protecting users’ data.",
        icon: <FaShieldAlt />,
      },
      {
        title: "Blockchain & Web3 Applications",
        description:
          "Decentralized solutions for secure transactions and digital identities.",
        icon: <FaBitcoin />,
      },
      {
        title: "Super Apps & the Future of Mobile Commerce",
        description:
          "Lessons from WeChat, Paytm, and Africa’s own digital ecosystem.",
        icon: <FaMobileAlt />,
      },
      {
        title: "E-Government & Smart Cities",
        description:
          "Using web & mobile solutions for efficient governance and public services.",
        icon: <FaCity />,
      },
      {
        title: "Monetization Strategies for Developers",
        description:
          "Subscriptions, in-app purchases, and advertising revenue models.",
        icon: <FaDollarSign />,
      },
    ],
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

        <div className="grid grid-cols-1 gap-10 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {webMobileTopics[language].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="relative flex transform flex-col items-start overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 to-white p-8 text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icône flottante */}
              <div className="absolute right-5 top-5 -mr-6 -mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-500 shadow">
                {item.icon}
              </div>

              {/* Titre */}
              <h2 className="mt-6 text-lg font-bold text-blue-400">
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
    </section>
  );
}
