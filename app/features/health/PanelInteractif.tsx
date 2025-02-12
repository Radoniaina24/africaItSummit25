"use client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import React, { useEffect } from "react";
import SectionImageCity from "./SectionWithImage";
export default function PanelInteractif() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Conférences et Panels",
    en: "",
  };

  const panel = {
    fr: [
      {
        title: "Un espace stratégique pour l'innovation en santé numérique",
        highlights: [
          {
            text: "Solutions innovantes : Mettons en avant des avancées en télémédecine, gestion hospitalière et e-santé.",
          },
          {
            text: "Technologies médicales : Présentons des dispositifs médicaux connectés et des applications mobiles de suivi des patients.",
          },
          {
            text: "Intelligence artificielle : Découvrons des outils d'IA dédiés à l'analyse et au diagnostic médical.",
          },
          {
            text: "Éducation en santé : Valorisons les plateformes de formation numérique et les solutions éducatives pour les professionnels de la santé.",
          },
          {
            text: "Réseautage : Rencontrons des acheteurs, partenaires technologiques et acteurs institutionnels en quête de solutions digitales.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739344383/84782_easdad.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Innovation en santé numérique",
        imageOnRight: true, // Positionne l'image à gauche
      },
      {
        title: "Exemples de technologies et services en santé numérique",
        highlights: [
          {
            text: "Télémédecine : Consultations à distance pour une prise en charge médicale efficace.",
          },
          {
            text: "Intelligence artificielle : Utilisation du machine learning pour le diagnostic médical.",
          },
          {
            text: "Cybersécurité : Outils de protection des données médicales contre les cybermenaces.",
          },
          {
            text: "Blockchain : Solutions pour la traçabilité et la sécurité des médicaments.",
          },
          {
            text: "Dossiers médicaux électroniques : Optimisation de la gestion hospitalière et des données des patients.",
          },
          {
            text: "Réalité augmentée : Formations médicales immersives pour des simulations réalistes.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739344509/2149611236_rnuc2h.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Technologies en santé numérique",
        imageOnRight: false, // Positionne l'image à gauche
      },
    ],
    en: [
      {
        title: "A Strategic Space for Innovation in Digital Health",
        highlights: [
          {
            text: "Innovative solutions: Highlighting advancements in telemedicine, hospital management, and e-health.",
          },
          {
            text: "Medical technologies: Presenting connected medical devices and mobile applications for patient monitoring.",
          },
          {
            text: "Artificial Intelligence: Exploring AI tools for medical analysis and diagnostics.",
          },
          {
            text: "Health education: Showcasing digital training platforms and educational solutions for healthcare professionals.",
          },
          {
            text: "Networking: Meeting buyers, technology partners, and institutional stakeholders in search of digital solutions.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739344383/84782_easdad.jpg", // Replace with the actual image URL
        imageAlt: "Digital Health Innovation",
        imageOnRight: true, // Position the image on the left
      },
      {
        title: "Examples of Technologies and Services in Digital Health",
        highlights: [
          {
            text: "Telemedicine: Remote consultations for effective medical care.",
          },
          {
            text: "Artificial Intelligence: Using machine learning for medical diagnostics.",
          },
          {
            text: "Cybersecurity: Tools to protect medical data from cyber threats.",
          },
          {
            text: "Blockchain: Solutions for the traceability and security of medications.",
          },
          {
            text: "Electronic Medical Records: Optimizing hospital management and patient data.",
          },
          {
            text: "Augmented Reality: Immersive medical training for realistic simulations.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739344509/2149611236_rnuc2h.jpg", // Replace with the actual image URL
        imageAlt: "Digital Health Technologies",
        imageOnRight: false, // Position the image on the left
      },
    ],
  };

  return (
    <section className="py-20">
      {language === "fr" ? (
        <div className="mx-auto my-12 max-w-5xl gap-5 rounded-lg bg-purple-100 p-8 shadow-lg">
          <p className=" mb-5 text-center text-lg font-bold leading-relaxed text-gray-700">
            Des panels interactifs et des retours d&apos;expérience concrets
            aideront les participants à identifier les opportunités et solutions
            adaptées à leur activité. Exhibitions et Espace d&apos;Innovation :
            Présentez, Démontrez et Attirez de Nouveaux Clients
          </p>
          <p className="mb-5 text-center text-lg font-bold leading-relaxed text-gray-700">
            Les exposants bénéficieront d&apos;un espace libre pour mettre en
            valeur leurs produits et solutions, attirer des clients et
            partenaires, et démontrer leur expertise devant des décideurs et
            investisseurs.
          </p>
        </div>
      ) : (
        <div className="mx-auto my-12 max-w-5xl rounded-lg bg-purple-100 p-8 shadow-lg">
          <p className="mb-5 text-center text-lg font-bold leading-relaxed text-gray-700">
            Interactive panels and real-world insights will help participants
            identify opportunities and solutions tailored to their business.
            Exhibitions and Innovation Space: Showcase, Demonstrate, and Attract
            New Clients.
          </p>
          <p className="text-center text-lg font-bold leading-relaxed text-gray-700">
            Exhibitors will have an open space to showcase their products and
            solutions, attract clients and partners, and demonstrate their
            expertise to key decision-makers and investors.
          </p>
        </div>
      )}
      <div className="space-y-16 px-6 py-12 ">
        {panel[language].map((item, index) => (
          <SectionImageCity
            key={index}
            title={item.title}
            highlights={item.highlights}
            imageSrc={item.imageSrc}
            imageAlt={item.title}
            imageOnRight={item.imageOnRight}
          />
        ))}
      </div>
    </section>
  );
}
