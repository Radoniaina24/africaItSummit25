"use client";
import React, { useEffect, useState } from "react";

import { PassType, useFormPassContext } from "@/app/context/FormPassContext";
import { useLanguageContext } from "@/app/context/LanguageContext";

export default function FormStep6() {
  const { language } = useLanguageContext();
  const { setStep, setFormData, step, formData } = useFormPassContext();
  const [tickets, setTickets] = useState<PassType[]>();

  useEffect(() => {
    setTickets(formData.passTypes);
  }, [formData]);

  const totalAmount = tickets?.reduce(
    (acc, ticket) => acc + ticket.priceEarly * ticket.quantity,
    0,
  );
  return (
    <div className="">
      <h2 className="mb-4 text-xl font-semibold">
        {language === "fr" ? "Liste des Pass" : "Pass List"}
      </h2>

      {tickets?.length ? (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">
                {" "}
                {language === "fr" ? "Passe selectionné" : "Selected Pass"}
              </th>
              <th className="p-2 text-center">
                {language === "fr" ? "Prix Unitaire (€)" : "Unit Price (€)"}
              </th>
              <th className="p-2 text-center">
                {language === "fr" ? "Quantité" : "Quantity"}
              </th>
              <th className="p-2 text-center">
                {language === "fr" ? "Total (€)" : "Total"}
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets?.map((ticket, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{ticket.type}</td>
                <td className="p-2 text-center">{ticket.priceEarly}</td>
                <td className="flex items-center justify-center gap-2 p-2 text-center">
                  <span className="px-3">{ticket.quantity}</span>
                </td>
                <td className="p-2 text-center">
                  {ticket.priceEarly * ticket.quantity} €
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-200 font-semibold">
              <td className="p-2 text-right" colSpan={3}>
                {language === "fr" ? "Total Général :" : "Grand Total :"}
              </td>
              <td className="p-2 text-center">{totalAmount} €</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p className="text-center text-gray-500">
          {language === "fr" ? "Aucun pass sélectionné" : "No pass selected"}
        </p>
      )}

      <div className="mt-5 flex justify-between space-x-4">
        <button
          onClick={() => setStep(4)}
          className="rounded-full bg-gray-300  px-6 py-2 text-sm hover:bg-gray-400  hover:text-white"
        >
          {language === "fr" ? "Précédent" : "Previous"}
        </button>
        <button
          type="button"
          className="rounded-full bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
        >
          {language === "fr" ? "Soumettre" : "Submit"}
        </button>
      </div>
    </div>
  );
}
