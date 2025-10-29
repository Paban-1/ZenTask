import React from "react";
import { Navbar, HeroSection, Features, Footer, ProductValuePage } from "../constants/index.js";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <ProductValuePage/>
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
