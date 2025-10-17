// Import Pages & Components
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Features from "../components/Features.jsx";
import Footer from "../components/Footer.jsx";
import Dashboard from "../pages/Dashboard.jsx";

import AnimatedTextBackground from "../components/AnimatedTextBackground.jsx";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";

// Export all Imports
export {
  RegisterPage,
  LoginPage,
  LandingPage,
  Navbar,
  HeroSection,
  Features,
  Footer,
  Dashboard,
  AnimatedTextBackground,
  InputField,
  Button,
};

// Import All auth methods
import {
  registerUser,
  loginUser,
  logOutUser,
  getCurrentUser,
} from "../services/auth.js";

export { registerUser, loginUser, logOutUser, getCurrentUser };


// Import Icons form react-Icons
import { BiMenu } from "react-icons/bi";
export {BiMenu}