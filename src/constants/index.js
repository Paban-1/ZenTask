// Import Pages & Components
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import Navbar from "../components/LandingPageItems/Navbar.jsx";
import HeroSection from "../components/LandingPageItems/HeroSection.jsx";
import Features from "../components/LandingPageItems/Features.jsx";
import Footer from "../components/LandingPageItems/Footer.jsx";
import ProductValuePage from "../components/LandingPageItems/ProductValue.jsx";
import Personas from "../components/LandingPageItems/Personas.jsx";
import FaqSection from "../components/LandingPageItems/FaqSecion.jsx";

// Import All Dashboard Components
import Dashboard from "../pages/Dashboard.jsx";
import ContentSection from "../components/DashboardItems/ContentSection.jsx";
import Logo from "../components/DashboardItems/Logo.jsx";
import Option from "../components/DashboardItems/Option.jsx";
import SidebarSection from "../components/DashboardItems/SidebarSection.jsx";
import TitleSection from "../components/DashboardItems/TitleSection.jsx";
import ToggleClose from "../components/DashboardItems/ToggleClose.jsx";

// Import Dashboard Pages & export
import Setting from "../components/DashboardPages/Setting.jsx"
import DashboardIndexPage from "../components/DashboardPages/DashboardIndexPage.jsx";

// Import All Navbar Components
import ShiftingDropDown from "../components/NavBarItems/ShiftingDropDown.jsx";
import Bridge from "../components/NavBarItems/Bridge.jsx";
import Blog from "../components/NavBarItems/Blog.jsx";
import Content from "../components/NavBarItems/Content.jsx";
import Nub from "../components/NavBarItems/Nub.jsx";
import Pricing from "../components/NavBarItems/Pricing.jsx";
import Products from "../components/NavBarItems/Products.jsx";
import Tab from "../components/NavBarItems/Tab.jsx";
import Tabs from "../components/NavBarItems/Tabs.jsx";
import ProductValueSection from "../components/ProductValue/ProductValueSection.jsx";
import NavigationBar from "../components/NavBarItems/NavigationBar.jsx";

// ReUse Components
import AnimatedTextBackground from "../components/AnimatedTextBackground.jsx";
import InputField from "../components/ReuseItems/InputField.jsx";
import Button from "../components/ButtonsItems/Button.jsx";
import DrawOutlineButton from "../components/ButtonsItems/DrawOutlineButton.jsx";
import ProductValuCart from "../components/ReuseItems/ProductValueCart.jsx";
import ProtectedRoute from "../utils/ProtectedRoute.jsx";
import FeatureCart from "../components/ReuseItems/FeatureCart.jsx";
import PersonasCart from "../components/ReuseItems/PersonasCart.jsx";
import FaqCart from "../components/ReuseItems/FaqCart.jsx";
import FooterCart from "../components/ReuseItems/FooterCart.jsx";

// Export all Imports
export {
  DashboardIndexPage,
  Setting,
  NavigationBar,
  FooterCart,
  FaqCart,
  FaqSection,
  PersonasCart,
  Personas,
  FeatureCart,
  ProductValuePage,
  ProductValueSection,
  ProductValuCart,
  Tabs,
  Tab,
  Products,
  Pricing,
  Nub,
  Content,
  Blog,
  Bridge,
  ShiftingDropDown,
  ProtectedRoute,
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

// Import Icons form react-Icons
import { BiMenu ,BiX} from "react-icons/bi";
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMenu,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
  FiArrowRight,
  FiBarChart2,
  FiPieChart,
  FiSettings
} from "react-icons/fi";
export {
  FiMenu,
  BiX,
  FiPieChart,
  FiBarChart2,
  FiArrowRight,
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
  FiSettings
};

// Import Images
import DashPic from "../assets/zendashboard.png";
import InzoIconZoomed from "../assets/InzoIconZoomed.png";
import DashBoardPic from "../assets/zendashboardd.png";
import MainLogo from "../assets/Logo.png";
import ZenLogo from "../assets/ZenLogo.png"

// Coustomer Imges
import img1 from "../assets/Imgs/img1.png";
import img2 from "../assets/Imgs/img2.png";
import img3 from "../assets/Imgs/img3.png";
import img4 from "../assets/Imgs/img4.png";

export { img1, img2, img3, img4 };

