"use client";
import { motion } from "framer-motion";
import FormStep1 from "./FormStep1";
import { useFormPassContext } from "@/app/context/FormPassContext";
import FormStep2 from "./FormStep2";
import { useLanguageContext } from "@/app/context/LanguageContext";
import FormStep3 from "./FormStep3";

export default function MultiStepForm() {
  const { language } = useLanguageContext();

  const steps = {
    fr: [
      "Informations Personnelles",

      "Informations de Facturation",
      "Choisissez votre Pass",
      "Facturation & Paiement",
      "Résumé de la Commande",
      "Conditions & Soumission",
    ],
    en: [
      "Personal Information",
      "Billing Information",
      "Choose Your Pass",
      "Billing & Payment",
      "Order Summary",
      "Terms & Submission",
    ],
  };
  const { step, setStep } = useFormPassContext();
  return (
    <div className=" mx-auto max-w-c-1016 rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6">
        <p className="my-5 text-center text-lg font-semibold">
          {steps[language][step]}
        </p>
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <motion.div
            className="h-2 rounded-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((step + 1) / 4) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {step === 0 && <FormStep1 />}
      {step === 1 && <FormStep2 />}
      {step === 2 && <FormStep3 />}
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
