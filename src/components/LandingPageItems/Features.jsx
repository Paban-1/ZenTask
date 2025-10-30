import React from "react";
import {FeaturesData, FeatureCart} from "../../constants/index.js"

const Features = () => {
  return (
    <div className=" px-10  py-10 text-white">
      <div className="mb-6">
        <h2 className="md:text-7xl sm:text-5xl lg:text-7xl text-4xl font-extralight whitespace-nowrap tracking-tighter">
          Built for flow
          <br /> Designed for
          <span className="border-b-2 "> You. </span>
        </h2>
      </div>

      <div className="flex justify-end items-end">
        <div className="w-1/2 md:block hidden">
          <h2 className="flex items-center gap-2 text-center text-4xl font-extralight tracking-tighter">
            Calm is a feature too
          </h2>
        </div>
        <div className="md:w-1/2">
          {FeaturesData.map((item) => (
            <div className="" key={item.id}>
              <FeatureCart
                headding={item.headding}
                subheading={item.subheading}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
