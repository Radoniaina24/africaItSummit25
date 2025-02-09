"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  const tech = "technology";
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dx3xhdaym/video/upload/v1738653263/3129595-hd_1920_1080_30fps_pzyb2d.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-white">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <div className="">
              <Image
                src={
                  "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738935960/FOREIGNArtboard_2_300x-8_boi3aj.png"
                }
                alt={"logo"}
                width={1200}
                height={1200}
                className="bg-transparent opacity-95"
              />
            </div>
            {/* <div>
              <p className=" -ml-5 bg-transparent text-4xl font-extrabold text-gray-300 drop-shadow-md">
                {tech.toUpperCase()}
              </p>
            </div> */}

            <div>{/* <ProfessionalDesign /> */}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProfessionalDesign = () => {
  const items = [
    {
      text: "Santé numérique",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      text: "Cinématographie et Audiovisuel",
      gradient: "from-green-500 via-teal-500 to-blue-500",
    },
    {
      text: "Intelligence Artificielle et Automatisation",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
    },
    {
      text: "Développement Web et Mobile",
      gradient: "from-indigo-500 via-blue-500 to-teal-500",
    },
    {
      text: "Cybersécurité et Protection des Données",
      gradient: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
      text: "Fintech et Inclusion Financière",
      gradient: "from-teal-500 via-blue-500 to-indigo-500",
    },
    {
      text: "Villes Intelligentes et Infrastructures Connectées",
      gradient: "from-purple-500 via-pink-500 to-indigo-500",
    },
    {
      text: "Technologies Numériques Durables",
      gradient: "from-green-600 via-green-400 to-green-200",
    },
  ];

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden ">
      {/* Planète Terre animée en grand format */}
      <motion.div
        // animate={{ rotate: 360 }}
        // transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute z-10 flex h-[50vw] max-h-[500px] 
                   w-[50vw] max-w-[500px] items-center justify-center 
                   md:h-[40vw] md:max-h-[600px] md:w-[40vw] md:max-w-[600px]"
      >
        <Image
          src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1738935304/Untitled-6_u9du1q.png"
          alt="Planète Terre"
          width={400}
          height={400}
          className="drop-shadow-lg"
        />
      </motion.div>

      {/* Thèmes en cercle autour de la planète */}
      <div className="relative flex h-full w-full items-center justify-center">
        {items.map((item, index) => {
          // Ajuster le rayon en fonction de l'écran
          const isMobile =
            typeof window !== "undefined" && window.innerWidth < 768;
          const radius = isMobile ? 180 : 320; // Plus petit rayon sur mobile
          const angle = (index / items.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              className="absolute flex h-28 w-28 
                         transform items-center justify-center text-center
                         font-bold text-white shadow-xl
                         transition-transform hover:scale-110 md:h-40 md:w-40 lg:h-40 lg:w-40"
              style={{
                top: `calc(50% + ${y}px - 50px)`,
                left: `calc(50% + ${x}px - 50px)`,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="z-10 text-xs md:text-sm lg:text-base">
                {item.text}
              </span>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl`}
              ></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
