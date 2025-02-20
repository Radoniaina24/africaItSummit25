"use client";
import React, { use, useEffect, useState } from "react";

import { PassType, useFormPassContext } from "@/app/context/FormPassContext";
import { useLanguageContext } from "@/app/context/LanguageContext";

export default function FormStep5() {
  const { language } = useLanguageContext();
  const { setStep, setFormData, step, formData } = useFormPassContext();
  const [tickets, setTickets] = useState<PassType[]>();

  useEffect(() => {
    setTickets(formData.passTypes);
  }, [formData]);

  const updateQuantity = (index: number, change: number) => {
    setTickets(
      (prevTickets) =>
        prevTickets
          ?.map((ticket, i) =>
            i === index
              ? { ...ticket, quantity: ticket.quantity + change }
              : ticket,
          )
          .filter((ticket) => ticket.quantity > 0), // Supprime les tickets à 0
    );
  };

  const totalAmount = tickets?.reduce(
    (acc, ticket) => acc + ticket.priceEarly * ticket.quantity,
    0,
  );
  const handleClik = () => {
    setFormData((prevData) => ({
      ...prevData,
      totalAmount,
      passTypes: tickets,
    }));
    setStep(5);
  };
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
                  <button
                    onClick={() => updateQuantity(index, -1)}
                    className="rounded bg-gray-300 px-2 py-1"
                    disabled={ticket.quantity === 1}
                  >
                    -
                  </button>
                  <span className="px-3">{ticket.quantity}</span>
                  <button
                    onClick={() => updateQuantity(index, 1)}
                    className="rounded bg-blue-500 px-2 py-1 text-white"
                  >
                    +
                  </button>
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
          onClick={() => setStep(3)}
          className="rounded bg-gray-300 px-4 py-2"
        >
          {language === "fr" ? "Précédent" : "Previous"}
        </button>
        <button
          onClick={handleClik}
          type="button"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          {language === "fr" ? "Suivant" : "Next"}
        </button>
      </div>
    </div>
  );
}
