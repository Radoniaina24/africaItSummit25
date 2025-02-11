"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import ParticleAnimation from "@/components/Particles";
import Image from "next/image";
import React from "react";
export default function HealthDetails() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Santé Numérique & Opportunités d’Affaires à l’Africa IT Summit 2025",
    en: "Digital Health & Business Opportunities at the Africa IT Summit 2025",
  };
  const description = {
    fr: "L’Afrique est en pleine révolution numérique, et le secteur de la santé n’échappe pas à cette transformation. De la télémédecine à l’intelligence artificielle, en passant par la blockchain et les objets connectés, les innovations technologiques ouvrent un marché immense et prometteur pour les professionnels de la santé et du numérique.",
    en: "Africa is undergoing a digital revolution, and the healthcare sector is no exception to this transformation. From telemedicine to artificial intelligence, blockchain, and connected devices, technological innovations are opening up a vast and promising market for healthcare and digital professionals.",
  };
  return (
    <ParticleAnimation>
      <section className="mt-30">
        <div className="container mx-auto">
          <div className="mx-auto text-center">
            <h2 className="mx-auto mb-4 bg-gradient-to-r from-[#0796F5] via-[#D34FAC] to-[#562196] bg-clip-text  text-2xl font-bold text-transparent md:w-4/5 lg:text-4xl xl:w-1/2 xl:text-4xl">
              {title[language]}
            </h2>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
              {description[language]}
            </p>
          </div>
          <div className="  px-4 py-16">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-center">
              {/* Partie texte */}
              <div className="text-center md:w-1/2 md:text-left">
                <h2 className="mb-4 text-3xl font-bold text-[#D34FAC]">
                  L’Africa IT Summit 2025
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  L’Africa IT Summit 2025 offrira une plateforme unique aux
                  acteurs de la santé, de la technologie, des investissements et
                  de la formation pour se rencontrer, découvrir les nouvelles
                  tendances et saisir les opportunités d’un marché en pleine
                  expansion.
                </p>
              </div>

              {/* Partie image */}
              <div className="relative flex justify-center md:w-1/2">
                <Image
                  width={400}
                  height={400}
                  src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1739262906/Radoniaina_Michael_ANDRIAMBOLA_digital_health_d6dd9028-5536-4e51-818c-b8591e83457a_ydoide.png"
                  alt="Africa IT Summit 2025"
                  className="rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ParticleAnimation>
  );
}
