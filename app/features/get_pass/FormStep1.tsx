"use client";
import React from "react";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { useFormPassContext } from "@/app/context/FormPassContext";
import { useLanguageContext } from "@/app/context/LanguageContext";
import FormikErrorMessage from "./Componnents/FormikErrorMessage";
import InputFormik from "./Componnents/InputFormik";
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

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4"
      autoComplete="off"
    >
      <InputFormik
        label={language === "fr" ? "Nom Complet" : "FullName"}
        type="text"
        id="name"
        placeholder={language === "fr" ? "Nom Complet" : "FullName"}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
        touched={formik.touched.name}
      />

      <InputFormik
        label="Email"
        type="text"
        id="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      <InputFormik
        label={language === "fr" ? "Numéro de téléphone" : "Phone number"}
        type="text"
        id="phone"
        placeholder={language === "fr" ? "Numéro de téléphone" : "Phone number"}
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.errors.phone}
        touched={formik.touched.phone}
      />
      <div className="flex justify-end">
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
