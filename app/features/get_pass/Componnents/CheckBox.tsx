import React from "react";

interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  setFieldValue: (field: string, value: any) => void;
  className?: string;
  formik: any;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked = false,
  className = "",
  setFieldValue,
}) => {
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(id, event.target.checked);
  };
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        required
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleCheckChange}
        className="h-5 w-5 rounded border-primary bg-gray-100 text-blue-600 outline-none transition duration-300 ease-in-out focus:border-primary"
      />
      <label
        htmlFor={id}
        className="cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
function setFieldValue(name: void, file: File | null) {
  throw new Error("Function not implemented.");
}
