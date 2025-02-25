"use client";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useLanguageContext } from "@/app/context/LanguageContext";
export default function Sponsors() {
  const { language } = useLanguageContext();
  const title = {
    fr: " Nos Offres de Sponsoring",
    en: "Our Sponsorship Packages",
  };
  const sponsors = {
    fr: [
      {
        name: "Sponsor Diamond",
        price: 50000,
        currency: "€",
        description: [
          "Visibilité sur tous les supports de communication (site web, brochures, bannières, vidéos promotionnelles).",
          "Exposition exclusive avec un stand premium de 30m².",
          "Intervention dans une session plénière ou discours d’ouverture.",
          "20 pass VIP & Conférenciers.",
          "Logo sur les badges des participants.",
          "Accès exclusif aux sessions de networking et aux événements VIP.",
          "Exposition de votre logo dans les publications avant et après l’événement.",
          "Dîner de gala inclus pour vos invités.",
        ],
      },
      {
        name: "Sponsor Gold",
        price: 30000,
        currency: "€",
        description: [
          "Logo sur tous les supports de communication (site web, brochures, affichage).",
          "Stand de 20m² dans la zone d’exposition.",
          "Intervention dans une session spécialisée.",
          "15 pass Business & Leaders.",
          "Exposition dans le programme de l’événement et dans les vidéos promotionnelles.",
          "Accès aux sessions de networking avec les leaders du secteur.",
          "Dîner de gala inclus pour vos invités.",
        ],
      },
      {
        name: "Sponsor Premium",
        price: 15000,
        currency: "€",
        description: [
          "Logo sur les supports de communication majeurs (site web, brochures, affichage).",
          "Stand de 12m² dans la zone d’exposition.",
          "10 pass Business & Leaders.",
          "Mention dans le programme de l’événement.",
          "Exposition dans les bannières et vidéos de l’événement.",
          "Accès au dîner de gala.",
        ],
      },
    ],
    en: [
      {
        name: "Diamond Sponsor",
        price: 50000,
        currency: "€",
        description: [
          "Visibility on all communication materials (website, brochures, banners, promotional videos).",
          "Exclusive exposure with a premium 30m² booth.",
          "Speaking opportunity in a plenary session or opening speech.",
          "20 VIP & Speaker passes.",
          "Logo on participant badges.",
          "Exclusive access to networking sessions and VIP events.",
          "Logo exposure in publications before and after the event.",
          "Gala dinner included for your guests.",
        ],
      },
      {
        name: "Gold Sponsor",
        price: 30000,
        currency: "€",
        description: [
          "Logo on all communication materials (website, brochures, displays).",
          "20m² booth in the exhibition area.",
          "Speaking opportunity in a specialized session.",
          "15 Business & Leaders passes.",
          "Exposure in the event program and promotional videos.",
          "Access to networking sessions with industry leaders.",
          "Gala dinner included for your guests.",
        ],
      },
      {
        name: "Premium Sponsor",
        price: 15000,
        currency: "€",
        description: [
          "Logo on major communication materials (website, brochures, displays).",
          "12m² booth in the exhibition area.",
          "10 Business & Leaders passes.",
          "Mention in the event program.",
          "Exposure in event banners and videos.",
          "Access to the gala dinner.",
        ],
      },
    ],
  };
  return (
    <div className="container mx-auto mt-10 p-8 ">
      <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-800">
        {title[language]}
      </h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg">
        <table className="min-w-full border-collapse bg-white text-left text-gray-700">
          <thead className="bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] text-white">
            <tr>
              <th className="p-5 text-lg font-semibold">
                {language === "fr" ? "Offre" : "Package"}
              </th>
              <th className="p-5 text-lg font-semibold">
                {language === "fr" ? "Tarif" : "Price"}
              </th>
              <th className="p-5 text-lg font-semibold">
                {language === "fr" ? "Avantages" : "Benefits"}
              </th>
            </tr>
          </thead>
          <tbody>
            {sponsors[language].map((sponsor, index) => (
              <tr
                key={index}
                className="border-b transition-all hover:bg-blue-50"
              >
                <td className="bg-gradient-to-r from-[#337dae] via-[#562196] to-[#e722ac] bg-clip-text p-5 font-bold text-transparent">
                  {sponsor.name}
                </td>
                <td className="p-5 text-xl font-semibold text-[#2c7fba]">
                  {sponsor.price.toLocaleString()} {sponsor.currency}
                </td>
                <td className="p-5">
                  <ul className="space-y-3 pl-0 md:pl-6">
                    {sponsor.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <div>
                          <IoIosCheckmarkCircle
                            size={20}
                            className="text-[#bd8ce3]"
                          />
                        </div>

                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
