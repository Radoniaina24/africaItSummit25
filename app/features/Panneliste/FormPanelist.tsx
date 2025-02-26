"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLanguageContext } from "@/app/context/LanguageContext";
import InputFormik from "../get_pass/Componnents/InputFormik";
import InputFile from "../get_pass/Componnents/InputFile";
import TextArea from "../get_pass/Componnents/TextArea";
import Checkbox from "../get_pass/Componnents/CheckBox";

export default function FormPanelist() {
  const { language } = useLanguageContext();

  const initialvalues = {
    photo: "",
    name: "",
    position: "",
    organization: "",
    email: "",
    phone: "",
    country: "",
    linkedIn: "",
    summary: "",
    check: false,
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      name: Yup.string().required(
        language === "fr" ? "Le nom est requis" : "Full name is required",
      ),
      photo: Yup.string().required(
        language === "fr" ? "Ce photo est requis" : "This photo is required",
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
      position: Yup.string().required(
        language === "fr"
          ? "Le titre / fonction est requis"
          : "This title / position is required",
      ),
      organization: Yup.string().required(
        language === "fr"
          ? "L'organisation  / entreprise  est requis"
          : "This organization / company is required",
      ),
      country: Yup.string().required(
        language === "fr"
          ? "Le pays de résidence   est requis"
          : "Country of residence is required",
      ),
      check: Yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });
  return (
    <section className=" bg-white pb-10">
      <div className="mx-auto max-w-c-1235 px-10 md:px-5">
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-4"
          autoComplete="off"
        >
          <h2 className="bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] bg-clip-text text-xl  text-transparent">
            {language === "fr"
              ? "Informations Personnelles "
              : " Personal Information "}
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
              label={
                language === "fr" ? "Titre / Fonction" : "Title / Position"
              }
              type="text"
              id="position"
              placeholder={
                language === "fr" ? "Titre ou Fonction" : "Title or Position"
              }
              value={formik.values.position}
              onChange={formik.handleChange}
              error={formik.errors.position}
              touched={formik.touched.position}
            />
            <InputFormik
              label={
                language === "fr"
                  ? "Organisation / Entreprise"
                  : "Organization / Company"
              }
              type="text"
              id="organization"
              placeholder={
                language === "fr"
                  ? "Organisation ou Entreprise"
                  : "Organization or Company"
              }
              value={formik.values.organization}
              onChange={formik.handleChange}
              error={formik.errors.organization}
              touched={formik.touched.organization}
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
              placeholder={
                language === "fr" ? "Numéro de téléphone" : "Phone number"
              }
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.errors.phone}
              touched={formik.touched.phone}
            />
            <InputFormik
              label={
                language === "fr" ? "Pays de résidence" : "Country of Residence"
              }
              type="text"
              id="country"
              placeholder={
                language === "fr" ? "Pays de résidence" : "Country of Residence"
              }
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.errors.country}
              touched={formik.touched.country}
            />
          </div>

          <h2 className="bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] bg-clip-text text-xl  text-transparent">
            {language === "fr"
              ? "Documents à soumettre "
              : "Documents to Submit "}
          </h2>
          <InputFormik
            label={
              language === "fr"
                ? "LinkedIn / site web personnel (si applicable)"
                : "LinkedIn / Personal Website (if applicable)"
            }
            type="text"
            id="linkedIn"
            placeholder=""
            value={formik.values.linkedIn}
            onChange={formik.handleChange}
            error={formik.errors.linkedIn}
            touched={formik.touched.linkedIn}
          />
          <TextArea
            id={"summary"}
            label={
              language === "fr"
                ? "Présentation de votre sujet (si disponible) : Un résumé de votre intervention ou sujet proposé."
                : "Presentation of Your Topic (if available): A summary of your speech or proposed topic."
            }
            onChange={formik.handleChange}
          />
          <InputFile
            label={
              language === "fr" ? "Telecharger un photo" : "Download a photo"
            }
            setFieldValue={formik.setFieldValue}
            name="photo"
            error={formik.errors.photo}
            touched={formik.touched.photo}
          />
          <Checkbox
            id={"check"}
            setFieldValue={formik.setFieldValue}
            checked={formik.values.check}
            label={
              language === "fr"
                ? "Je confirme que les informations ci-dessus sont correctes et je souhaite participer à l’Africa IT Summit 2025 en tant que panneliste VIP."
                : "I confirm that the above information is correct, and I wish to participate in the Africa IT Summit 2025 as a VIP panelist."
            }
            formik={undefined}
          />

          <div className="grid grid-cols-1">
            <button
              type="submit"
              className="mt-5 rounded-full bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] px-6 py-2 text-sm text-white hover:from-[#4486b6]  hover:via-[#8125c8] hover:to-[#f050c2]"
            >
              {language === "fr" ? "Soumettre" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
