"use client";
import { motion } from "framer-motion";

type SectionHeaderProps = {
  headerInfo: {
    title: string;
    subtitle: string;
    description: string;
  };
  titleColor?: string;
  subtitleColor?: string | [string, string, string]; // Le sous-titre peut être une couleur ou un tableau de trois couleurs pour un dégradé à trois couleurs
  descriptionColor?: string;
  titleBgColor?: string;
  borderColor?: string;
  animationDuration?: number;
  animationDelay?: number;
};

const SectionHeader = ({
  headerInfo,
  titleColor = "#000", // Couleur par défaut du titre
  subtitleColor = "#000", // Couleur ou dégradé par défaut du sous-titre
  descriptionColor = "#333", // Couleur par défaut de la description
  titleBgColor = "#F5F5F5", // Couleur de fond du titre par défaut
  borderColor = "#ddd", // Couleur de la bordure par défaut
  animationDuration = 1, // Durée de l'animation
  animationDelay = 0.1, // Délai de l'animation
}: SectionHeaderProps) => {
  const { title, subtitle, description } = headerInfo;

  // Détection de dégradé ou couleur simple pour le sous-titre
  const getSubtitleStyle = () => {
    if (Array.isArray(subtitleColor) && subtitleColor.length === 3) {
      return {
        background: `linear-gradient(to right, ${subtitleColor[0]}, ${subtitleColor[1]}, ${subtitleColor[2]})`,
        WebkitBackgroundClip: "text",
        color: "transparent",
      };
    }
    return { color: subtitleColor };
  };

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: animationDuration, delay: animationDelay }}
      viewport={{ once: true }}
      className="animate_top mx-auto text-center"
    >
      {title && (
        <div
          className="mb-4 inline-block rounded-full px-4.5 py-1.5"
          style={{
            backgroundColor: titleBgColor,
            border: `1px solid ${borderColor}`,
          }}
        >
          <span
            className="text-sectiontitle font-medium"
            style={{ color: titleColor }}
          >
            {title}
          </span>
        </div>
      )}

      <h2
        className="mx-auto mb-4 text-3xl font-bold md:w-4/5 xl:w-1/2 xl:text-sectiontitle2"
        style={getSubtitleStyle()}
      >
        {subtitle}
      </h2>

      <p
        className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]"
        style={{ color: descriptionColor }}
      >
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
