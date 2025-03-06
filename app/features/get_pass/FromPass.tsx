"use client";
import { motion } from "framer-motion";
import FormStep1 from "./FormStep1";
import { useFormPassContext } from "@/app/context/FormPassContext";
import FormStep2 from "./FormStep2";
import { useLanguageContext } from "@/app/context/LanguageContext";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStep5 from "./FormStep5";
import FormStep6 from "./Componnents/FormStep6";
import FormPayment from "./Componnents/FormPayment";

export default function MultiStepForm() {
  const { language } = useLanguageContext();

  const steps = {
    fr: [
      "Informations Personnelles",
      "Choisissez votre Pass",
      "Informations de Facturation",
      "Facturation & Paiement",
      "Commande",
      "Résumé de la Commande",
      "Payement",
    ],
    en: [
      "Personal Information",
      "Choose Your Pass",
      "Billing Information",
      "Billing & Payment",
      "Order",
      "Order Summary",
      "Payment",
    ],
  };
  const { step } = useFormPassContext();
  return (
    <div className=" mx-auto max-w-c-1016 rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6">
        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <motion.div
            className="h-3 rounded-full bg-gradient-to-br  from-[#4486b6]  via-[#8125c8] to-[#f050c2]"
            initial={{ width: "0%" }}
            animate={{ width: `${((step + 1) / 7) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="my-5 text-center text-xl font-bold  text-primary">
          {steps[language][step]}
        </p>
      </div>
      {step === 0 && <FormStep1 />}
      {step === 1 && <FormStep3 />}
      {step === 2 && <FormStep2 />}
      {step === 3 && <FormStep4 />}
      {step === 4 && <FormStep5 />}
      {step === 5 && <FormStep6 />}
      {step === 6 && <FormPayment />}
    </div>
  );
}
