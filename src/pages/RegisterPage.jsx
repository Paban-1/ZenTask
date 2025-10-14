import React, { useState } from "react";
import { registerUser } from "../services/auth.js";
import { TextCompo, InputField, Button } from "../index.js";

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
      setError(error.massege);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-blue-800 select-none flex justify-center items-center relative">
      {/* <TextCompo /> */}

      <div className="rounded-md z-50">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h1 className="text-2xl font-semibold mb-6 text-center ">
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
      </div>
    </div>
  );
};

export default RegisterPage;
