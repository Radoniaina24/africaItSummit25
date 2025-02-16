import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import { InnovationItem } from "../audio_visuel/Innovation";

export default function Why() {
  const { language } = useLanguageContext();
  const fintechInclusion = {
    fr: [
      {
        text: "Accédez à un marché en pleine expansion et connectez-vous avec des acteurs clés.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739681711/2150377156_cg2bk2.jpg",
      },
      {
        text: "Échangez avec des banques, des startups fintech, des investisseurs et des régulateurs.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739681822/2149714433_d8vpbt.jpg",
      },
      {
        text: "Participez à des sessions de networking B2B, B2C et B2G pour développer des opportunités de collaboration.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739681962/2149104411_rvp0np.jpg",
      },
      {
        text: "Découvrez les nouvelles tendances qui transforment le secteur financier africain.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739682098/2150461333_n3x6uq.jpg",
      },
      {
        text: "Explorez des solutions innovantes pour renforcer l’inclusion financière.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739682191/2148305937_egsigv.jpg",
      },
      {
        text: "Apprenez comment les paiements mobiles, la blockchain et l’IA révolutionnent les services financiers.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739682362/2149153407_yry8sx.jpg",
      },
      {
        text: "Identifiez les meilleures pratiques pour développer des services accessibles aux populations non bancarisées.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739682467/2147844526_dec2tu.jpg",
      },
      {
        text: "Accédez à des opportunités d’investissement et de financement pour vos projets fintech.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739683020/2148780630_i4gr1d.jpg",
      },
      {
        text: "Développez votre activité et saisissez de nouvelles opportunités de marché.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739683665/2149908187_hjlaue.jpg",
      },
      {
        text: "L’Afrique est le marché fintech qui connaît la plus forte croissance mondiale.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739684093/2150038844_vzyobp.jpg",
      },
      {
        text: "Les gouvernements et institutions internationales soutiennent le développement de solutions financières inclusives.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739684292/2150433440_j0kofi.jpg",
      },
      {
        text: "De nouvelles plateformes et infrastructures numériques émergent, créant des opportunités pour les startups et entreprises établies.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739684500/2151941526_zsue1n.jpg",
      },
    ],
    en: [
      {
        text: "Access a rapidly growing market and connect with key industry players.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739681711/2150377156_cg2bk2.jpg",
      },
      {
        text: "Engage with banks, fintech startups, investors, and regulators.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739681822/2149714433_d8vpbt.jpg",
      },
      {
        text: "Participate in B2B, B2C, and B2G networking sessions to foster collaboration opportunities.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739681962/2149104411_rvp0np.jpg",
      },
      {
        text: "Discover emerging trends reshaping Africa’s financial sector.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739682098/2150461333_n3x6uq.jpg",
      },
      {
        text: "Explore innovative solutions to enhance financial inclusion.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739682191/2148305937_egsigv.jpg",
      },
      {
        text: "Learn how mobile payments, blockchain, and AI are transforming financial services.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739682362/2149153407_yry8sx.jpg",
      },
      {
        text: "Identify best practices for developing services accessible to unbanked populations.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739682467/2147844526_dec2tu.jpg",
      },
      {
        text: "Access investment and funding opportunities for your fintech projects.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739683020/2148780630_i4gr1d.jpg",
      },
      {
        text: "Grow your business and tap into new market opportunities.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739683665/2149908187_hjlaue.jpg",
      },
      {
        text: "Africa is the fastest-growing fintech market in the world.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739684093/2150038844_vzyobp.jpg",
      },
      {
        text: "Governments and international institutions are supporting the development of inclusive financial solutions.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739684292/2150433440_j0kofi.jpg",
      },
      {
        text: "New digital platforms and infrastructures are emerging, creating opportunities for startups and established businesses.",
        imageSource:
          "https://res.cloudinary.com/dx3xhdaym/image/upload/v1739684500/2151941526_zsue1n.jpg",
      },
    ],
  };

  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-1 gap-10 p-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {fintechInclusion[language].map((item, index) => (
          <InnovationItem data={item} key={index} textColor="text-white" />
        ))}
      </div>
    </div>
  );
}
