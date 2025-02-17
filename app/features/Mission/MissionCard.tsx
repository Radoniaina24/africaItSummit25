import React from "react";
import missionData from "./missionData";

type MissionCardProps = {
  lang: "fr" | "en";
};

const MissionCards: React.FC<MissionCardProps> = ({ lang }) => {
  return (
    <section className="container mx-auto py-10">
      <div className="p-6 ">
        {/* Titre principal */}
        <div className="relative mb-4" data-aos="fade-zoom-out">
          <h2 className="bg-gradient-to-r from-[#0796F5]  via-[#D34FAC] to-[#562196] bg-clip-text text-3xl font-bold text-transparent">
            {lang === "fr" ? "Notre Mission" : "Our Mission"}
          </h2>
          <div className="mt-2 h-1 w-16 bg-blue-600"></div>
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {missionData[lang].map((item, index) => (
            <div
              data-aos="fade-zoom-in"
              key={index}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition duration-300 hover:shadow-xl"
            >
              {/* Titre et icône */}
              <div className="flex items-center space-x-3">
                <span className="text-3xl text-blue-600">{item.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>

              {/* Description encadrée */}
              <div className="mt-4 rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4">
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionCards;
