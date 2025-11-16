import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
}) => {
  const baseStyle =
    "rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2";
  const variantStyle = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400 disabled:bg-blue-300",
    secondary:
      "bg-white text-black rounded-full hover:bg-black hover:shadow-white hover:shadow-md hover:text-white focus:ring-gray-400 disabled:bg-red-300",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400 disabled:bg-red-300",
    row: "bg-black text-white border border-black hover:bg-transparent hover:text-black hover:border-gray-600 hover:border-[1px]  disabled:bg-red-300 select-none",
  }[variant];

  const sizeStyle = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    cus:"px-11 py-1 text-base"
  }[size];
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
    >
      {loading ? "Processing.." : children}
    </button>
  );
};

export default Button;
