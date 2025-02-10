"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import Image from "next/image";
import { ReactTyped } from "react-typed";
const imageUrls = [
  "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739180412/476955002_914623130820629_2015197730430997592_n_jirhga.jpg",
  "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739180412/475998711_507215365817725_2628791941947499079_n_qbt8t4.jpg",
  "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739180412/475925577_1142404227596527_548450239223713027_n_wbqux0.jpg",
];
export const Hero = () => {
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
          <div className="flex flex-col items-center gap-2">
            {/* Organisateur */}
            <div className="flex items-center justify-center px-4">
              <div className="mb-1 w-full md:mb-5">
                <h2 className="mb-5 text-center text-lg font-bold">
                  Organised by :
                </h2>
                <div className="flex flex-wrap justify-center gap-5">
                  {imageUrls.map((src, index) => (
                    <div
                      key={index}
                      className="flex h-[50px] w-[150px] items-center justify-center overflow-hidden rounded-lg bg-white sm:h-[50px] sm:w-[150px] md:h-[50px] md:w-[150px] lg:h-[50px] lg:w-[150px]"
                    >
                      <Image
                        src={src}
                        alt={`Image ${index + 1}`}
                        width={150}
                        height={150}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="">
              <Image
                src={
                  "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739176912/476329299_2662401750613947_1389772492083038774_n_cadvyl.jpg"
                }
                alt={"logo"}
                width={600}
                height={600}
                className="rounded-2xl bg-transparent opacity-60"
              />
            </div>
            {/* Text */}
            <div className="flex  items-center justify-center px-4">
              <div className="w-full max-w-4xl">
                <p className="mx-auto mt-10 bg-gradient-to-r from-[#0796F5] via-[#D34FAC] to-[#562196] bg-clip-text text-center text-2xl font-bold uppercase text-transparent md:text-3xl lg:text-4xl">
                  <ReactTyped
                    strings={[
                      "Let’s start building the future of Africa’s digital revolution together.",
                    ]}
                    typeSpeed={30}
                    showCursor={false}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
