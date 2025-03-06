"use client";
import React from "react";
import * as Yup from "yup";
import { useFormPassContext } from "@/app/context/FormPassContext";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { useFormik } from "formik";
import InputFormik from "./InputFormik";

export default function FormPayment() {
  const { language } = useLanguageContext();
  const { setStep, setFormData, step, formData } = useFormPassContext();
  const initialvalues = {
    cardType: formData.cardType as string,
    cardNumber: formData.cardNumber as string,
    expirationDate: formData.expirationDate as string,
    cvv: formData.cvv as string,
    fullNameOnCard: "",
  };
  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      fullNameOnCard: Yup.string().required(
        language === "fr" ? "Ce champs est requis" : "This field is required",
      ),
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
      // setStep(4);
    },
  });
  return (
    <div className="">
      <section className="bg-white pb-8 antialiased dark:bg-gray-900 md:pb-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <div className="mt-6 sm:mt-8 ">
              <form
                onSubmit={formik.handleSubmit}
                action="#"
                className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6  lg:p-8"
              >
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <InputFormik
                      label={
                        language === "fr"
                          ? "Nom complet (sur la carte)*"
                          : "Full name (as displayed on card)*"
                      }
                      type="text"
                      id="fullNameOnCard"
                      placeholder="John doe"
                      value={formik.values.fullNameOnCard}
                      onChange={formik.handleChange}
                      error={formik.errors.fullNameOnCard}
                      touched={formik.touched.fullNameOnCard}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <InputFormik
                      label={
                        language === "fr"
                          ? "Numéro de la carte*"
                          : "Card Number*"
                      }
                      type="text"
                      id="cardNumber"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      value={formik.values.cardNumber}
                      onChange={formik.handleChange}
                      error={formik.errors.cardNumber}
                      touched={formik.touched.cardNumber}
                    />
                  </div>

                  <div>
                    <InputFormik
                      label={
                        language === "fr"
                          ? "Date d’expiration*"
                          : "Expiration Date*"
                      }
                      type="date"
                      id="expirationDate"
                      value={formik.values.expirationDate}
                      onChange={formik.handleChange}
                      error={formik.errors.expirationDate}
                      touched={formik.touched.expirationDate}
                    />
                  </div>
                  <div>
                    <InputFormik
                      label={language === "fr" ? "CVV*" : "CVV*"}
                      type="number"
                      id="cvv"
                      // placeholder={language === "fr" ? "Numéro de téléphone" : "Phone number"}
                      value={formik.values.cvv}
                      onChange={formik.handleChange}
                      error={formik.errors.cvv}
                      touched={formik.touched.cvv}
                      placeholder="•••"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center    justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white  hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary"
                >
                  Pay now
                </button>
              </form>
              {/* <div className="mb-6 grow sm:mt-8 lg:mt-0">
                <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                  <dl className="flex items-center justify-between gap-4  pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      € {formData.totalAmount}
                    </dd>
                  </dl>
                </div>

                <div className="my-6 flex items-center justify-center gap-8">
                   <img
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                    alt=""
                  /> 
                  <img
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                    alt=""
                  />
                  <img
                    className="h-8 w-auto dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                    alt=""
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-5 flex justify-between space-x-4">
        <button
          onClick={() => setStep(5)}
          className="rounded-full bg-gray-300  px-6 py-2 text-sm hover:bg-gray-400  hover:text-white"
        >
          {language === "fr" ? "Précédent" : "Previous"}
        </button>
      </div>
    </div>
  );
}
