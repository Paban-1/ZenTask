
import React, { useState } from "react";
import { NAVITEM, BiMenu, BiX, FiMenu } from "../../constants";

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <nav className="fixed z-50 top-0 left-0 right-0 py-2 md:px-28 px-14 text-white font-extralight tracking-tighter select-none">
        <div className={`bg-zinc-900 border border-zinc-800 py-1 flex justify-between items-center px-2 ${menuOpen? "rounded-t-xl border-none ":"rounded-full "}`}>
          <div className="md:hidden flex">
            <button onClick={handleClick}>
              {menuOpen ? <BiX /> : <BiMenu />}
            </button>
          </div>
  
          <div className="px-2">
            <h2>ZenTask</h2>
          </div>
  
          <div className="md:flex gap-4 hidden">
            {NAVITEM.map((item) => (
              <div key={item.id}>
                <p className="cursor-pointer">{item.label}</p>
              </div>
            ))}
          </div>
  
          <div className="flex gap-2">
            <button className="bg-purple-500 px-6 py-1 rounded-full hidden md:flex">
              Login
            </button>
            <button className="bg-purple-500 px-6 py-1 rounded-full">
              Register
            </button>
          </div>
        </div>
  
        <div className={` ${menuOpen ? "block" : "hidden"} p-2 bg-zinc-900 rounded-b-xl`}>
          <div className=" mb-4 flex flex-col gap-2">
            {NAVITEM.map((item) => (
              <div key={item.id}>
                <p className="cursor-pointer">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex"> 
          <button className="bg-purple-500 px-6 py-1 rounded-full">
            Login
          </button>
          </div>
        </div>
      </nav>
    );
}

export default NavigationBar