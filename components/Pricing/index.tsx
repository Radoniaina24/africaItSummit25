"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { useLanguageContext } from "@/app/context/LanguageContext";
const PricingItem = ({
  tarif,
  price,
  normalPrice,
  title,
  description,
  features,
  isPopular,
}) => {
  return (
    <div
      className={`animate_top group relative rounded-lg border border-x-4 border-y-4  border-[#D34FAC]  bg-white p-7.5 shadow-solid-10 md:w-[45%] lg:w-1/3 xl:p-12.5 ${
        isPopular ? "relative" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute -right-3.5 top-7.5 -rotate-90 transform rounded-bl-full rounded-tl-full bg-gradient-to-r from-[#D34FAC] to-[#562196] px-4.5 py-1.5 text-metatitle font-medium uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Popular
        </div>
      )}
      <h3 className=" bg-gradient-to-r from-[#0796F5] via-[#D34FAC] to-[#562196] bg-clip-text text-2xl font-bold text-transparent  ">
        {title}
      </h3>
      <h3 className=" text-2xl font-bold text-black  ">{tarif}</h3>
      <h3 className=" text-ld text-center font-bold  text-indigo-500 line-through  ">
        €{normalPrice}{" "}
      </h3>
      <h3 className="mb-7.5 text-3xl font-bold text-black  ">
        €{price}{" "}
        <span className="text-regular text-waterloo "> TTC / pass</span>
      </h3>

      <p>{description}</p>

      <div className="d mt-9 border-t border-stroke   pb-12.5">
        <ul className="divide-y divide-gray-200">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-center justify-between py-2 text-sm text-black ${
                feature.isAvailable ? "" : "opacity-40"
              } last:mb-0 `}
            >
              {feature.text}
              <div>{feature.icon}</div>
            </li>
          ))}
        </ul>
      </div>

      <button
        aria-label="Get the Plan button"
        className="group/btn inline-flex transform items-center gap-2 rounded-full bg-gradient-to-r from-[#D34FAC] to-[#562196] px-4 py-1.5 font-medium text-white shadow-lg transition-all duration-300  hover:shadow-xl"
      >
        <span className="">Get your pass</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

const Pricing = () => {
  const { language } = useLanguageContext();
  const pricingPlans = {
    fr: [
      {
        tarif: "Tarif Early Bird",
        normalPrice: 150, // Added normalPrice
        price: 130,
        title: "Attendee – Standard",
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
      },
      {
        tarif: "Tarif Early Bird",
        price: 450,
        normalPrice: 550, // Added normalPrice
        title: " Attendee – Business & Leaders ",
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
      },
      {
        tarif: "Tarif Early Bird",
        normalPrice: 150, // Added normalPrice
        price: 120,
        title: "Dîner de Gala & Remise des Trophées Africa IT Summit",
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
      },
      {
        tarif: "Early Bird Rate",
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
      },
      {
        tarif: "Early Bird Rate",
        normalPrice: 550, // Added normalPrice
        price: 450,
        title: "Attendee – Business & Leaders",
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
      },
      {
        tarif: "Early Bird Rate",
        normalPrice: 150, // Added normalPrice
        price: 120,
        title: "Gala Dinner & Africa IT Summit Awards Ceremony",
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
      },
    ],
  };
  return (
    <>
      {/* ===== Pricing Table Start ===== */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-10 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: "LOREM ISPUN",
                subtitle: "consectetur adipiscing elit",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.",
              }}
            />
          </div>
          {/* Section Title End */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-wrap xl:gap-12.5">
            {pricingPlans[language].map((plan, index) => (
              <PricingItem
                key={index}
                price={plan.price}
                title={plan.title}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                tarif={plan.tarif}
                normalPrice={plan.normalPrice}
              />
            ))}
          </div>
        </div>
      </section>
      {/* ===== Pricing Table End ===== */}
    </>
  );
};

export default Pricing;
