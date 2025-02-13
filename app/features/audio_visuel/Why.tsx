import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import SectionImageCity from "../health/SectionWithImage";

export default function Why() {
  const { language } = useLanguageContext();
  const why = {
    fr: "Pourquoi Participer à l’Africa IT Summit 2025 ?",
    en: "Why Attend the Africa IT Summit 2025?",
  };
  const panel = {
    fr: [
      {
        title: "Une plateforme d’opportunités commerciales et de networking",
        highlights: [
          {
            text: "Établissez des partenariats stratégiques avec les leaders du secteur : diffuseurs, producteurs, investisseurs et entreprises technologiques.",
          },
          {
            text: "Accédez à un marché en pleine croissance où la demande en contenus africains explose, aussi bien sur les plateformes de streaming que dans les cinémas et à la télévision.",
          },
          {
            text: "Découvrez les dernières innovations technologiques et comment elles transforment la création et la diffusion des œuvres audiovisuelles.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436253/2149151164_kvcoql.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Opportunités commerciales et networking",
        imageOnRight: true, // Positionne l'image à droite
      },
      {
        title: "Un accès direct aux décideurs et investisseurs",
        highlights: [
          {
            text: "Engagez-vous dans des discussions stratégiques avec les leaders du marché et les acteurs institutionnels pour façonner l’avenir du secteur.",
          },
          {
            text: "Présentez vos projets et saisissez des opportunités de financement et de collaboration.",
          },
          {
            text: "Bénéficiez de rendez-vous B2B et B2G ciblés, facilitant les négociations commerciales et les accords de partenariat.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436350/2150461315_qe5njc.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Accès aux décideurs et investisseurs",
        imageOnRight: false, // Positionne l'image à gauche
      },
      {
        title:
          "Un événement unique pour booster votre visibilité et développer votre activité",
        highlights: [
          {
            text: "Exposez vos produits et services auprès d’un public qualifié et captif.",
          },
          {
            text: "Attirez de nouveaux clients et partenaires en mettant en avant vos innovations.",
          },
          {
            text: "Participez à des démonstrations live, des pitchs et des showcases pour capter l’attention des acteurs majeurs du secteur.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436596/2147847455_1_kt5yuh.jpg", // Remplacez par l'URL réelle de l'image
        imageAlt: "Visibilité et développement d'activité",
        imageOnRight: true, // Positionne l'image à droite
      },
    ],
    en: [
      {
        title: "A Platform for Business Opportunities and Networking",
        highlights: [
          {
            text: "Establish strategic partnerships with industry leaders: broadcasters, producers, investors, and technology companies.",
          },
          {
            text: "Access a rapidly growing market where demand for African content is booming, both on streaming platforms and in cinemas and television.",
          },
          {
            text: "Discover the latest technological innovations and how they are transforming the creation and distribution of audiovisual works.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436253/2149151164_kvcoql.jpg", // Replace with the actual image URL
        imageAlt: "Business Opportunities and Networking",
        imageOnRight: true, // Position the image on the right
      },
      {
        title: "Direct Access to Decision-Makers and Investors",
        highlights: [
          {
            text: "Engage in strategic discussions with market leaders and institutional players to shape the future of the industry.",
          },
          {
            text: "Present your projects and seize opportunities for funding and collaboration.",
          },
          {
            text: "Benefit from targeted B2B and B2G meetings, facilitating business negotiations and partnership agreements.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436350/2150461315_qe5njc.jpg", // Replace with the actual image URL
        imageAlt: "Access to Decision-Makers and Investors",
        imageOnRight: false, // Position the image on the left
      },
      {
        title: "A Unique Event to Boost Your Visibility and Grow Your Business",
        highlights: [
          {
            text: "Showcase your products and services to a qualified and captive audience.",
          },
          {
            text: "Attract new clients and partners by highlighting your innovations.",
          },
          {
            text: "Participate in live demonstrations, pitches, and showcases to capture the attention of key industry players.",
          },
        ],
        imageSrc:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739436596/2147847455_1_kt5yuh.jpg", // Replace with the actual image URL
        imageAlt: "Market Exposure and Business Growth",
        imageOnRight: true, // Position the image on the right
      },
    ],
  };
  return (
    <section className="bg-white">
      <div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h2
            className=" mb-4 bg-gradient-to-r from-[#562196] via-[#D34FAC] to-[#0796F5] bg-clip-text text-xl font-extrabold text-transparent md:text-4xl"
            data-aos="fade-up"
          >
            {why[language]}
          </h2>
        </div>
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
