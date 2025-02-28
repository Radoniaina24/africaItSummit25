import React from "react";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  subtitleColor?: string | [string, string, string];
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  subtitleColor = "#000",
}) => {
  // Détection de dégradé ou couleur simple pour le sous-titre
  const getSubtitleStyle = () => {
    if (Array.isArray(subtitleColor) && subtitleColor.length === 3) {
      return {
        background: `linear-gradient(to right, ${subtitleColor[0]}, ${subtitleColor[1]}, ${subtitleColor[2]})`,
        WebkitBackgroundClip: "text",
        color: "transparent",
      };
    }
    return { color: subtitleColor };
  };
  return (
    <div
      className="relative bg-cover bg-fixed bg-center px-6 py-16 text-white"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        {/* Titre principal */}
        <h2
          className=" mx-auto mb-4 max-w-lg text-xl font-extrabold text-white md:text-2xl"
          data-aos="fade-up"
          style={getSubtitleStyle()}
        >
          {title}
        </h2>

        {/* Sous-titre */}
        <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed md:text-xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
