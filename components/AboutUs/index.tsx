"use client";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  const texts = [
    "L’Afrique est la terre promise de l’IT ! Avec une adoption fulgurante des technologies, une jeunesse hyperconnectée et des investissements records dans le numérique, le continent est en pleine révolution technologique.",
    "Le plus grand événement panafricain dédié aux technologies de l’information se tiendra à l’île Maurice !L’Africa IT Summit 2025 réunira les leaders de l’innovation, les plus grandes entreprises du numérique, les startups les plus prometteuses et les investisseurs visionnaires pour façonner ensemble l’avenir digital du continent.",
    "Un événement à ne pas manquer : keynotes percutantes, expositions de technologies de pointe, opportunités de business et networking de haut niveau. L’Afrique numérique se construit maintenant – soyez au cœur de cette transformation !",
    "Building the Future of Africa’s Digital Revolution Together",
  ];

  return (
    <section className="relative py-12">
      {/* <div className="absolute  left-0 z-[-1] h-full w-full   bg-[url(https://res.cloudinary.com/dx3xhdaym/image/upload/v1738915501/Patern-2_uqkum8.png)] bg-no-repeat"></div> */}
      <div className="container relative mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Africa IT Summit
          </h2>
          {texts.map((item, index) => (
            <p key={index} className="mb-4 text-gray-600">
              {item}
            </p>
          ))}
        </div>
        <MasonryGrid />
      </div>
    </section>
  );
}

const images = [
  [
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738812347/13311391_v617-bb-04-technology_vqi0n4.jpg",

    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738810941/mathew-schwartz-c5sTal8LQyo-unsplash_acia6w.jpg",
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738811786/dose-media-DiTiYQx0mh4-unsplash_me7zto.jpg",
  ],
  [
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738810181/pexels-pixabay-257699_j7vmuw.jpg",
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738759222/129790_djgsuw.jpg",
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738811305/florian-olivo-diN3KIGHcO8-unsplash_bgdeaf.jpg",
  ],
  [
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738809914/pexels-kindelmedia-8566474_vjstdp.jpg",
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738812020/2150041867_baabzu.jpg",
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738810955/possessed-photography-YKW0JjP7rlU-unsplash_bgencj.jpg",
  ],
  [
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738809913/pexels-alxs-919734_sdbpbs.jpg",
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738810584/uriel-soberanes-MxVkWPiJALs-unsplash_hrq2ho.jpg",
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738809918/pexels-hyundaimotorgroup-19319639_yqjhjy.jpg",
  ],
];

const MasonryGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {images.map((column, colIndex) => (
        <div key={colIndex} className="grid gap-4">
          {column.map((img, imgIndex) => (
            <Image
              key={imgIndex}
              width={500}
              height={500}
              className="rounded-lg"
              src={img}
              alt="Gallery Image"
            />
          ))}
        </div>
      ))}
    </div>
  );
};
