import React from "react";
import { Navbar, HeroSection, Features, Footer } from "../constants/index.js";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      {/* <HeroSection /> */}
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
