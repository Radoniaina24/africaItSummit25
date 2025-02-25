import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguageContext } from "@/app/context/LanguageContext";
const why = {
  titleFr: "Pourquoi Devenir Sponsor ou Partenaire ?",
  titleEn: "Why Become a Sponsor or Partner ? ",
  fr: [
    "Visibilité maximisée auprès des leaders du secteur, investisseurs et décideurs en Afrique.",
    "Positionnez votre marque comme un acteur clé de la transformation numérique en Afrique.",
    "Accédez à un réseau stratégique de partenaires, investisseurs et entreprises du secteur numérique.",
    "Renforcez votre image de marque à travers une exposition unique sur plusieurs plateformes.",
  ],
  en: [
    "Maximized visibility among industry leaders, investors, and decision-makers in Africa.",
    "Position your brand as a key player in the digital transformation in Africa.",
    "Gain access to a strategic network of partners, investors, and digital sector businesses.",
    "Enhance your brand image through unique exposure across multiple platforms.",
  ],
};
export default function Why() {
  const { language } = useLanguageContext();
  return (
    <div className="container mx-auto mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-800 p-8  text-white shadow-xl">
      <h2 className="mb-6 text-center text-3xl font-bold">
        {language === "fr" ? why.titleFr : why.titleEn}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {why[language].map((benefit, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 rounded-lg bg-white bg-opacity-10 p-4 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div>
              <CheckCircle className="h-6 w-6 text-yellow-400" />
            </div>
            <p className="text-lg">{benefit}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
