import React from "react";

type EventProps = {
  lang: "fr" | "en";
};

const EventSection: React.FC<EventProps> = ({ lang }) => {
  return (
    <section className="container mx-auto ">
      <div className=" flex  flex-col items-center justify-between space-y-6 rounded-xl  p-8  md:flex-row md:space-x-8 md:space-y-0">
        {/* Texte à gauche */}
        <div className="text-center md:w-1/2 md:text-left" data-aos="fade-down">
          {/* Titre avec ligne décorative */}
          <div className="relative mb-4">
            <h2 className="bg-gradient-to-r from-[#0796F5]  via-[#D34FAC] to-[#562196] bg-clip-text text-3xl font-bold text-transparent">
              {lang === "fr" ? "Un Événement Stratégique" : "A Strategic Event"}
            </h2>
            <div className="mt-2 h-1 w-16 bg-blue-600"></div>
          </div>

          {/* Texte de l'evenement */}
          <p className="text-lg leading-relaxed text-gray-700">
            {lang === "fr"
              ? "Chaque année, l’Africa IT Summit offre une plateforme unique pour explorer les tendances émergentes, échanger avec des experts de renom et découvrir les innovations technologiques qui façonneront l’avenir du numérique en Afrique. C’est une occasion exceptionnelle de nouer des partenariats stratégiques, d’accéder à des opportunités d’investissement et de dynamiser la transformation digitale à grande échelle."
              : "Each year, the Africa IT Summit provides a unique platform to explore emerging trends, engage with renowned experts, and discover cutting-edge innovations shaping the future of digital transformation in Africa. It is an unparalleled opportunity to forge strategic partnerships, access investment opportunities, and drive large-scale digital advancement."}
          </p>
        </div>
        {/* Image à droite */}
        <div className="flex justify-center md:w-1/2" data-aos="fade-up">
          <img
            src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1739813905/2147679095_x9udy4.jpg" // Remplace par ton image
            alt="event"
            className="w-full max-w-lg rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default EventSection;
