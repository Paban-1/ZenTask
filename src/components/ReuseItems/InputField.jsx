import React from "react";

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placehholder = "",
  required = false,
}) => {
  return (
    <div className="">
{/* <h2>Enter Email</h2> */}
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-extralight "
        >
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placehholder}
        required={required}
        className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
