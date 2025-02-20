"use client";
import { useFormPassContext } from "@/app/context/FormPassContext";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import InputFormik from "./Componnents/InputFormik";
export default function FormStep2() {
  const { language } = useLanguageContext();
  const { setStep, setFormData, formData } = useFormPassContext();
  const billingFormik = useFormik({
    initialValues: {
      companyName: formData.companyName as string,
      billingAddress: formData.billingAddress as string,
      postalCode: formData.postalCode as string,
      city: formData.city as string,
      country: formData.country as string,
    },
    validationSchema: Yup.object({
      billingAddress: Yup.string().required(
        language === "fr"
          ? "L'adresse de facturation est requise"
          : "The billing address is required.",
      ),
      postalCode: Yup.string().required(
        language === "fr"
          ? "Le code postal est requis"
          : "The postal code is required.",
      ),
      city: Yup.string().required(
        language === "fr" ? "La ville est requise" : "The city is required.",
      ),
      country: Yup.string().required(
        language === "fr" ? "Le pays est requis" : "The country is required.",
      ),
    }),
    onSubmit: (values) => {
      setFormData((prev) => ({ ...prev, ...values }));
      setStep(3);
    },
  });
  return (
    <form
      onSubmit={billingFormik.handleSubmit}
      className="space-y-4"
      autoComplete="off"
    >
      <InputFormik
        label={language === "fr" ? "Nom de l’entreprise" : "Company Name"}
        type="text"
        id="companyName"
        placeholder={language === "fr" ? "Nom de l’entreprise" : "Company Name"}
        value={billingFormik.values.companyName}
        onChange={billingFormik.handleChange}
        error={billingFormik.errors.companyName}
        touched={billingFormik.touched.companyName}
      />
      <InputFormik
        label={language === "fr" ? "Adresse de facturation" : "Billing Address"}
        type="text"
        id="billingAddress"
        placeholder={
          language === "fr" ? "Adresse de facturation" : "Billing Address"
        }
        value={billingFormik.values.billingAddress}
        onChange={billingFormik.handleChange}
        error={billingFormik.errors.billingAddress}
        touched={billingFormik.touched.billingAddress}
      />

      <InputFormik
        label={language === "fr" ? "Code postal" : "Postal Code"}
        type="text"
        id="postalCode"
        placeholder={language === "fr" ? "Code postal" : "Postal Code"}
        value={billingFormik.values.postalCode}
        onChange={billingFormik.handleChange}
        error={billingFormik.errors.postalCode}
        touched={billingFormik.touched.postalCode}
      />

      <InputFormik
        label={language === "fr" ? "Ville" : "City"}
        type="text"
        id="city"
        placeholder={language === "fr" ? "Ville" : "City"}
        value={billingFormik.values.city}
        onChange={billingFormik.handleChange}
        error={billingFormik.errors.city}
        touched={billingFormik.touched.city}
      />
      <InputFormik
        label={language === "fr" ? "Pays" : "Country"}
        type="text"
        id="country"
        placeholder={language === "fr" ? "Pays" : "Country"}
        value={billingFormik.values.country}
        onChange={billingFormik.handleChange}
        error={billingFormik.errors.country}
        touched={billingFormik.touched.country}
      />
      <div className="flex justify-between space-x-4">
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
    </form>
  );
}
