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
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Image
                src={
                  "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738657222/Africa_IT_Summit_Logo-blac_texte-06_xvd7my.png"
                }
                alt={"logo"}
                width={300}
                height={300}
                className="bg-transparent opacity-95"
              />

              <p className=" -ml-17 bg-transparent text-4xl font-extrabold text-gray-300 drop-shadow-md">
                {tech.toUpperCase()}
              </p>
            </div>
            {/* <div>
              <Image
                src={"/images/logo/logo.png"}
                alt={"logo"}
                width={250}
                height={250}
              />
            </div> */}
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
