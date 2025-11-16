import React from "react";
import { LoginImg } from "../../constants";

const ImageCart = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background image */}
      <img
        src={LoginImg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover rounded-tr-full"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      {/* Text on top */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-start text-white px-10">
        <h1 className="text-6xl font-bold mb-2 hidden md:flex">Welcome again !!</h1>
        <p className="max-w-xl w-1/2 hidden md:flex">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id.consectetur adipiscing elit. Vivamus id.
        </p>
      </div>
    </div>
  );
};

export default ImageCart;
