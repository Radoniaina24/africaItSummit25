"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  const tech = "technology";
  const texte =
    "Let’s start building the future of Africa’s digital revolution together.";
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
                  "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739173274/476430444_1721693348767771_2325540913444564809_n_pvbsfp.jpg"
                }
                alt={"logo"}
                width={600}
                height={600}
                className="bg-transparent opacity-60"
              />
            </div>
            {/* <div>
              <p className=" -ml-5 bg-transparent text-4xl font-extrabold text-gray-300 drop-shadow-md">
                {tech.toUpperCase()}
              </p>
            </div> */}

            <div className="max-xl: container mx-auto mt-10 text-center text-4xl font-bold uppercase">
              {texte}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
