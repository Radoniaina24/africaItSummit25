import React from "react";

type VisionProps = {
  lang: "fr" | "en";
};

const VisionSection: React.FC<VisionProps> = ({ lang }) => {
  return (
    <section className="container mx-auto ">
      <div className=" flex  flex-col items-center justify-between space-y-6 rounded-xl  p-8  md:flex-row md:space-x-8 md:space-y-0">
        {/* Image à droite */}
        <div className="flex justify-center md:w-1/2" data-aos="fade-up">
          <img
            src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1739811714/2151250286_q5hsje.jpg" // Remplace par ton image
            alt="Vision"
            className="w-full max-w-lg rounded-lg shadow-md"
          />
        </div>
        {/* Texte à gauche */}
        <div className="text-center md:w-1/2 md:text-left" data-aos="fade-down">
          {/* Titre avec ligne décorative */}
          <div className="relative mb-4">
            <h2 className="bg-gradient-to-r from-[#0796F5]  via-[#D34FAC] to-[#562196] bg-clip-text text-3xl font-bold text-transparent">
              {lang === "fr" ? "Notre Vision" : "Our Vision"}
            </h2>
            <div className="mt-2 h-1 w-16 bg-blue-600"></div>
          </div>

          {/* Texte de la vision */}
          <p className="text-lg leading-relaxed text-gray-700">
            {lang === "fr"
              ? "Notre ambition est de faire de l’Afrique un leader incontournable de l’économie numérique mondiale en misant sur l’innovation disruptive, l’expansion de la connectivité et un développement durable et inclusif. En favorisant les synergies entre les acteurs technologiques, nous créons un écosystème dynamique propice à la croissance et à l’impact à grande échelle."
              : "Our ambition is to position Africa as a leading force in the global digital economy by driving disruptive innovation, expanding connectivity, and fostering inclusive and sustainable development. By facilitating synergies among key technology players, we are building a dynamic ecosystem that fuels growth and large-scale impact."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
