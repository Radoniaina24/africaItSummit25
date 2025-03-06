import React, { useState, useRef } from "react";

interface InputFileProps {
  label: string;
  name: string;
  setFieldValue: (field: string, value: File | null) => void;
  error?: string;
  touched?: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

const InputFile: React.FC<InputFileProps> = ({
  label,
  name,
  setFieldValue,
  error,
  touched,
  inputRef,
}) => {
  const [fileError, setFileError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0] || null;

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setFileError("Le fichier ne doit pas dépasser 2 Mo.");
        setFieldValue(name, null);

        return;
      }

      if (!ALLOWED_TYPES.includes(file.type)) {
        setFileError(
          "Seules les images JPG, PNG, GIF et WEBP sont autorisées.",
        );
        setFieldValue(name, null);
        return;
      }

      setFileError(null);
      setFieldValue(name, file);
    }
  };

  return (
    <div>
      <label className="mb-2.5 block text-sm font-medium text-black dark:text-white">
        {label}
      </label>
      <input
        ref={inputRef}
        name={name}
        type="file"
        accept={ALLOWED_TYPES.join(", ")}
        className="w-full cursor-pointer rounded border bg-white text-sm font-semibold text-gray-400 file:mr-4 file:cursor-pointer file:border-0 file:bg-gray-100 file:px-4 file:py-3 file:text-gray-500 file:hover:bg-gray-200"
        onChange={handleFileChange}
      />
      {fileError ? (
        <p className="mt-2 text-xs text-red-600">{fileError}</p>
      ) : touched && error ? (
        <p className="mt-2 text-xs text-red-600">{error}</p>
      ) : (
        <p className="mt-2 text-xs text-gray-400">
          Seuls les fichiers JPG, PNG, GIF et WEBP (max. 2 Mo) sont autorisés.
        </p>
      )}
    </div>
  );
};

export default InputFile;
