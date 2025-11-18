import React from "react";
import { FooterCart, FooterCartData, ZenLogo } from "../../constants/index.js";
import { version } from "../../../package.json";

const Footer = () => {
  return (
    <footer className="text-white md:px-16 px-10 border-t border-dotted py-8 mt-4 bg-zinc-900">
      <div className=" p-2 md:flex justify-between items-center ">
        <div className="mb-10">
          <div className="flex justify-start items-center">
            <img src={ZenLogo} alt="Logo" className="h-5 w-5"/>
            <p className="font-semibold">enTask</p>
          </div>
          <p className="flex flex-col text-md">
            ZenTask simplify work. Amplify focus.<span> </span>
            <span>An Ai powered task management </span>
            <span>app built for teams and creators.</span>
            <span>V {version}</span>
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
