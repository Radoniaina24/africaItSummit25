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
      {tickets?.length ? (
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="rounded-s-lg px-6 py-3">
                  {language === "fr" ? "Passe selectionné" : "Selected Pass"}
                </th>

                <th scope="col" className="rounded-e-lg px-6 py-3">
                  {language === "fr" ? "Prix Unitaire" : "Unit Price"}
                </th>
                <th scope="col" className="px-6 py-3 ">
                  {language === "fr" ? "Qté" : "Qty"}
                </th>
                <th scope="col" className="rounded-e-lg px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {tickets?.map((ticket, index) => (
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-2 font-medium text-gray-900 "
                  >
                    {ticket.type}
                  </th>

                  <td className="px-6 py-2">{ticket.priceEarly} €</td>
                  <td className="  px-6 py-2  text-center">
                    {ticket.quantity}
                  </td>
                  <td className="px-6 py-2">
                    {" "}
                    {ticket.priceEarly * ticket.quantity} €
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="border-y ">
              <tr className="font-semibold text-gray-900 ">
                <th scope="row" className="px-6 py-3 text-base">
                  Total
                </th>
                <th scope="row" className="px-6 py-3 text-base"></th>
                <th scope="row" className="px-6 py-3 text-base"></th>
                <td className="px-6 py-3">{totalAmount} €</td>
              </tr>
            </tfoot>
          </table>
        </div>
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
          onClick={() => setStep(6)}
          type="button"
          className="rounded-full bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] px-6 py-2 text-sm text-white hover:from-[#4486b6]  hover:via-[#8125c8] hover:to-[#f050c2]"
        >
          {language === "fr" ? "Suivant" : "Next"}
        </button>
      </div>
    </div>
  );
}
