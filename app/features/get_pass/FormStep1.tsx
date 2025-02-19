"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFormPassContext } from "@/app/context/FormPassContext";
import { useLanguageContext } from "@/app/context/LanguageContext";
export default function FormStep1() {
  const { language } = useLanguageContext();
  const { setStep, setFormData, step, formData } = useFormPassContext();
  const initialvalues = {
    name: formData.name as string,
    email: formData.email as string,
    phone: formData.phone as string,
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      name: Yup.string().required(
        language === "fr" ? "Le nom est requis" : "Full name is required",
      ),
      email: Yup.string()
        .email(language === "fr" ? "Email invalide" : "Invalid email")
        .required(
          language === "fr" ? "L'email est requis" : "Email is required",
        ),
      phone: Yup.string().required(
        language === "fr"
          ? "Le numéro de téléphone est requis"
          : "Phone number is required",
      ),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      setFormData((prev) => ({ ...prev, ...values }));
      setStep(1);
    },
  });

  console.log("Current step:", step);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4"
      autoComplete="off"
    >
      <input
        type="text"
        name="name"
        placeholder={language === "fr" ? "Nom Complet" : "FullName"}
        className="w-full rounded border p-2"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name && (
        <p className="text-sm text-red-500">{formik.errors.name}</p>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full rounded border p-2"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <p className="text-sm text-red-500">{formik.errors.email}</p>
      )}
      <input
        type="text"
        name="phone"
        placeholder={language === "fr" ? "Numéro de téléphone" : "Phone number"}
        className="w-full rounded border p-2"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
      />
      {formik.touched.phone && formik.errors.phone && (
        <p className="text-sm text-red-500">{formik.errors.phone}</p>
      )}

      <div className="flex justify-end">
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
