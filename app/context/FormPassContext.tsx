"use client";
import React, { createContext, useContext, useState } from "react";
interface FormData {
  name: string;
  email: string;
  phone: string;
  passTypes: string[];
  companyName: string;
  billingAddress: string;
  postalCode: string;
  city: string;
  country: string;
}

const FormPassContext = createContext<any | null>(null);
function FormPassProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    passTypes: [],
    companyName: "",
    billingAddress: "",
    postalCode: "",
    city: "",
    country: "",
  });
  console.log(formData);
  return (
    <FormPassContext.Provider
      value={{
        step,
        setStep,
        formData,
        setFormData,
      }}
    >
      {children}
    </FormPassContext.Provider>
  );
}
function useFormPassContext() {
  const context = useContext(FormPassContext);
  if (context === undefined)
    throw new Error("FormPassContext was used outside the LanguageProvider");
  return context;
}
export { FormPassProvider, useFormPassContext };
