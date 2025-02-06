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
      mainImage:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738837183/marvin-meyer-SYTO3xs06fU-unsplash_hmtxu7.jpg",
      title: "STARTUP PARADISE",
      metadata:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      _id: 2,
      mainImage:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738837341/microsoft-365-nhBYukjZg_I-unsplash_dqt73c.jpg",
      title: "GET BUSINESS DONE",
      metadata:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      _id: 2,
      mainImage:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1738837186/austin-distel-mpN7xjKQ_Ns-unsplash_nybgq7.jpg",
      title: "LEAD THE FUTURE.",
      metadata:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
          <p className="">{metadata}</p>
        </div>

        <div className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill />
        </div>
      </motion.div>
    </>
  );
};
