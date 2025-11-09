import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import {
  AnimatedTextBackground,
  InputField,
  Button,
  registerThunk
} from "../constants/index.js";
// Import NavLink for Navigate
import { NavLink, useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
const navigate = useNavigate()
const dispatch = useDispatch()

const { status,user, error } = useSelector((state) => state.auth);

useEffect(() => {
  if (status === "succeeded" && user) {
    navigate("/dashboard");
  }
}, [status, user, navigate]);

const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
});

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const result = await dispatch(registerThunk(form));
  if (result.meta.requestStatus === "fulfilled") {
    navigate("/dashboard");
  }
};
  return (
    <div className="min-h-screen select-none flex justify-center items-center relative bg-[#F0660A]">
      {/* <AnimatedTextBackground /> */}

      <div className="rounded-md z-40">
        <form
          onSubmit={handleSubmit}
          className="bg-[#3E2723]/50 px-14 py-8 z-50 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h1 className="text-2xl font-semibold mb-6 text-center text-white">
            Create Account
          </h1>

          <InputField
            label="Full Name"
            name="name"
            type="text"
            value={form.name}
          onChange={handleChange}
            placehholder="Enter your name"
            required
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={form.email}
          onChange={handleChange}
            placehholder="Enter your Email"
            required
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placehholder="Enter your Password"
            required
          />
          <Button type="submit"
          disabled={status === "loading"} variant="primary" size="md">
            {status === "loading" ? "Registering..." : "Register"}
          </Button>

          <NavLink to="/login">
          <p className="underline text-white duration-200 hover:text-blue-400">Have an account ?</p>
        </NavLink>
        </form>
        {error && (
          <p className="text-red-600 text-sm text-center mt-2">{error}</p>
        )}
        <h1>{successMessage}</h1>
      </div>
      
    </div>
  );
};

export default RegisterPage;
