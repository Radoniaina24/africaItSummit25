import { useLanguageContext } from "@/app/context/LanguageContext";
import React, { useState } from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import BiographyItem from "./biographyItem";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  biographyDataEn,
  biographyDataFr,
  roleDataEn,
  roleDataFr,
} from "./biographyData";
export default function Why() {
  const [activeFaq, setActiveFaq] = useState(0);
  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  const { language } = useLanguageContext();
  const biography = {
    fr: "Biographie et Expertise",
    en: "Biography and Expertise",
  };
  const role = {
    fr: "Rôle et Thématique ",
    en: "Role and Theme",
  };
  const biographyData = language === "fr" ? biographyDataFr : biographyDataEn;
  const roleData = language === "fr" ? roleDataFr : roleDataEn;
  return (
    <section className="bg-white pb-10">
      <>
        <section className="overflow-hidden ">
          <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
            <div className="absolute -bottom-16 -z-1 h-full w-full">
              <Image
                fill
                src="/images/shape/shape-dotted-light.svg"
                alt="Dotted"
                className="dark:hidden"
              />
              <Image
                fill
                src="/images/shape/shape-dotted-light.svg"
                alt="Dotted"
                className="hidden dark:block"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:flex-nowrap  xl:gap-32.5">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },

                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_right md:w-3/5 lg:w-1/2"
              >
                <div className="rounded-lg bg-white  shadow-solid-8 ">
                  <h2 className="mx-auto mb-4 bg-gradient-to-r from-[#63b6f1] via-[#a261d4] to-[#e575c5] bg-clip-text text-center text-2xl font-bold text-transparent ">
                    {biography[language]}
                  </h2>
                  {biographyData.map((faq, key) => (
                    <BiographyItem
                      key={key}
                      faqData={{ ...faq, activeFaq, handleFaqToggle }}
                    />
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },

                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_right md:w-3/5 lg:w-1/2"
              >
                <div className="rounded-lg bg-white pt-5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mx-auto mb-4 bg-gradient-to-r from-[#63b6f1] via-[#a261d4] to-[#e575c5] bg-clip-text text-center text-2xl font-bold text-transparent ">
                    {role[language]}
                  </h2>
                  {roleData.map((faq, key) => (
                    <BiographyItem
                      key={key}
                      faqData={{ ...faq, activeFaq, handleFaqToggle }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* <!-- ===== FAQ End ===== --> */}
      </>
    </section>
  );
}
