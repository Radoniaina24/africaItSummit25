import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function InputPhone({
  label,
  value,
  onChange,
  error,
  touched,
  name,
}: {
  name: string;
  label: string;
  value: string;
  onChange: any;
  error: any;
  touched: any;
}) {
  const [values, setValue] = useState();
  function handleChange(e) {
    onChange(name, e);
  }
  return (
    <div className="">
      <label
        htmlFor="phone"
        className={`mb-2.5 block text-sm font-medium  ${error && touched ? "text-red-500" : "text-gray-700"}`}
      >
        {label}
      </label>
      <div
        className={`rounded  border border-gray-300 px-5 ${error && touched ? "border-red-500" : "border-gray-300"}`}
      >
        <PhoneInput
          international
          defaultCountry="MG"
          value={values}
          onChange={handleChange}
          className={`text-dark   ${error && touched ? "errorPhone" : ""} py-3 focus:border-none focus:outline-none`}
          placeholder="Inclure le code international"
        />
      </div>

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

export default InputPhone;
