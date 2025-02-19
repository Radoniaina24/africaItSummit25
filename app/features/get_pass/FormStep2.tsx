"use client";
import { useFormPassContext } from "@/app/context/FormPassContext";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
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
      setStep(2);
    },
  });
  return (
    <form
      onSubmit={billingFormik.handleSubmit}
      className="space-y-4"
      autoComplete="off"
    >
      <input
        type="text"
        name="companyName"
        placeholder={language === "fr" ? "Nom de l’entreprise" : "Company Name"}
        className="w-full rounded border p-2"
        onChange={billingFormik.handleChange}
        value={billingFormik.values.companyName}
      />
      {billingFormik.touched.companyName &&
        billingFormik.errors.companyName && (
          <p className="text-sm text-red-500">
            {billingFormik.errors.companyName}
          </p>
        )}
      <input
        type="text"
        name="billingAddress"
        placeholder={
          language === "fr" ? "Adresse de facturation" : "Billing Address"
        }
        className="w-full rounded border p-2"
        onChange={billingFormik.handleChange}
        value={billingFormik.values.billingAddress}
      />
      {billingFormik.touched.billingAddress &&
        billingFormik.errors.billingAddress && (
          <p className="text-sm text-red-500">
            {billingFormik.errors.billingAddress}
          </p>
        )}
      <input
        type="text"
        name="postalCode"
        placeholder={language === "fr" ? "Code postal" : "Postal Code"}
        className="w-full rounded border p-2"
        onChange={billingFormik.handleChange}
        value={billingFormik.values.postalCode}
      />
      {billingFormik.touched.postalCode && billingFormik.errors.postalCode && (
        <p className="text-sm text-red-500">
          {billingFormik.errors.postalCode}
        </p>
      )}
      <input
        type="text"
        name="city"
        placeholder={language === "fr" ? "Ville" : "City"}
        className="w-full rounded border p-2"
        onChange={billingFormik.handleChange}
        value={billingFormik.values.city}
      />
      {billingFormik.touched.city && billingFormik.errors.city && (
        <p className="text-sm text-red-500">{billingFormik.errors.city}</p>
      )}
      <input
        type="text"
        name="country"
        placeholder={language === "fr" ? "Pays" : "Country"}
        className="w-full rounded border p-2"
        onChange={billingFormik.handleChange}
        value={billingFormik.values.country}
      />
      {billingFormik.touched.country && billingFormik.errors.country && (
        <p className="text-sm text-red-500">{billingFormik.errors.country}</p>
      )}
      <div className="flex justify-between space-x-4">
        <button
          onClick={() => setStep(0)}
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
