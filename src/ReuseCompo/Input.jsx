import React from "react";

const Input = ({ label, type = "", value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default Input;