// Export Images
export { DashPic, InzoIconZoomed, DashBoardPic, MainLogo,ZenLogo };

// Import RTK Store & Export
import {store} from "../store/store.js"
import {loginThunk, logoutThunk, registerThunk, fetchCurrentUserThunk} from "../store/authSlice.js"

export {store, loginThunk,logoutThunk, registerThunk,fetchCurrentUserThunk }

// Import AnimationsItems form Feamer Motion
import { AnimatePresence, motion } from "framer-motion";
// Export Framer motion
export { AnimatePresence, motion };

// Cart Data
export const ProductValue = [
  {
    id: 1,
    des: "ZenTask isn't just software it's shift in how people work. From marketers to engineers, creators to collaborators, our users are finding clarity in the chaos.",
    ren: "12 users",
    link: "Read the blog",
    no: "01.",
    text: "Social Media",
    text2: "Marketing",
    color: "bg-[#9450a1]",
  },
  {
    id: 2,
    des: "Every workflow tells a story. These are the voices of people who've found their rhythm with ZenTask.",
    ren: "64k views",
    link: "See the interview",
    no: "02.",
    text: "Marketing",
    text2: "Strategy",
    color: "bg-[#75bd3a]",
  },
  {
    id: 3,
    des: "We built ZenTask for people who care about their craft. Here's how it's helping them stay focused, stay calm, and stay ahead.",
    ren: "12k views",
    link: "See the case study",
    no: "03.",
    text: "Data and",
    text2: "Analytics",
    color: "bg-[#dd902a]",
  },
  {
    id: 4,
    des: "From scattered to streamlined zenTask is helping teams and individuals reclaim their time and rediscover their flow.",
    ren: "7.2k followers",
    link: "Read the blog",
    no: "04.",
    text: "Search Engine",
    text2: "Optimization",
    color: "bg-[#fffdfa]",
  },
];

export const FeaturesData = [
  {
    id: 1,
    headding: "Smart task automation",
    subheading:
      "Let ZenTask handle the repetitive stuff. Create rules, triggers, and recurring actions that keep your workflow moving even when you're not.",
  },
  {
    id: 2,
    headding: "Collaborative workspaces",
    subheading:
      "Where teams find their rhythm. Assign tasks, share updates, and comment in real time. ZenTask turns collaboration into momentum.",
  },
  {
    id: 3,
    headding: "Minimalist interface",
    subheading:
      "Clarity by design. A clean, distraction free layout that helps you focus on what matters no clutter, no noise.",
  },
  {
    id: 4,
    headding: "Priority & deadline control",
    subheading:
      "Stay ahesd, not overwhelmed. Set priorities, due dates, and reminders that keep your goals aligned and your mind clear.",
  },
];

export const PersonasData = [
  {
    id: 1,
    roal: "Corporates",
    sub: "Make You'er Life easy",
    color: "bg-[#3540FA]",
    img: img1,
  },
  {
    id: 2,
    roal: "Teacher",
    sub: "Make You'er Life easy",
    color: "bg-[#FF7826]",
    img: img2,
  },
  {
    id: 3,
    roal: "Personal",
    sub: "Make You'er Life easy",
    color: "bg-[#E5E1FC]",
    img: img3,
  },
  {
    id: 4,
    roal: "Content Creators",
    sub: "Make You'er Life easy",
    color: "bg-[#797ED9]",
    img: img4,
  },
];

// Footer Cart Section
export const FooterCartData = [
  {
    id: 1,
    section: "Features",
    linkone: "Smart Prioritization",
    linktwo: "Auto Scheduling",
    linkthree: "Analytics Dashboard",
    linkfour:"Secure & Synced Everywhere"
  },
  {
    id: 2,
    section: "Use Cases",
    linkone: "Freelancers & Creators",
    linktwo: "Developers",
    linkthree: "Students",
    linkfour:"Teams & Startups"
  },
  {
    id: 3,
    section: "Social Media",
    linkone: "GitHub",
    linktwo: "Linkedin",
    linkthree: "Twitter",
    linkfour: "Youtube",
  },
];

// Import NavItems & export 
export const NAVITEM =[
  {id:1, label:"Feature"},
  {id:2, label:"About Us"},
  {id:3, label:"Pricing"},
  {id:4, label:"Contact"}
]