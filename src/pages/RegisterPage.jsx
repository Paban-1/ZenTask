import React, { useState } from "react";
import { registerUser } from "../services/auth.js";
import { AnimatedTextBackground, InputField, Button } from "../index.js";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await registerUser(formData);
      setSuccessMessage("User registered successfully");
    } catch (error) {
      console.log(error);
      setError(error.massege);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen select-none flex justify-center items-center relative bg-[#F0660A]">
      <AnimatedTextBackground />

      <div className="rounded-md z-40">
        <form
          onSubmit={handleSubmit}
          className="bg-[#3E2723]/50 px-14 py-8 z-50 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h1 className="text-2xl font-semibold mb-6 text-center text-white">
            Create Account
          </h1>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placehholder="Enter your name"
            required
          />
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
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placehholder="Enter your Password"
            required
          />
          <Button type="submit" variant="primary" size="md" loading={loading}>
            Sign Up
          </Button>
        </form>
        <h1>{successMessage}</h1>
      </div>
    </div>
  );
};

export default RegisterPage;
