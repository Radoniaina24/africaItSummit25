"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import FrameDecoration from "@/components/Framedecoration/Framedecoration";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import MultiStepFormPass from "./FromPass";
import { FormPassProvider } from "@/app/context/FormPassContext";
import Pass from "./Pass";
import Condition from "./Condition";

export default function GetYourPass() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Tarifs & Avantages des Pass  Africa IT Summit 2025",
    en: "Pricing & Benefits of Passes  Africa IT Summit 2025",
  };
  const description = {
    fr: "L’Africa IT Summit propose des pass accessibles et adaptés à chaque profil, que vous soyez étudiant, startup innovante, investisseur ou entrepreneur en quête de partenariats.",
    en: "The Africa IT Summit offers accessible and tailored passes for every profile, whether you are a student, an innovative startup, an investor, or an entrepreneur seeking partnerships.",
  };

  const titleForm = {
    fr: "Formulaire d’Inscription et Achat de Pass – Africa IT Summit 2025",
    en: "Registration and Pass Purchase Form – Africa IT Summit 2025",
  };
  const descriptionForm = {
    fr: "Remarque importante :Le paiement pour l’achat des pass se fait exclusivement par carte bancaire (Visa, MasterCard, ou autre paiement bancaire international).",
    en: "Important Notice: Payment for pass purchases is exclusively made via bank card (Visa, MasterCard, or any other internationally accepted bank payment method)",
  };

  return (
    <section className="bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5]">
      {/* Title and description */}
      <div className="relative flex items-center justify-center bg-gradient-to-br from-[#63b6f1]  via-[#a261d4] to-[#e575c5] py-36 sm:h-[300px] lg:h-[400px] xl:h-[600px]">
        <SectionHeader
          headerInfo={{
            title: "",
            subtitle: title[language],
            description: description[language],
          }}
          subtitleColor={["#0796F5", "#562196", "#a261d4"]}
          // subtitleColor={"white"}
          descriptionColor="white"
        />
        <div className="absolute bottom-0 w-full">
          <FrameDecoration />
        </div>
      </div>
      <Condition />
      <Pass />
      <FormPassProvider>
        <section className="h-screen bg-white">
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: titleForm[language],
              description: descriptionForm[language],
            }}
            subtitleColor={["#D34FAC", "#0796F5", "#562196"]}
            descriptionColor="gray"
          />
          <MultiStepFormPass />
        </section>
      </FormPassProvider>
    </section>
  );
}
