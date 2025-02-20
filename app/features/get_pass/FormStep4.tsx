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
    cardNumber: formData.cardNumber as string,
    expirationDate: formData.expirationDate as string,
    cvv: formData.cvv as string,
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
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
    </form>
  );
}
