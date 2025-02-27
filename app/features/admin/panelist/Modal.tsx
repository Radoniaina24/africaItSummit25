import React, { useEffect } from "react";
import Xcircle from "./svg/Xcircle";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  // Bloquer le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Restaure le scroll normal
    };
  }, [open]);

  if (!open) return null; // Empêche le rendu inutile quand le modal est fermé

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-999999 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md scale-100 rounded-lg bg-white px-5 py-4 shadow-lg transition-transform duration-300 ease-in-out"
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200 hover:text-gray-700"
        >
          <Xcircle />
        </button>

        {children}
      </div>
    </div>
  );
}
