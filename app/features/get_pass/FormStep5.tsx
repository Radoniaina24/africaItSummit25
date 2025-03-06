"use client";
import React, { use, useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { PassType, useFormPassContext } from "@/app/context/FormPassContext";
import { useLanguageContext } from "@/app/context/LanguageContext";

import { MdOutlineRemoveCircle } from "react-icons/md";
export default function FormStep5() {
  const { language } = useLanguageContext();
  const { setStep, setFormData, step, formData } = useFormPassContext();
  const [tickets, setTickets] = useState<PassType[]>();
  const hiddenBtnNext = tickets?.length ? false : true;
  useEffect(() => {
    setTickets(formData.passTypes);
  }, [formData]);

  const updateQuantity = (index: number, change: number) => {
    setTickets((prevTickets) => {
      const updatedTickets = prevTickets
        ?.map((ticket, i) =>
          i === index
            ? { ...ticket, quantity: ticket.quantity + change }
            : ticket,
        )
        .filter((ticket) => ticket.quantity > 0); // Supprime les tickets ayant quantity <= 0

      // Met à jour formData pour que la suppression soit aussi répercutée globalement
      setFormData((prevData) => ({
        ...prevData,
        passTypes: updatedTickets,
      }));

      return updatedTickets;
    });
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
                  <MdOutlineRemoveCircle
                    className="text-red-600 hover:cursor-pointer hover:text-red-700"
                    size={25}
                    onClick={() => updateQuantity(index, -1)}
                    // disabled={ticket.quantity === 1}
                  />

                  <span className="px-3">{ticket.quantity}</span>

                  <FaCirclePlus
                    className="text-green-600 hover:cursor-pointer hover:text-green-700"
                    size={22}
                    onClick={() => updateQuantity(index, 1)}
                  />
                </td>
                <td className="p-2 text-center">
                  {ticket.priceEarly * ticket.quantity} €
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-primary font-semibold text-white">
              <td className="p-2 text-left">
                {language === "fr" ? "Total" : "Total"}
              </td>
              <td className="p-2 pr-2 text-end sm:pr-6 lg:pr-11" colSpan={3}>
                {totalAmount} €
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div className="space-y-3 text-center">
          <p className="text-center text-gray-500">
            {language === "fr" ? "Aucun pass sélectionné" : "No pass selected"}
          </p>
          <button
            onClick={() => setStep(1)}
            type="button"
            className="rounded-full bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] px-4 py-2 text-xs text-white hover:from-[#4486b6]  hover:via-[#8125c8] hover:to-[#f050c2]"
          >
            {language === "fr"
              ? "Cliquer ici pour selectionner"
              : "Click here to select pass"}
          </button>
        </div>
      )}

      <div className="mt-5 flex justify-between space-x-4">
        <button
          onClick={() => setStep(3)}
          className="rounded-full bg-gray-300  px-6 py-2 text-sm hover:bg-gray-400  hover:text-white"
        >
          {language === "fr" ? "Précédent" : "Previous"}
        </button>
        <button
          disabled={tickets?.length ? false : true}
          onClick={handleClik}
          type="button"
          className={` ${hiddenBtnNext ? "hidden" : ""} rounded-full bg-gradient-to-br from-[#63b6f1] via-[#a261d4] to-[#e575c5] px-6 py-2 text-sm text-white hover:from-[#4486b6]  hover:via-[#8125c8] hover:to-[#f050c2]`}
        >
          {language === "fr" ? "Suivant" : "Next"}
        </button>
      </div>
    </div>
  );
}
