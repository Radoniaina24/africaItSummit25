import React from "react";
import clsx from "clsx";
type ButtonProps = {
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};
const sizeClasses = {
  xs: "px-3 py-2 text-xs",
  sm: "px-3 py-2 text-sm",
  base: "px-5 py-2.5 text-sm",
  lg: "px-5 py-3 text-base",
  xl: "px-6 py-3.5 text-base",
};

const Button: React.FC<ButtonProps> = ({
  size = "base",
  children,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "rounded-full bg-blue-700 font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </button>
  );
};
export default Button;
