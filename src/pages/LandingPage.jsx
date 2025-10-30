import React from "react";
import { Navbar, HeroSection, Features, Footer, ProductValuePage,Personas,FaqSection } from "../constants/index.js";

const LandingPage = () => {
  return (
    <div className="select-none">
      <Navbar />
      <HeroSection />
      <ProductValuePage/>
      <Features />
      <Personas/>
      <FaqSection/>
      <Footer />
    </div>
  );
};

export default LandingPage;
