"use client";
import { useFormPassContext } from "@/app/context/FormPassContext";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import InputFormik from "./Componnents/InputFormik";
import InputCountry from "./Componnents/InputCountry";
import InputCity from "./Componnents/InputCity";
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
      <InputCountry
        label={language === "fr" ? "Pays" : "Country"}
        id="country"
        placeholder={language === "fr" ? "Pays" : "Country"}
        value={billingFormik.values.country}
        onChange={billingFormik.setFieldValue}
        error={billingFormik.errors.country}
        touched={billingFormik.touched.country}
      />
      <InputCity
        label={language === "fr" ? "Ville" : "City"}
        id="city"
        placeholder={language === "fr" ? "Ville" : "City"}
        value={billingFormik.values.city}
        onChange={billingFormik.setFieldValue}
        error={billingFormik.errors.city}
        touched={billingFormik.touched.city}
        country={billingFormik.values.country}
      />

      <div className="flex justify-between space-x-4">
        <button
          onClick={() => setStep(1)}
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
