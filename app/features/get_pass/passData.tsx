import { FeatureTab } from "@/types/featureTab";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { PricingPlans } from "@/types/pass";
// export const passData: FeatureTab[] = [
//   {
//     id: "tabOne",
//     label: "Attendee",
//     title: "Accelerate Africa’s digital transformation",
//     desc1: `Africa is undergoing a rapid digital transformation, with a fast-growing digital economy.
// However, major challenges remain: limited
// infrastructure, unequal access to the internet,
// lack of funding, shortage of skilled talent, and
// fragmented policies. These obstacles hinder
// technological development and innovation. `,
//     desc2: ` By launching this initiative in Mauritius, we strive
// to deliver an event that embodies the country’s
// innovation, excellence, and forward-thinking vision.`,
//     image:
//       "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738923493/74_bu0blp.jpg",
//   },
//   {
//     id: "tabTwo",
//     label: "Startup Pass",
//     title: " Interactive and strategic sessions.",
//     desc1: `Conferences & Panels: In-depth discussions on the impact of digital transformation in key sectors such as health, education, and agriculture, featuring experts,
// decision-makers, and innovators.`,
//     desc2: `B2B Meetings & Networking: Dedicated sessions to foster strategic collaborations
// between stakeholders in tech, film, and various industries, strengthening Africa’s
// digital ecosystem. `,
//     image:
//       "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738923492/129016_s0cdl8.jpg",
//   },
//   {
//     id: "tabThree",
//     label: "Exposant Pass",
//     title: "Africa’s digital landscape",
//     desc1: `Analyzing emerging technologies in
// content production and distribution,
// fostering cultural diversity and the growth
// of Africa’s creative industry. `,
//     desc2: `Discussing digital sovereignty, critical
// infrastructure protection, and cybersecurity awareness to safeguard Africa’s digital
// transformation. `,
//     image:
//       "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738923492/47500_bj48kc.jpg",
//   },
//   {
//     id: "tabFor",
//     label: "Investor Pass",
//     title: "Africa’s digital landscape",
//     desc1: `Analyzing emerging technologies in
// content production and distribution,
// fostering cultural diversity and the growth
// of Africa’s creative industry. `,
//     desc2: `Discussing digital sovereignty, critical
// infrastructure protection, and cybersecurity awareness to safeguard Africa’s digital
// transformation. `,
//     image:
//       "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738923492/47500_bj48kc.jpg",
//   },
//   {
//     id: "tabFive",
//     label: "Dîner de Gala ",
//     title: "Africa’s digital landscape",
//     desc1: `Analyzing emerging technologies in
// content production and distribution,
// fostering cultural diversity and the growth
// of Africa’s creative industry. `,
//     desc2: `Discussing digital sovereignty, critical
// infrastructure protection, and cybersecurity awareness to safeguard Africa’s digital
// transformation. `,
//     image:
//       "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738923492/47500_bj48kc.jpg",
//   },
// ];

