"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFormPassContext } from "@/app/context/FormPassContext";
import { useLanguageContext } from "@/app/context/LanguageContext";

import InputFormik from "./Componnents/InputFormik";
export default function FormStep4() {
  const { language } = useLanguageContext();
  const { setStep, setFormData, step, formData } = useFormPassContext();
  const initialvalues = {
    cardType: formData.cardType as string,
    cardNumber: formData.cardNumber as string,
    expirationDate: formData.expirationDate as string,
    cvv: formData.cvv as string,
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      cardType: Yup.string().required(
        language === "fr"
          ? "Veuillez sélectionner une carte bancaire"
          : "Please select a payment card.",
      ),
      cardNumber: Yup.string().required(
        language === "fr"
          ? "Le numéro de la carte est requis"
          : "Card Number is required",
      ),
      expirationDate: Yup.string().required(
        language === "fr"
          ? "La date d'éxpiration est requis"
          : "Expiration Date is required",
      ),
      cvv: Yup.string().required(
        language === "fr"
          ? "La code de sécurité (CVV)   est requis"
          : "Security Code (CVV) is required",
      ),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      setFormData((prev) => ({ ...prev, ...values }));
      setStep(4);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4"
      autoComplete="off"
    >
      <h2
        className={`text-md mb-0  ${
          formik.touched.cardType && formik.errors.cardType
            ? "text-red-500"
            : "text-black"
        } `}
      >
        {language === "fr" ? "Carte bancaire" : "Bank card"}
      </h2>
      <div className="space-y-2">
        {["Visa", "MasterCard", "Autres cartes bancaires internationales"].map(
          (option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center space-x-2 rounded-lg border p-2 text-sm  hover:bg-gray-100"
            >
              <input
                type="radio"
                name="cardType"
                value={option}
                checked={formik.values.cardType === option}
                onChange={formik.handleChange}
                className="accent-blue-600"
              />
              <span>{option}</span>
            </label>
          ),
        )}
      </div>
      {formik.touched.cardType && formik.errors.cardType && (
        <p className="mt-2 text-sm text-red-500">{formik.errors.cardType}</p>
      )}
      <InputFormik
        label={language === "fr" ? "Numéro de la carte" : "Card Number"}
        type="text"
        id="cardNumber"
        // placeholder={language === "fr" ? "Numéro de la carte" : "Card Number"}
        value={formik.values.cardNumber}
        onChange={formik.handleChange}
        error={formik.errors.cardNumber}
        touched={formik.touched.cardNumber}
      />
      <InputFormik
        label={language === "fr" ? "Date d’expiration" : "Expiration Date"}
        type="text"
        id="expirationDate"
        // placeholder="Email"
        value={formik.values.expirationDate}
        onChange={formik.handleChange}
        error={formik.errors.expirationDate}
        touched={formik.touched.expirationDate}
      />
      <InputFormik
        label={
          language === "fr" ? "Code de sécurité (CVV) " : "Security Code (CVV)"
        }
        type="text"
        id="cvv"
        // placeholder={language === "fr" ? "Numéro de téléphone" : "Phone number"}
        value={formik.values.cvv}
        onChange={formik.handleChange}
        error={formik.errors.cvv}
        touched={formik.touched.cvv}
      />
      <div className="mt-5 flex justify-between space-x-4">
        <button
          onClick={() => setStep(2)}
          className="rounded-full bg-gray-300  px-6 py-2 text-sm hover:bg-gray-400  hover:text-white"
        >
          {language === "fr" ? "Précédent" : "Previous"}
        </button>
        <button
          type="submit"
          className="rounded-full bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] px-6 py-2 text-sm text-white hover:from-[#4486b6]  hover:via-[#8125c8] hover:to-[#f050c2]"
        >
          {language === "fr" ? "Suivant" : "Next"}
        </button>
      </div>
    </form>
  );
}
