import React from "react";
import { PersonasCart, PersonasData } from "../../constants/index.js";

const Personas = () => {
  return (
    <div className="p-2 w-full  md:flex justify-center items-start px-10 text-white">
      <div className="md:w-1/2">
        <h2 className="md:text-7xl sm:text-5xl lg:text-7xl text-4xl font-extralight whitespace-nowrap tracking-tighter">
          It's never too late to <br /> try something{" "}
          <span className="border-b-2"> new.</span>
        </h2>

        <p className="mt-10 mb-8 text-xl tracking-tighter md:w-2/3 text-[#8a898b]">
          Three paths lead t knowlede: the path of reflection is the noblest,
          the path of imitation is the essiest. and the path of experience is
          the bifferest.
        </p>

        <p className="mt-10 mb-8 text-xl tracking-tighter md:w-2/3 text-[#8a898b]">
          Three paths lead t knowlede: the path of reflection is the noblest,
          the path of imitation is the essiest. and the path of experience is
          the bifferest.
        </p>
      </div>
      <div className="md:w-1/2  overflow-hidden">
        <div className="flex justify-center flex-wrap rounded-md">
          {PersonasData.map((item) => (
            <div key={item.id}>
              <PersonasCart
                color={item.color}
                roal={item.roal}
                img={item.img}
                sub={item.sub}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Personas;