export const passData: PricingPlans = {
  fr: [
    {
      tarif: "Tarif Early Bird",
      normalPrice: 150, // Added normalPrice
      price: 130,
      title: "Attendee Standart",
      description:
        " Idéal pour les étudiants et passionnés du numérique souhaitant explorer l’événement, découvrir les innovations et assister aux conférences.",
      features: [
        {
          text: "Accès aux expositions et démonstrations IT",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Participation aux conférences et panels",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Networking libre- Pause café et déjeuner inclus",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Accès aux lounges VIP",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
        {
          text: " Sessions B2B- Dîner de gala",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
      ],
      isPopular: false,
      id: "tabOne",
      label: "Attendee Standart",
    },
    {
      tarif: "Tarif Early Bird",
      price: 250,
      normalPrice: 350, // Added normalPrice
      title: "Startup Pass",
      description:
        "Idéal pour les startups cherchant à se connecter avec des investisseurs, présenter leurs innovations et trouver des partenaires.",
      features: [
        {
          text: "Opportunité de pitch devant investisseurs et partenaires",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Référencement dans le catalogue officiel",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Accès aux conférences et panels spécialisés",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: " Éligibilité aux Trophées Africa IT Summit",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: " Option d’ajout au dîner de gala (+100 €)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: " Espace d’exposition, lounge VIP",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
        {
          text: " Sessions investisseurs exclusives.",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
      ],
      isPopular: false,
      id: "tabTwo",
      label: "Startup Pass",
    },
    {
      tarif: "Tarif Early Bird",
      price: 450,
      normalPrice: 550, // Added normalPrice
      title: " Attendee  Business ",
      description:
        "Conçu pour les entrepreneurs, cadres et décideurs cherchant des opportunités stratégiques et des connexions de haut niveau.",
      features: [
        {
          text: "Accès complet aux expositions et conférences",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Networking premium avec lounge dédié",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Accès aux sessions B2B & investisseurs",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: " Participation aux workshops et tables rondes avancées",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: " Accès au dîner de gala (inclus)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Pause café et déjeuner inclus (pour chaque journée)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: " Visibilité sur le catalogue officiel",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
        {
          text: "Opportunité d’exposition",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
      ],
      isPopular: false,
      id: "tabOnes",
      label: "Attendee Business",
    },
    {
      tarif: "Tarif Early Bird",
      normalPrice: 700, // Added normalPrice
      price: 450,
      title: "Exposant Pass",
      description:
        "Idéal pour les entreprises souhaitant présenter leurs solutions, attirer de nouveaux clients et partenaires B2B, et accroître leur visibilité.",
      features: [
        {
          text: " Présence sur le catalogue officiel et site web",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Accès exclusif aux sessions de networking B2B",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Possibilité de démonstration lors des panels spécialisés (sous validation de l’organisation)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Visibilité renforcée dans les supports de communication de l’événement",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Participation aux panels et interventions sur scène (sous validation de l’organisation)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Éligibilité aux Trophées Africa IT Summit (catégorie entreprises & solutions innovantes)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: " Pause café et déjeuner inclus (pour chaque journée)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Accès lounge VIP",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
        {
          text: "Accès aux conférences en tant que participant individuel.",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
      ],
      isPopular: false,
      id: "tabThree",
      label: "Exposant Pass",
    },
    {
      tarif: "Tarif Early Bird",
      normalPrice: 900, // Added normalPrice
      price: 700,
      title: "Investor Pass ",
      description:
        "Conçu pour les fonds d’investissement, business angels et incubateurs souhaitant accéder aux meilleures startups tech en Afrique.",
      features: [
        {
          text: "Accès aux pitchs exclusifs de startups & scale-ups",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Rencontres privées avec fondateurs et entrepreneurs (matchmaking dédié)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Accès aux sessions B2B & rendez-vous organisés avec les startups",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Accès aux ateliers et panels sur les tendances d’investissement en Afrique",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Accès VIP aux événements privés",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Accès au lounge VIP & dîner de gala (inclus)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: " Pause café et déjeuner inclus (pour chaque journée)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Opportunité d’exposition",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
        {
          text: "visibilité sur le catalogue officiel.",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
      ],
      isPopular: false,
      id: "tabFor",
      label: "Investor Pass",
    },
    {
      tarif: "Tarif Early Bird",
      normalPrice: 150, // Added normalPrice
      price: 120,
      title: "Dîner de Gala",
      description:
        "Un moment exclusif pour rencontrer les acteurs majeurs de la tech africaine, célébrer l’innovation et élargir son réseau.",
      features: [
        {
          text: "Remise des Trophées Africa IT Summit",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Célébration des meilleures startups & solutions IT",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Rencontres avec les investisseurs et décideurs influents",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Cocktail & dîner gastronomique dans un cadre prestigieux",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: " Investor Pass",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Business & Leaders Pass",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "VIP & Conférenciers",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
      ],
      isPopular: false,
      id: "tabFive",
      label: "Dîner de Gala ",
    },
    {
      tarif: "Sur invitation uniquement",
      normalPrice: null, // Pas de prix car sur invitation
      price: null,
      title: "Pass VIP & Conférenciers",
      description:
        "Accès exclusif réservé aux speakers, experts et personnalités influentes du secteur IT.",
      features: [
        {
          text: "Accès complet aux conférences et événements VIP",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Opportunité de prise de parole et modération de panels",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Sessions de networking privé avec investisseurs & décideurs",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Accès exclusif aux lounges VIP",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Accès au dîner de gala (inclus)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Affichage de votre nom et photo en tant que panéliste sur le site web et plateformes",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Branding personnel pour valoriser votre expertise & leadership dans la tech",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
      ],
      isPopular: false,
      id: "tabVIP",
      label: "VIP & Conférenciers",
    },
  ],
  en: [
    {
      tarif: "Early Bird Rate",
      normalPrice: 150, // Added normalPrice
      price: 130,
      title: "Attendee – Standard",
      description:
        "Ideal for students and digital enthusiasts looking to explore the event, discover innovations, and attend conferences.",
      features: [
        {
          text: "Access to IT exhibitions and demonstrations",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Participation in conferences and panels",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Free networking - Coffee and lunch breaks included",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Access to VIP lounges",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
        {
          text: "B2B sessions – Gala dinner",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
      ],
      isPopular: false,
      id: "tabOne",
      label: "Attendee Standard",
    },
    {
      tarif: "Tarif Early Bird",

      normalPrice: 350, // Added normalPrice
      price: 250,
      title: "Startup Pass",
      description:
        "Ideal for startups looking to connect with investors, showcase innovations, and find partners.",
      features: [
        {
          text: "Pitch opportunity in front of investors and partners",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Listing in the official catalog",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Access to specialized conferences and panels",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Eligibility for the Africa IT Summit Awards",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Option to add to gala dinner (+100 €)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Exhibition space, VIP lounge",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
        {
          text: "Exclusive investor sessions.",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
      ],
      isPopular: false,
      id: "tabTwo",
      label: "Startup Pass",
    },
    {
      tarif: "Early Bird Rate",
      normalPrice: 550, // Added normalPrice
      price: 450,
      title: "Attendee – Business",
      description:
        "Designed for entrepreneurs, executives, and decision-makers seeking strategic opportunities and high-level connections.",
      features: [
        {
          text: "Full access to exhibitions and conferences",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Premium networking with dedicated lounge",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Access to B2B sessions & investor meetings",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Participation in workshops and advanced round tables",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Access to the gala dinner (included)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Coffee and lunch breaks included (for each day)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Visibility in the official catalog",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
        {
          text: "Exhibition opportunity",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
      ],
      isPopular: false,
      id: "tabOnes",
      label: "Attendee – Business",
    },
    {
      tarif: "Early Bird Rate",
      normalPrice: 700, // Added normalPrice
      price: 500,
      title: "Exhibitor Pass",
      description:
        "Ideal for companies wishing to showcase their solutions, attract new clients and B2B partners, and increase visibility.",
      features: [
        {
          text: "Presence in the official catalog and website",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Exclusive access to B2B networking sessions",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Possibility to demo during specialized panels (subject to event approval)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Enhanced visibility in event communication materials",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Participation in panels and speaking engagements (subject to event approval)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Eligibility for the Africa IT Summit Awards (category for companies & innovative solutions)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Coffee and lunch breaks included (for each day)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Access to VIP lounge",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
        {
          text: "Access to conferences as an individual participant.",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
      ],
      isPopular: false,
      id: "tabThree",
      label: "Exhibitor Pass",
    },
    {
      tarif: "Early Bird Rate",
      normalPrice: 900, // Added normalPrice
      price: 700,
      title: "Investor Pass",
      description:
        "Designed for investment funds, business angels, and incubators seeking access to the best tech startups in Africa.",
      features: [
        {
          text: "Access to exclusive startup & scale-up pitches",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Private meetings with founders and entrepreneurs (dedicated matchmaking)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Access to B2B sessions & scheduled meetings with startups",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Access to workshops and panels on investment trends in Africa",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "VIP access to private events",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Access to VIP lounge & gala dinner (included)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Coffee and lunch breaks included (for each day)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Exhibition opportunity",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
        {
          text: "Visibility in the official catalog.",
          isAvailable: true,
          icon: <FaTimesCircle size={20} className="text-red-500" />,
        },
      ],
      isPopular: false,
      id: "tabFor",
      label: "Investor Pass",
    },
    {
      tarif: "Early Bird Rate",
      normalPrice: 150, // Added normalPrice
      price: 120,
      title: "Gala Dinner ",
      description:
        "An exclusive opportunity to meet key players in African tech, celebrate innovation, and expand your network.",
      features: [
        {
          text: "Africa IT Summit Awards Ceremony",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Celebration of the best startups & IT solutions",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Meetings with investors and influential decision-makers",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Cocktail & gourmet dinner in a prestigious setting",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Investor Pass",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Business & Leaders Pass",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "VIP & Speakers",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
      ],
      isPopular: false,
      id: "tabFive",
      label: "Gala Dinner",
    },
    {
      tarif: "Invitation Only",
      normalPrice: null, // No price since it's by invitation
      price: null,
      title: "VIP & Speakers Pass",
      description:
        "Exclusive access for speakers, experts, and key IT industry figures.",
      features: [
        {
          text: "Full access to conferences and VIP events",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Opportunity to speak and moderate panels",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Private networking sessions with investors & decision-makers",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Exclusive access to VIP lounges",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Gala dinner access (included)",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Name & photo displayed as a panelist on website and platforms",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
        {
          text: "Personal branding to highlight expertise & leadership in tech",
          isAvailable: true,
          icon: <FaCircleCheck size={20} className="text-green-500" />,
        },
      ],
      isPopular: false,
      id: "tabVIP",
      label: "VIP & Speakers",
    },
  ],
};
