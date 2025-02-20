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
      "Conditions & Soumission",
    ],
    en: [
      "Personal Information",
      "Choose Your Pass",
      "Billing Information",
      "Billing & Payment",
      "Order",
      "Order Summary",
      "Terms & Submission",
    ],
  };
  const { step } = useFormPassContext();
  return (
    <div className=" mx-auto max-w-c-1016 rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6">
        <p className="my-5 text-center text-lg font-semibold">
          {steps[language][step]}
        </p>
        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <motion.div
            className="h-3 rounded-full bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5]"
            initial={{ width: "0%" }}
            animate={{ width: `${((step + 1) / 6) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {step === 0 && <FormStep1 />}
      {step === 1 && <FormStep3 />}
      {step === 2 && <FormStep2 />}
      {step === 3 && <FormStep4 />}
      {step === 4 && <FormStep5 />}
      {step === 5 && <FormStep6 />}
      {/* {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Sélection du Pass</h2>
          {[
            "Standard",
            "Startup Pass",
            "Business & Leaders",
            "Exposant Pass",
            "Investor Pass",
          ].map((pass, index) => (
            <label
              key={index}
              className="block flex cursor-pointer items-center rounded-lg border p-4 shadow-md"
            >
              <input type="checkbox" className="mr-2" />
              {pass}
            </label>
          ))}
          <div className="flex justify-between space-x-4">
            <button
              onClick={() => setStep(0)}
              className="rounded bg-gray-300 px-4 py-2"
            >
              Précédent
            </button>
            <button
              onClick={() => setStep(2)}
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Suivant
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
