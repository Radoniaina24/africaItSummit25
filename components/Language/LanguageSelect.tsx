import { useLanguageContext } from "@/app/context/LanguageContext";
import React from "react";
import Flag from "react-world-flags";

interface LanguageSelectProps {
  sticky?: boolean; // Le prop sticky est optionnel
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ sticky }) => {
  const { language, setLanguage } = useLanguageContext();
  const languages = [
    {
      code: "fr",
      name: "Français",
      icon: <Flag code={"fr"} alt="Francais" className="h-6 w-6" />,
    },
    {
      code: "en",
      name: "English",
      icon: <Flag code={"us"} alt="English" className="h-6 w-6" />,
    },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };
  return (
    <div
      className={`relative ml-5  ${sticky ? "sticky top-0 z-10" : ""}`} // Application de la classe sticky si le prop est true
    >
      <div className="group flex cursor-pointer items-center gap-2 rounded-full bg-gray-100 bg-transparent px-4 py-3 transition-all">
        {/* Icône de la langue sélectionnée */}
        <div className="flex items-center gap-2">
          {languages.find((lang) => lang.code === language)?.icon}
          <span
            className={`font-medium ${
              language === "fr" || language === "en"
                ? `${sticky ? "text-white" : "text-white"}`
                : "text-white"
            }`}
          >
            {languages.find((lang) => lang.code === language)?.name}
          </span>
        </div>
        <select
          id="language"
          value={language}
          onChange={handleChange}
          className="absolute inset-0 cursor-pointer text-gray-700 opacity-0"
        >
          {languages.map((lang) => (
            <option className="text-dark" key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
        {/* Icône de dropdown */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="ml-auto h-5 w-5 text-gray-400 group-hover:text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg> */}
      </div>
    </div>
  );
};

export default LanguageSelect;
