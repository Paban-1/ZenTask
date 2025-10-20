import React from "react";
import {DashPic} from '../constants/index.js'
const HeroSection = () => {
  return (
    <section className="border bg-zinc-800 min-h-screen ">
      <div className="border flex justify-between items-center mt-24">
        <div className="w-1/2 border h-full">
        
        </div>
        <div className="w-1/2 border h-full">
        <img src={DashPic} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
