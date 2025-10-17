import React, { useState } from "react";
// Import Components form Index.js
import { loginUser, InputField, Button } from "../constants/index.js";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [tryError, setTryError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const result = await loginUser(formData);
      if (result.success) {
        // Call Routing if user success fully login
      } else {
        setError(`${result.message}` || "Invalid Pass");
      }
    } catch (error) {
      setTryError(`login Failed : ${error.message}`);
      console.log(error);
    }
  };

  return (
    <div className="border border-black flex justify-center items-center p-4">
      <div className="rounded-md z-40">
        <form
          onSubmit={handleSubmit}
          className="bg-[#3E2723]/50 px-14 py-8 z-50 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h1 className="text-2xl font-semibold mb-6 text-center text-white">
            Login 🔅
          </h1>
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placehholder="Enter your Email"
            required
          />
          <InputField
            label="Full Name"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placehholder="Enter your Password"
            required
          />
          <Button type="submit">Login</Button>
          {error && <div>{error}</div>}
          {tryError && <div className="text-red-700 font-bold">{tryError}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
