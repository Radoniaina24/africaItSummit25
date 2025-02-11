"use client";
import ContactAfricaItSummit from "@/app/interface/contactAfricaItSummit";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import * as yup from "yup";
import { string } from "yup";
import { useFormik } from "formik";
export const contactAfricaItSummitSchema = yup.object({
  fullname: string().required("This fullname is required"),
  email: string()
    .email("Invalid email format")
    .required("This email is required"),
  subject: string().required("This subject is required"),
  phone: string().required("This phone is required"),
  message: string().required("This message is required"),
});
const initialValues: ContactAfricaItSummit = {
  fullname: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
};
const Contact = () => {
  // state checkbox
  const [isChecked, setIsChecked] = useState(false);
  //Utilisation de formik
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: contactAfricaItSummitSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true); // Désactive le bouton
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const result = await response.json();
        if (result.success) {
          Swal.fire({
            title: "Great!",
            text: "Your message has been sent successfully.",
            icon: "success",
            showConfirmButton: false,
            timer: 3000, // Disparition automatique après 3 sec
            background: "#f4f4f4",
            color: "#333",
            customClass: {
              popup: "rounded-xl shadow-lg",
            },
          });
          resetForm();
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to send message.",
            icon: "error",
            showConfirmButton: false,
            timer: 3000, // Disparition automatique après 3 sec
            background: "#f4f4f4",
            color: "#333",
            customClass: {
              popup: "rounded-xl shadow-lg",
            },
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred.",
          icon: "error",
          showConfirmButton: false,
          timer: 3000, // Disparition automatique après 3 sec
          background: "#f4f4f4",
          color: "#333",
          customClass: {
            popup: "rounded-xl shadow-lg",
          },
        });
      } finally {
        setSubmitting(false); // Réactiver le bouton après réponse
      }
    },
  });

  const { values, handleChange, touched, errors, handleSubmit, resetForm } =
    formik;

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          {/* <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div> */}
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="w-full">
                    <input
                      onChange={handleChange}
                      value={values.fullname}
                      name="fullname"
                      type="text"
                      placeholder="Full name"
                      className="animation-hover w-full border-b border-stroke bg-transparent pb-3.5 focus:border-fuchsia-400 focus:placeholder:text-black focus-visible:outline-none  "
                    />
                    <ErrorMessage
                      touched={touched.fullname}
                      error={errors.fullname}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      type="email"
                      placeholder="Email address"
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-fuchsia-400 focus:placeholder:text-black focus-visible:outline-none  "
                    />
                    <ErrorMessage
                      touched={touched.email}
                      error={errors.email}
                    />
                  </div>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="w-full">
                    <input
                      value={values.subject}
                      onChange={handleChange}
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:focus:border-fuchsia-400 focus:placeholder:text-black focus-visible:outline-none "
                    />
                    <ErrorMessage
                      touched={touched.subject}
                      error={errors.subject}
                    />
                  </div>

                  <div className="w-full">
                    <input
                      value={values.phone}
                      onChange={handleChange}
                      name="phone"
                      type="text"
                      placeholder="Phone number"
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-fuchsia-400 focus:placeholder:text-black focus-visible:outline-none"
                    />
                    <ErrorMessage
                      touched={touched.phone}
                      error={errors.phone}
                    />
                  </div>
                </div>

                <div className="mb-11.5 flex flex-col">
                  <textarea
                    value={values.message}
                    onChange={handleChange}
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full border-b border-stroke bg-transparent focus:border-fuchsia-400 focus:placeholder:text-black focus-visible:outline-none"
                  ></textarea>
                  <ErrorMessage
                    touched={touched.message}
                    error={errors.message}
                  />
                </div>

                <div className="flex flex-wrap justify-end gap-4  ">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-medium text-white duration-300 ease-in-out
                    ${
                      formik.isSubmitting
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"
                    }`}
                  >
                    {formik.isSubmitting ? (
                      <>
                        Sending
                        <svg
                          className=" ml-2 h-5 w-5 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="fill-white"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                            fill=""
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>

              {/* <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Our Loaction
                </h3>
                <p>290 Maryam Springs 260, Courbevoie, Paris, France</p>
              </div> */}
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="#">contact@africaitsummit.com</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="#">+261 34 03 777 07</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;

const ErrorMessage = ({ touched, error }: { touched?: any; error?: any }) => {
  if (!touched || !error) return null;
  return (
    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
      <span className="font-medium">{error}</span>
    </p>
  );
};
