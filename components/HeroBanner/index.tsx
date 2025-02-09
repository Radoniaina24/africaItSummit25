import React from "react";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
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
          className=" mb-4 text-xl font-extrabold text-white md:text-4xl"
          data-aos="fade-up"
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
