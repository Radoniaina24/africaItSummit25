import { PassType, useFormPassContext } from "@/app/context/FormPassContext";
import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";

export default function FormStep3() {
  const passOptions: PassType[] = [
    {
      type: "Attendee – Standard",
      priceEarly: 130,
      quantity: 1,
    },
    {
      type: "Startup Pass",
      priceEarly: 250,
      quantity: 1,
    },
    {
      type: "Attendee – Business",
      priceEarly: 450,
      quantity: 1,
    },
    {
      type: "Exposant Pass",
      priceEarly: 500,
      quantity: 1,
    },
    {
      type: "Investor Pass",
      priceEarly: 700,
      quantity: 1,
    },
    {
      type: "Dîner de Gala ",
      priceEarly: 120,
      quantity: 1,
    },
  ];
  const { language } = useLanguageContext();
  const { setStep, setFormData, formData } = useFormPassContext();
  // Vérifier si un pass est déjà sélectionné
  const isPassSelected = (passType: PassType) =>
    formData.passTypes.some((p: PassType) => p.type === passType.type);

  // Gérer la sélection des passes
  const handlePassSelection = (passType: PassType) => {
    setFormData((prevData: any) => {
      const updatedPassTypes = isPassSelected(passType)
        ? prevData.passTypes.filter((p: PassType) => p.type !== passType.type)
        : [...prevData.passTypes, passType];

      return { ...prevData, passTypes: updatedPassTypes };
    });
  };
  return (
    <section>
      <div className="space-y-4">
        {passOptions.map((pass, index) => (
          <label
            key={index}
            className="block flex cursor-pointer items-center rounded-lg border p-4 shadow-md transition hover:shadow-lg"
          >
            <input
              type="checkbox"
              checked={isPassSelected(pass)}
              onChange={() => handlePassSelection(pass)}
              className="mr-2 h-5 w-5"
            />
            <div>
              <span className="font-semibold">{pass.type}</span>
              <p className="text-sm">
                Tarif Early Bird: {pass.priceEarly} € TTC
              </p>
            </div>
          </label>
        ))}
      </div>
      <div className="mt-5 flex justify-between space-x-4">
        <button
          onClick={() => setStep(0)}
          className="rounded-full bg-gray-300  px-6 py-2 text-sm hover:bg-gray-400  hover:text-white"
        >
          {language === "fr" ? "Précédent" : "Previous"}
        </button>
        <button
          onClick={() => setStep(2)}
          type="submit"
          className="rounded-full bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] px-6 py-2 text-sm text-white hover:from-[#4486b6]  hover:via-[#8125c8] hover:to-[#f050c2]"
        >
          {language === "fr" ? "Suivant" : "Next"}
        </button>
      </div>
    </section>
  );
}
