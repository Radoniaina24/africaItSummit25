import React from "react";
import { CountryDropdown } from "react-country-region-selector";
export default function InputCountry({
  label,
  id,
  value,
  onChange,
  error,
  touched,
  placeholder,
  fullWidth = true,
}: {
  id: string;
  placeholder?: string;
  label: string;
  value: string;
  onChange: (field: string, value: string | undefined) => void;
  error: any;
  touched: any;
  fullWidth?: boolean;
}) {
  function handleChange(country: string | undefined) {
    onChange(id, country);
  }
  const classNameInput =
    error && touched
      ? "bg-red-50 border outline-none border-red-500 text-red-500 placeholder-red-500 text-sm rounded focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full px-5 py-3   "
      : ` ${
          fullWidth ? "w-full" : ""
        }  rounded border-[1.5px] border-gray-300 bg-transparent text-sm px-5 py-2 font-normal outline-none transition focus:border-primary active:border-primary    py-3 `;
  const classNameLabel =
    error && touched
      ? "block mb-2 text-sm font-medium text-red-500 dark:text-red-500"
      : "mb-2 block text-sm font-medium text-black dark:text-white";
  //   console.log(value);
  return (
    <div className="">
      <label htmlFor={id} className={classNameLabel}>
        {label}
      </label>
      <CountryDropdown
        value={value}
        id={id}
        onChange={handleChange}
        className={classNameInput}
      />
      {error && touched ? (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium"></span> {error}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
