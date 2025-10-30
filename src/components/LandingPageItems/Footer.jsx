import React from "react";
import { FooterCart, FooterCartData } from "../../constants/index.js";

const Footer = () => {
  return (
    <footer className="text-white md:px-16 px-10 border-t border-dotted py-8 mt-4">
      <div className=" p-2 md:flex justify-between items-center ">
        <div className="mb-10">
          <p className="font-extrabold">ZenTask</p>
          <p className="flex flex-col text-xl">
            Paasivuirekatu 4 A, <span>00530 Helsinki, India</span>
          </p>
        </div>
        <div className=" flex gap-14">
          {FooterCartData.map((item) => (
            <div key={item.id} className=" flex">
              <FooterCart
                section={item.section}
                linkone={item.linkone}
                linktwo={item.linktwo}
                linkthree={item.linkthree}
                linkfour={item.linkfour}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
