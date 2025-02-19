"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { PassItem } from "./PassItem";
import { passData } from "./passData";

// TabItem component to reduce repetitive code
const TabItem = ({ id, label, activeTab, setActiveTab, index }: any) => {
  return (
    <div
      onClick={() => setActiveTab(id)}
      className={`relative flex w-full cursor-pointer items-center justify-center gap-1 border-b border-stroke  px-2 py-2 last:border-0 md:w-auto md:border-0 md:py-5 lg:px-5 xl:px-5 xl:py-5 ${
        activeTab === id
          ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-gradient-to-r before:from-[#D34FAC] before:to-[#3E7DFF]"
          : ""
      }`}
    >
      <div className="md:w-3/2 lg:w-auto">
        <button className="text-sm font-medium text-black md:text-regular xl:text-regular">
          {label}
        </button>
      </div>
    </div>
  );
};

const Pass = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");
  const { language } = useLanguageContext();
  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative bg-white pb-20 pt-18.5 lg:pb-22.5">
        <div className="relative   px-4 md:px-8 2xl:px-0">
          {/* Tab Menues Start */}
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
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-15 flex max-w-5xl flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5   md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-1"
          >
            {passData[language].map((feature, index) => (
              <TabItem
                key={feature.id}
                id={feature.id}
                label={feature.label}
                activeTab={currentTab}
                setActiveTab={setCurrentTab}
                index={index + 1} // Adds 1 to make the index start from 1
              />
            ))}
          </motion.div>
          {/* Tab Menues End */}

          {/* Tab Content Start */}
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
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1016"
          >
            {passData[language].map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <PassItem pass={feature} />
              </div>
            ))}
          </motion.div>
          {/* Tab Content End */}
        </div>
      </section>
      {/* ===== Features Tab End ===== */}
    </>
  );
};

export default Pass;
