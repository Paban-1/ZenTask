import React from "react";
import { FaqCart } from "../../constants/index.js";

const FaqSecion = () => {
  return (
    <div className="px-10 md:flex mt-8 text-white">
      <div className="md:w-1/2">
        <h2 className="md:text-7xl sm:text-5xl lg:text-7xl text-4xl font-extralight whitespace-nowrap tracking-tighter">
          Frequently asked <br />
          <span className="border-b-2"> questions.</span>
        </h2>
      </div>

      <div className="mt-4 md:w-1/2">
        <FaqCart />
      </div>
    </div>
  );
};

export default FaqSecion;
