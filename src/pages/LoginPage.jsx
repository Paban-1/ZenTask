import React, { useState, useEffect } from "react";
// Import Components form Index.js
import { loginThunk, InputField, Button } from "../constants/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, user, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === "succeeded" && user) {
      navigate("/dashboard");
    }
  }, [status, user, navigate]);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginThunk(form));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/dashboard");
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
            value={form.email}
            onChange={handleChange}
            placehholder="Enter your Email"
            required
          />
          <InputField
            label="Full Name"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placehholder="Enter your Password"
            required
          />
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Logging in..." : "Login"}
          </Button>
          {error && (
            <p className="text-red-600 text-sm text-center mt-2">{error}</p>
          )}

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
