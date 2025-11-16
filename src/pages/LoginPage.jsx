import React, { useState, useEffect } from "react";
// Import Components form Index.js
import { loginThunk, InputField, Button } from "../constants/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { LoginImg, ImageCart } from "../constants";

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
    <div className="bg-gray-200 fixed inset-0 flex justify-center items-center h-screen">
      <div className="h-full md:w-1/2 w-screen">
        <ImageCart />
      </div>
      <div className="rounded-md h-full absolute inset-0 
                md:static md:flex md:items-center md:justify-center
                md:font-extralight
                md:text-black
                text-white
                flex items-center justify-center md:w-1/2 font-bold">
        <form
          onSubmit={handleSubmit}
          className="px-8 space-y-4 z-50 rounded-2xl w-full max-w-md"
        >
          <h1 className="text-2xl text-center tracking-tighter">
            Wallcome! to you  🔅
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
          <Button type="submit" size="cus" variant="row" disabled={status === "loading"}>
            {status === "loading" ? "Logging in..." : "Login"}
          </Button>
          {error && (
            <p className="text-red-600 text-sm text-center mt-2">{error}</p>
          )}

          <p className="text-start text-sm mt-4">
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
