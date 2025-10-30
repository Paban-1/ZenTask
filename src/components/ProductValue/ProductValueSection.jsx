import React from "react";
import { ProductValue, ProductValuCart } from "../../constants/index.js";

const ProductValueSection = () => {
  return (
    <div className="w-full text-white overflow-hidden px-10 py-4">
      <div className="mb-12 ">
        <h2 className="md:text-7xl sm:text-5xl lg:text-7xl text-4xl font-extralight whitespace-nowrap tracking-tighter">
          Workflow is a canvas <br /> ZenTask is your
          <span className="border-b-2"> brush. </span>
        </h2>
      </div>
      <div className="md:flex flex-wrap gap-4 justify-start items-center ">
        {ProductValue.map((item) => (
          <div key={item.id}>
            <ProductValuCart des={item.des} ren={item.ren} link={item.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductValueSection;
