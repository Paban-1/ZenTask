// Import Pages & Components
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Features from "../components/Features.jsx";
import Footer from "../components/Footer.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import ContentSection from "../components/ContentSection.jsx";
import Logo from "../components/Logo.jsx";
import Option from "../components/Option.jsx";
import SidebarSection from "../components/SidebarSection.jsx";
import TitleSection from "../components/TitleSection.jsx";
import ToggleClose from "../components/ToggleClose.jsx";

import AnimatedTextBackground from "../components/AnimatedTextBackground.jsx";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import ProtactedRoute from "../utils/ProtactedRoute.js";

// Export all Imports
export {
  ProtactedRoute,
  ToggleClose,
  TitleSection,
  SidebarSection,
  Option,
  Logo,
  ContentSection,
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
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";
export {
  BiMenu,
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
};

// Import Images
import DashPic from "../assets/zendashboard.png";
import InzoIconZoomed from '../assets/InzoIconZoomed.png'
// Export Images
export { DashPic ,InzoIconZoomed};
