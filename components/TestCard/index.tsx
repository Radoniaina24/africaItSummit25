"use client";
import React, { useEffect, useRef } from "react";

// Données des cartes
const cardsData = [
  { id: 1, content: "Card 1" },
  { id: 2, content: "Card 2" },
  { id: 3, content: "Card 3" },
  { id: 4, content: "Card 4" },
  { id: 5, content: "Card 5" },
];

const AnimatedCardCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  let position = 0;
  const speed = 1; // Vitesse du défilement

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        position -= speed;

        // Vérifie si la première carte est complètement sortie
        const firstCard = scrollRef.current.children[0] as HTMLElement;
        const lastCard = scrollRef.current.children[
          scrollRef.current.children.length - 1
        ] as HTMLElement;

        // Si la première carte est totalement sortie du conteneur
        if (firstCard.getBoundingClientRect().right < 0) {
          // Déplace la première carte directement après la dernière
          scrollRef.current.appendChild(firstCard);
          position += firstCard.offsetWidth + 20; // Ajuste la position pour qu'il n'y ait pas de coupure
        }

        // Si la dernière carte a quitté le conteneur, on ne fait rien, elle est déjà réintégrée à la fin
        if (lastCard.getBoundingClientRect().left < 0) {
          scrollRef.current.style.transition = "none"; // Désactive la transition pour éviter un effet
        }

        // Applique la nouvelle position
        scrollRef.current.style.transform = `translateX(${position}px)`;
      }

      // Utilisation de `requestAnimationFrame` pour assurer un défilement fluide
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll); // Lance l'animation au démarrage du composant
  }, []);

  return (
    <div className="m-auto max-w-[1200px]">
      <div className="">
        <div className="card-scroll" ref={scrollRef}>
          {cardsData.map((card) => (
            <div key={card.id} className="card">
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCardCarousel;
