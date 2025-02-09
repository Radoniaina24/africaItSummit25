"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import HeroBanner from "@/components/HeroBanner";
import React from "react";

export default function InfoAfricaItSummit() {
  const { language } = useLanguageContext();
  const title =
    language === "fr"
      ? "Les informations officielles sur l’inscription, le lieu et la date seront communiquées à partir du 28 février 2025."
      : "The official information regarding registration, location, and date will be provided starting from February 28, 2025.";
  const subtitle =
    language === "fr"
      ? "Restez connectés et retrouvez bientôt tous les détails sur notre site officiel. Pour toute demande avant cette date, contactez-nous à contact@africaITsummit.com."
      : "Stay connected and find all the details soon on our official website. For any inquiries before this date, please contact us at contact@africaITsummit.com.";
  return (
    <div>
      <HeroBanner
        title={title}
        subtitle={subtitle}
        backgroundImage="https://res.cloudinary.com/dx3xhdaym/image/upload/v1739131089/12979579_5068893_q8kjw1.jpg"
      />
    </div>
  );
}
