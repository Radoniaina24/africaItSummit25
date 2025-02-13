import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionImageCity from "../health/SectionWithImage";
import SectionHeader from "@/components/Common/SectionHeader";

export default function FormationUniversite() {
  const { language } = useLanguageContext();
  const title = {
    fr: "Formation et Universités",
    en: "Education and Universities",
  };
  const subtitle = {
    fr: "Connecter l’Éducation et l’Industrie pour Anticiper l’Avenir",
    en: "Bridging Education and Industry to Anticipate the Future",
  };
  const description = {
    fr: "La transformation digitale du secteur audiovisuel nécessite de nouvelles compétences et une adaptation rapide des formations universitaires et professionnelles.",
    en: "The digital transformation of the audiovisual sector requires new skills and the rapid adaptation of both university and professional training programs.",
  };

  const panel = {
    fr: [
      {
        title:
          "Africa IT Summit : Connecter les Universités, Centres de Formation et Entreprises",
        highlights: [
          {
            text: "Débattre des nouvelles tendances éducatives en cinéma et audiovisuel.",
          },
          {
            text: "Renforcer les collaborations entre entreprises et institutions académiques pour favoriser l’employabilité et l’innovation.",
          },
          {
            text: "Présenter des programmes de formation spécialisés en intelligence artificielle, blockchain et production numérique.",
          },
          {
            text: "Mettre en avant des cas concrets de réussite dans la formation et l’insertion professionnelle dans le secteur.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436253/2149151164_kvcoql.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Africa IT Summit",
        imageOnRight: true, // Positionne l'image à droite
      },
      {
        title:
          "Opportunités pour les Étudiants, Jeunes Professionnels et Formateurs",
        highlights: [
          {
            text: "Accéder à des sessions de mentorat et de coaching avec des experts de l’industrie.",
          },
          {
            text: "Participer à des ateliers pratiques et masterclasses sur les technologies émergentes.",
          },
          {
            text: "Rencontrer des recruteurs et entreprises en recherche de talents qualifiés.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436350/2150461315_qe5njc.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Opportunités pour Étudiants et Professionnels",
        imageOnRight: false, // Positionne l'image à gauche
      },
    ],
    en: [
      {
        title:
          "Africa IT Summit: Connecting Universities, Training Centers, and Businesses",
        highlights: [
          {
            text: "Participate in discussions about new educational trends in cinema and audiovisual industries.",
          },
          {
            text: "Strengthen collaborations between businesses and academic institutions to foster employability and innovation.",
          },
          {
            text: "Present specialized training programs in artificial intelligence, blockchain, and digital production.",
          },
          {
            text: "Highlight real-world success stories in training and professional integration within the sector.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436253/2149151164_kvcoql.jpg", // Replace with actual image URL
        imageAlt: "Africa IT Summit",
        imageOnRight: true, // Position the image on the right
      },
      {
        title: "Opportunities for Students, Young Professionals, and Trainers",
        highlights: [
          {
            text: "Access mentoring and coaching sessions with industry experts.",
          },
          {
            text: "Participate in hands-on workshops and masterclasses on emerging technologies.",
          },
          {
            text: "Meet recruiters and companies seeking qualified talent.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436350/2150461315_qe5njc.jpg", // Replace with actual image URL
        imageAlt: "Opportunities for Students and Professionals",
        imageOnRight: false, // Position the image on the left
      },
    ],
  };

  return (
    <section className="bg-white py-20">
      <div>
        <SectionHeader
          headerInfo={{
            title: title[language],
            subtitle: subtitle[language],
            description: description[language],
          }}
          subtitleColor={["#D34FAC", "#0796F5", "#562196"]}
          descriptionColor="#FFFFFF"
        />

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
      </div>
    </section>
  );
}
