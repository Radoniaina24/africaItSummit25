"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import React from "react";
export default function ParticleAnimation({ children }) {
  // Utilisation de particlesInit asynchrone pour initialiser le moteur
  const particlesInit = useCallback(async (engine) => {
    // Vérification de la validité de l'objet engine avant d'appeler loadSlim
    if (engine && typeof engine.addShape === "function") {
      await loadSlim(engine); // Charge la version légère de tsparticles
    } else {
      console.error("Invalid engine object", engine);
    }
  }, []);

  return (
    <div className="">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 }, // Fond plein écran
          background: {
            // color: "#0e0c29", // Fond sombre pour un effet futuriste
            // image: "linear-gradient(45deg, #28313b 0%, #485461 100%)", // Dégradé dynamique pour le fond
          },
          particles: {
            number: {
              value: 100, // Plus de particules pour un effet plus dense
              density: {
                enable: true,
                value_area: 800, // Zone d'effet de particules
              },
            },
            color: {
              value: "#D34FAC", // Couleur moderne de particules (cyanine)
            },
            shape: {
              type: "circle", // Garde les particules sous forme de cercles
            },
            opacity: {
              value: 0.6, // Opacité des particules
              random: true, // Rendre l'opacité un peu aléatoire pour plus de fluidité
            },
            size: {
              value: 6, // Taille des particules augmentée pour plus de visibilité
              random: true, // Aléatoire pour un effet dynamique
            },
            move: {
              enable: true,
              speed: 3, // Vitesse des particules pour un mouvement plus fluide
              direction: "none", // Direction aléatoire pour un mouvement naturel
              out_mode: "out", // Les particules disparaissent lorsqu'elles sortent de l'écran
            },
          },
          interactivity: {
            detect_on: "canvas", // Détecte les interactions sur le canvas
            events: {
              onhover: {
                enable: true, // Activé lors du survol
                mode: "repulse", // Les particules s'éloignent lorsque la souris passe
              },
              onclick: {
                enable: true, // Activé lors du clic
                mode: "push", // Ajoute des particules supplémentaires lors du clic
              },
            },
          },
        }}
        className="absolute inset-0 -z-10 h-full w-full"
      />
      {children}
    </div>
  );
}
