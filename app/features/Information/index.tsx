"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import HeroBanner from "@/components/HeroBanner";
import React from "react";

export default function InfoAfricaItSummit() {
  const { language } = useLanguageContext();
  const title =
    language === "fr"
      ? "Les détails du lancement officiel seront dévoilés très bientôt. Restez connectés !"
      : "The official launch details will be revealed very soon. Stay tuned!";
  const subtitle =
    language === "fr"
      ? "Restez connectés et retrouvez bientôt tous les détails sur notre site officiel. Pour toute demande avant cette date, contactez-nous à contact@africaITsummit.com."
      : "Stay connected and find all the details soon on our official website. For any inquiries before this date, please contact us at contact@africaITsummit.com.";
  return (
    <div>
      <HeroBanner
        title={title}
        subtitle={""}
        backgroundImage="https://res.cloudinary.com/dx3xhdaym/image/upload/v1739131089/12979579_5068893_q8kjw1.jpg"
        subtitleColor={"white"}
      />
    </div>
  );
}
