"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Blog = async () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 770 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 770, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="bg-gradient-to-br from-[#42A9F5] via-[#7B42A6] to-[#E05CBB] py-10 lg:py-10 xl:py-10">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            descriptionColor="white"
            headerInfo={{
              title: ``,
              subtitle: `Latest News & Blogs`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        {/* <div className="lg:grid-cols- grid grid-cols-1 gap-7.5 md:grid-cols-4 xl:gap-10">
          {BlogData.slice(0, 4).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div> */}

        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={1000} // Contrôle la vitesse du défilement, 1000ms est plus rapide
          transitionDuration={1000} // Transition fluide, moins de temps entre chaque changement
          responsive={responsive}
          itemClass="px-3"
          arrows={false} // Désactive les flèches pour ne pas interrompre le défilement
          swipeable={false} // Désactive le glissement manuel, assurant un défilement automatique fluide
          focusOnSelect={false} // Empêche le focus sur les éléments lors du défilement
          dotListClass="custom-dot-list-style" // Personnalisation des indicateurs de pagination (optionnel)
        >
          {BlogData.map((blog, key) => (
            <BlogItem textColor="white" blog={blog} key={key} />
          ))}
        </Carousel>

        {/* See All Articles Button */}
        <div className="mt-5 flex justify-end">
          {/* <Link
            href="/blog" // Mettez ici le lien vers la page où tous les articles sont listés
            className="border-1 inline-flex items-center gap-2 rounded-full  bg-purple-400 px-4 py-1.5 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <span>See all articles</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0C6.44772 0 6 0.447715 6 1V6H1C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8H6V13C6 13.5523 6.44772 14 7 14C7.55228 14 8 13.5523 8 13V8H13C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6H8V1C8 0.447715 7.55228 0 7 0Z"
                fill="currentColor"
              />
            </svg>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
