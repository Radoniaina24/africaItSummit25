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
  ["image.jpg", "image-1.jpg", "image-2.jpg"],
  ["image-3.jpg", "image-4.jpg", "image-5.jpg"],
  ["image-6.jpg", "image-7.jpg", "image-8.jpg"],
  ["image-9.jpg", "image-10.jpg", "image-11.jpg"],
];

const MasonryGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {images.map((column, colIndex) => (
        <div key={colIndex} className="grid gap-4">
          {column.map((img, imgIndex) => (
            <img
              key={imgIndex}
              className="h-auto max-w-full rounded-lg"
              src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/${img}`}
              alt="Gallery Image"
            />
          ))}
        </div>
      ))}
    </div>
  );
};
