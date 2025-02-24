"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import React, { useState } from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import { motion } from "framer-motion";
import { ConditionsVenteEn, ConditionsVenteFr } from "./conditionData";
import ConditionItem from "./conditionItem";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
export default function Condition() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Conditions Générales de Vente – Africa IT Summit 2025",
    en: "General Terms and Conditions of Sale – Africa IT Summit 2025",
  };
  const description = {
    fr: "Les présentes Conditions Générales de Vente (CGV) régissent les transactions relatives à l’inscription et à l’achat de pass pour l’Africa IT Summit 2025 (ci-après désigné “l’événement”). En vous inscrivant à l’événement, vous acceptez sans réserve les conditions suivantes.",
    en: "These General Terms and Conditions of Sale (GTC) govern transactions related to the registration and purchase of passes for the Africa IT Summit 2025 (hereinafter referred to as 'the event'). By registering for the event, you unreservedly accept the following terms and conditions.",
  };
  const [activeFaq, setActiveFaq] = useState(0);
  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };
  const conditionData =
    language === "fr" ? ConditionsVenteFr : ConditionsVenteEn;
  return (
    <section className=" bg-white pt-10">
      <SectionHeader
        headerInfo={{
          title: "",
          subtitle: title[language],
          description: description[language],
        }}
        subtitleColor={["#D34FAC", "#0796F5", "#562196"]}
        descriptionColor="gray"
      />
      <div className="relative mx-auto mt-10 max-w-c-1235 px-4 md:px-8 xl:px-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1  gap-2 md:grid-cols-2"
        >
          {conditionData.map((faq, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              <div className="  bg-white  shadow-solid-8">
                <ConditionItem
                  faqData={{ ...faq, activeFaq, handleFaqToggle }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
