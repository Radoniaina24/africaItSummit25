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
                  "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739166737/475938736_2402108826848914_91954768505517833_n_o91o5x.jpg"
                }
                alt={"logo"}
                width={1200}
                height={1200}
                className="bg-transparent opacity-60"
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
