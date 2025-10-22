// Import Pages & Components
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import Navbar from "../components/LandingPageItems/Navbar.jsx";
import HeroSection from "../components/LandingPageItems/HeroSection.jsx";
import Features from "../components/LandingPageItems/Features.jsx";
import Footer from "../components/LandingPageItems/Footer.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import ContentSection from "../components/DashboardItems/ContentSection.js";
import Logo from "../components/DashboardItems/Logo.js";
import Option from "../components/DashboardItems/Option.js";
import SidebarSection from "../components/DashboardItems/SidebarSection.js";
import TitleSection from "../components/DashboardItems/TitleSection.jsx";
import ToggleClose from "../components/DashboardItems/ToggleClose.jsx";

import AnimatedTextBackground from "../components/AnimatedTextBackground.jsx";
import InputField from "../components/ReuseItems/InputField.jsx";
import Button from "../components/ButtonsItems/Button.jsx";
import DrawOutlineButton from '../components/ButtonsItems/DrawOutlineButton.jsx';
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
  DrawOutlineButton,
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
