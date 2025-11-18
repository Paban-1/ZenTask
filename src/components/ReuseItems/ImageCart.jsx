import React from "react";
import { LoginImg } from "../../constants";

const ImageCart = ({Image, textVariants,items,Titile, subTextstyle,subText}) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background image */}
      <img
        src={Image}
        alt="background"
        className={`${textVariants} absolute inset-0 w-full h-full object-cover`}
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      {/* Text on top */}
      <div className={`relative z-10 flex flex-col justify-center ${items} h-full text-start text-white px-10`}>
        <h1 className="text-6xl font-bold mb-2 hidden md:flex md:flex-col">{Titile}

          {/* <span className="text-4xl">
            Long time no see
          </span> */}
        </h1>
        <p className={`max-w-xl w-1/2 hidden md:flex ${subTextstyle}`}>{subText}
          
        </p>
      </div>
    </div>
  );
};

export default ImageCart;
