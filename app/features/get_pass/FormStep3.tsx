import { useFormPassContext } from "@/app/context/FormPassContext";
import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";

export default function FormStep3() {
  const { language } = useLanguageContext();
  const { setStep, setFormData, formData } = useFormPassContext();
  const handlePassSelection = (passType: string) => {
    setFormData((prevData) => {
      const updatedPassTypes = prevData.passTypes.includes(passType)
        ? prevData.passTypes.filter((p) => p !== passType)
        : [...prevData.passTypes, passType];
      return { ...prevData, passTypes: updatedPassTypes };
    });
  };
  return (
    <section>
      <div className="space-y-4">
        {[
          {
            type: "Attendee – Standard",
            priceEarly: 130,
            priceNormal: 150,
          },
          {
            type: "Startup Pass",
            priceEarly: 250,
            priceNormal: 350,
          },
          {
            type: "Attendee – Business & Leaders",
            priceEarly: 450,
            priceNormal: 550,
          },
          {
            type: "Exposant Pass",
            priceEarly: 500,
            priceNormal: 700,
          },
          {
            type: "Investor Pass",
            priceEarly: 700,
            priceNormal: 900,
          },
          {
            type: "Dîner de Gala & Remise des Trophées Africa IT Summit",
            priceEarly: 120,
            priceNormal: 150,
          },
        ].map((pass, index) => (
          <label
            key={index}
            className="block flex cursor-pointer items-center rounded-lg border p-4 shadow-md transition hover:shadow-lg"
          >
            <input
              type="checkbox"
              checked={formData.passTypes.includes(pass.type)}
              onChange={() => handlePassSelection(pass.type)}
              className="mr-2 h-5 w-5"
            />
            <div>
              <span className="font-semibold">{pass.type}</span>
              <p className="text-sm">
                Tarif Normal:{" "}
                <span className="line-through">{pass.priceNormal} € TTC</span>{" "}
              </p>
              <p className="text-sm">
                Tarif Early Bird: {pass.priceEarly} € TTC
              </p>
            </div>
          </label>
        ))}
      </div>
      <div className="mt-5 flex justify-between space-x-4">
        <button
          onClick={() => setStep(1)}
          className="rounded bg-gray-300 px-4 py-2"
        >
          {language === "fr" ? "Précédent" : "Previous"}
        </button>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          {language === "fr" ? "Suivant" : "Next"}
        </button>
      </div>
    </section>
  );
}
