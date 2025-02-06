"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import React from "react";
export default function ParticleAnimation({ children }) {
  // Utilisation de particlesInit asynchrone pour initialiser le moteur
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles Engine Loaded", engine);

    // Vérification de la validité de l'objet engine avant d'appeler loadSlim
    if (engine && typeof engine.addShape === "function") {
      await loadSlim(engine); // Charge la version légère de tsparticles
    } else {
      console.error("Invalid engine object", engine);
    }
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit} // Passer la fonction asynchrone
        options={{
          fullScreen: { enable: false },
          background: { color: "#f3f4f6" },
          particles: {
            number: { value: 50 },
            color: { value: "#D34FAC" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 4 },
            move: { enable: true, speed: 2 },
          },
        }}
        className="absolute inset-0 -z-10 h-full w-full"
      />
      {children}
    </div>
  );
}
