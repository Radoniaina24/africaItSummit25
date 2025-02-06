import Image from "next/image";
import React from "react";

export default function AboutUs() {
  const texts = [
    "Let’s start building the future of Africa’s digital revolution together",
    "Africa, the promised land of digital technology, is positioning itself as the world’s next technological hub. With its rapidly growing ecosystem and a vibrant, connected youth, the continent is ready to embrace the immense opportunities of the digital era.",
    "The Africa IT Summit 2025 will be one of the most prestigious and transformative events connecting Africa and the Indian Ocean region.",
    "This global platform will unite leaders, innovators, and investors to drive forward the continent’s digital future and foster collaboration across the region. Stay tuned for more details about this groundbreaking event. If you’re interested in participating or learning more, reach out to us today!",
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
        {/* Texte attractif */}
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
        {/* Galerie d'images */}
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
