import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AnimatedTextBackground,
  InputField,
  Button,
  registerThunk,
  ImageCart,
  RegisterImg,
} from "../constants/index.js";
// Import NavLink for Navigate
import { NavLink, useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status, user, error } = useSelector((state) => state.auth);

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
    <div className="bg-gray-300 fixed inset-0 flex justify-center items-center h-screen">
      {/* <AnimatedTextBackground /> */}

      <div
        className="rounded-md h-full absolute inset-0 
                md:static md:flex md:items-center md:justify-center
                md:font-extralight
                md:text-black
                text-white
                flex items-center justify-center md:w-1/2 font-bold"
      >
        <form
          onSubmit={handleSubmit}
          className="px-14 space-y-4 z-50 rounded-2xl w-full max-w-md"
        >
          <h1 className="text-2xl font-semibold mb-6 text-center">
            Create Account🔅
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
          <div >
            <Button
              type="submit"
              disabled={status === "loading"}
              variant="row"
              size="cus"
            >
              {status === "loading" ? "Registering..." : "Register"}
            </Button>

            <div className="flex justify-start items-center">
              <p className="text-start text-sm mt-4">
                Have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
        {error && (
          <p className="text-red-600 text-sm text-center mt-2">{error}</p>
        )}
      </div>
      <div className="h-full md:w-1/2 w-screen">
        <ImageCart
          Image={RegisterImg}
          textVariants="rounded-tl-full"
          items="items-end"
          subTextstyle="text-end"
          Titile="Join new zon now"
          subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id.consectetur adipiscing elit. Vivamus id."
        />
      </div>
    </div>
  );
};

export default RegisterPage;
