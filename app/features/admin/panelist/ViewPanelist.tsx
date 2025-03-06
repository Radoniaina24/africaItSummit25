"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import View from "./svg/view";
import { Mail, Phone, MapPin, Building2, Linkedin } from "lucide-react";
import Panelist from "@/app/interface/Panelist";
export default function ViewPanelist({ profile }: { profile: Panelist }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <View />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border bg-white p-6 shadow-lg">
          <div className="flex flex-col items-center justify-items-center">
            {/* Photo de profil */}
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-32 w-32 rounded-full border-4 border-gray-200 object-cover"
            />
            <div className="text-center">
              <h2 className="mt-4 text-xl font-semibold text-gray-800">
                {profile.name}
              </h2>
            </div>

            <p className="text-gray-600">
              {profile.position} @ {profile.organization}
            </p>
            <p className="mt-2 text-center text-sm text-gray-500">
              {profile.summary}
            </p>

            {/* Lien LinkedIn */}
            {profile.linkedIn ? (
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center space-x-2 text-blue-600 transition duration-300 hover:text-blue-800"
              >
                <Linkedin className="h-5 w-5" />
                <span>Voir sur LinkedIn</span>
              </a>
            ) : (
              ""
            )}
          </div>

          {/* Informations de contact */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center space-x-3 text-gray-700">
              <Mail className="h-5 w-5 text-blue-500" />
              <span>{profile.email}</span>
            </div>

            <div className="flex items-center space-x-3 text-gray-700">
              <Phone className="h-5 w-5 text-green-500" />
              <span>{profile.phone}</span>
            </div>

            <div className="flex items-center space-x-3 text-gray-700">
              <MapPin className="h-5 w-5 text-red-500" />
              <span>{profile.country}</span>
            </div>

            <div className="flex items-center space-x-3 text-gray-700">
              <Building2 className="h-5 w-5 text-purple-500" />
              <span>{profile.organization}</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
