import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
export default function Partnerships() {
  const { language } = useLanguageContext();
  const partners = {
    fr: [
      {
        type: "Partenaire Officiel",
        tarif: "10 000 € TTC",
        avantages: [
          "Logo sur les supports de communication (site web, brochures, affichage).",
          "5 pass Business & Leaders.",
          "Mention en tant que Partenaire Officiel.",
          "Accès à une session de networking avec des décideurs et investisseurs.",
          "Exposition de votre logo sur place et pendant les événements.",
          "Dîner de gala pour 2 invités.",
        ],
      },
      {
        type: "Partenaire Média",
        tarif: "À négocier",
        details:
          "Possibilité d’échange de services en fonction de la couverture médiatique fournie.",
        avantages: [
          "Exposition maximale de votre logo sur les supports numériques et imprimés.",
          "Couverture en direct de l’événement sur vos plateformes (articles, interviews, vidéos).",
          "Mention dans les communiqués de presse et publications sur les réseaux sociaux de l’événement.",
          "Accès exclusif aux interviews avec les intervenants.",
          "Dîner de gala pour vos journalistes et représentants.",
        ],
      },
    ],
    en: [
      {
        type: "Official Partner",
        tarif: "€10,000 incl. VAT",
        avantages: [
          "Logo on communication materials (website, brochures, posters).",
          "5 Business & Leaders passes.",
          "Acknowledgment as an Official Partner.",
          "Access to a networking session with decision-makers and investors.",
          "Exposure of your logo on-site and during events.",
          "Gala dinner for 2 guests.",
        ],
      },
      {
        type: "Media Partner",
        tarif: "Negotiable",
        details:
          "Possibility of service exchange based on the media coverage provided.",
        avantages: [
          "Maximum exposure of your logo on digital and printed materials.",
          "Live coverage of the event on your platforms (articles, interviews, videos).",
          "Mention in press releases and event-related social media publications.",
          "Exclusive access to interviews with speakers.",
          "Gala dinner for your journalists and representatives.",
        ],
      },
    ],
  };
  return (
    <div className="container  mx-auto  p-8">
      <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900">
        {language === "fr" ? "Nos Partenaires" : "Our Partners"}
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {partners[language].map((partenaire, index) => (
          <div
            key={index}
            className="transform rounded-xl border border-gray-300 bg-white p-8 shadow-xl transition duration-500 hover:bg-blue-50 hover:shadow-2xl"
          >
            <h3 className="mb-4 bg-gradient-to-r from-[#337dae] via-[#562196] to-[#e722ac] bg-clip-text text-center text-2xl font-bold text-transparent">
              {partenaire.type}
            </h3>
            <p className="mb-3 text-lg font-semibold text-gray-600">
              Tarif : <span className="text-[#2c7fba]">{partenaire.tarif}</span>
            </p>
            {partenaire.details && (
              <p className="mb-4 text-sm italic text-gray-500">
                {partenaire.details}
              </p>
            )}
            <ul className="mt-4 space-y-3 text-gray-700">
              {partenaire.avantages.map((avantage, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-3 text-xl text-[#bd8ce3]">✔</span>
                  {avantage}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
