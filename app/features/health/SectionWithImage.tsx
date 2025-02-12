import React, { useEffect } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/solid";
interface SectionWithImageProps {
  title: string;
  highlights: { icon?: React.ReactNode; text: string }[];
  imageSrc: string;
  imageAlt: string;
  imageOnRight?: boolean; // Définit si l'image est à droite ou à gauche
}

const SectionImageCity: React.FC<SectionWithImageProps> = ({
  title,
  highlights,
  imageSrc,
  imageAlt,
  imageOnRight = true, // Valeur par défaut : image à droite
}) => {
  return (
    <div className="mx-auto max-w-7xl space-y-16">
      <div
        className={`flex flex-col items-center md:flex-row ${
          imageOnRight ? "" : "md:flex-row-reverse"
        }`}
        data-aos="fade-up"
      >
        {/* Contenu texte */}
        <div
          className={`${
            imageOnRight ? "border-l-8" : "border-r-8"
          } border-[#E05CBB] p-6 pl-4 md:w-1/2`} // Bordure à gauche ou à droite en fonction de imageOnRight
          data-aos={imageOnRight ? "fade-right" : "fade-left"}
        >
          <h2 className="mb-4 text-xl font-bold text-[#42A9F5]  md:text-2xl">
            {title}
          </h2>
          <ul className="space-y-3 text-gray-500 ">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-center">
                <div className="mr-4">
                  {highlight.icon || (
                    <CheckCircleIcon className="h-6 w-6 text-[#7B42A6]" />
                  )}
                </div>
                <div>{highlight.text}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div
          className="md:w-1/2"
          data-aos={imageOnRight ? "fade-left" : "fade-right"}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="h-64 w-full rounded-lg object-cover shadow-lg md:h-80"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionImageCity;
