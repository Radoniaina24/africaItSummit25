"use client";
import React from "react";
import { motion } from "framer-motion";

interface FunFactItemProps {
  value: string;
  description: string;
  delay: number;
  numberColor?: string; // Paramètre pour la couleur du nombre
  textColor?: string; // Paramètre pour la couleur du texte
}

const FunFactItem: React.FC<FunFactItemProps> = ({
  value,
  description,
  delay,
  numberColor = "text-black",
  textColor = "text-gray-700",
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay }}
    viewport={{ once: true }}
    className="animate_top text-center"
  >
    <h3
      className={`mb-2.5 text-3xl font-bold ${numberColor} xl:text-sectiontitle3`}
    >
      {value}
    </h3>
    <p className={`text-lg lg:text-para2 ${textColor}`}>{description}</p>
  </motion.div>
);

interface FunFactProps {
  textTitle?: string; // Paramètre pour la couleur du texte dans FunFact
  textSubtitle?: string;
}

const FunFact: React.FC<FunFactProps> = ({
  textTitle = "text-gray-700",
  textSubtitle = "text-white",
}) => {
  return (
    <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
      <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-br from-[#42A9F5AA] via-[#7B42A6AA] to-[#E05CBBAA] py-22.5 xl:py-27.5">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
        >
          <h2
            className={`mb-4 text-3xl font-bold ${textTitle} xl:text-sectiontitle3`}
          >
            Trusted by Global Companies.
          </h2>
          <p className={`mx-auto lg:w-11/12 ${textSubtitle}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
          <FunFactItem
            value="700K"
            description="Ciso Attendees"
            delay={0.5}
            numberColor="text-[#42A9F5AA]"
            textColor="text-white"
          />
          <FunFactItem
            value="2M+"
            description="Hackathon Entries"
            delay={0.7}
            numberColor="text-[#42A9F5AA]"
            textColor="text-white"
          />
          <FunFactItem
            value="350+"
            description="Hours Of Content"
            delay={0.8}
            numberColor="text-[#42A9F5AA]"
            textColor="text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default FunFact;
