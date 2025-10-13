import React, { useState } from "react";
import { registerUser } from "../services/auth.js";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const response = registerUser(formData);
    if (response) {
      setLoading(false);
    } else {
      setError("RegisterUser Error");
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen p-2 border-[2px] border-black text-black select-none">
      <div className="border border-black">
        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            className="border border-black p-4"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="border border-black p-4"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="border border-black p-4"
          />

          <button
            className="border border-black p-4 hover:bg-blue-400 hover:rounded-xl hover:text-white"
            type="submit"
          >
            {loading ? "Registaring...." : "Register"}
          </button>
        </form>
        <div className="border p-8 ">{error}</div>
      </div>
    </div>
  );
};

export default RegisterPage;
