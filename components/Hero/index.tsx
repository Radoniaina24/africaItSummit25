"use client";

import Image from "next/image";

const Hero = () => {
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
          src="https://res.cloudinary.com/dx3xhdaym/video/upload/v1738653259/Projection_Num%C3%A9rique_De_Lignes_G%C3%A9om%C3%A9triques_Abstraites_Vid%C3%A9o_gratuite_2_wmrwt9.mp4"
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
                  "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738657222/Africa_IT_Summit_Logo-blac_texte-06_xvd7my.png"
                }
                alt={"logo"}
                width={500}
                height={500}
                className="bg-transparent opacity-95"
              />
            </div>
            <div>
              <p className=" -ml-5 bg-transparent text-4xl font-extrabold text-gray-300 drop-shadow-md">
                {tech.toUpperCase()}
              </p>
            </div>
            <div className="">
              <ProfessionalDesign />
            </div>
            {/* <div>
              <Image
                src={"/images/logo/logo.png"}
                alt={"logo"}
                width={300}
                height={300}
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
const ProfessionalDesign = () => {
  const items = [
    {
      text: "Innovation",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      text: "Opportunities",
      gradient: "from-green-500 via-teal-500 to-blue-500",
    },
    {
      text: "Leadership",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex flex-wrap justify-center gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`text-md relative flex h-32 w-32 items-center justify-center rounded-full bg-transparent p-4 font-bold text-white shadow-lg md:h-40 md:w-40 md:text-xl`}
          >
            <span className="absolute left-1/2 top-1/2 z-99999 -translate-x-1/2 -translate-y-1/2 transform text-center">
              {item.text}
            </span>
            <div
              className={`absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r ${item.gradient} animate-border`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
