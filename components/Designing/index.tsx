"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Designin() {
  const data = [
    {
      _id: 1,
      mainImage: "/images/blog/blog-01.png",
      title: "Free advertising",
      metadata:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers",
    },
    {
      _id: 2,
      mainImage: "/images/blog/blog-02.png",
      title: "9 simple ways to ",
      metadata:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers",
    },
    {
      _id: 2,
      mainImage: "/images/blog/blog-03.png",
      title: "Tips to quickly .",
      metadata:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers",
    },
  ];
  return (
    <section className="py-20 lg:py-10 xl:py-10">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: ``,
              subtitle: `Designing the Future of Tech`,
              description: ``,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      <div className="mx-auto mt-10 max-w-c-1280 px-4 md:px-8 xl:mt-15 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {data.map((design, key) => (
            <DesignItem data={design} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}

const DesignItem = ({ data }) => {
  const { mainImage, title, metadata } = data;
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top mt-7.5 flex flex-col gap-5  p-4 pb-9 shadow-solid-8 "
      >
        <div className="">
          <h3 className=" line-clamp-2 inline-block text-lg font-bold uppercase text-black duration-300 hover:text-primary   xl:text-itemtitle2">
            {title}
          </h3>
        </div>
        <div className="mb-3.5">
          <p className=" line-clamp-3">{metadata}</p>
        </div>

        <div className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill />
        </div>
      </motion.div>
    </>
  );
};
