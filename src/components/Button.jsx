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
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 disabled:bg-red-300",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400 disabled:bg-red-300",
  }[variant];

  const sizeStyle = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
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
