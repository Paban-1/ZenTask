import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import {MdSettingsInputHdmi} from '../constents'
import { InzoIcon } from "../constents";
import { HoverEffect } from "../constents";
import { rotate } from "../constents";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const sideRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (sideRef.current && !sideRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if(open){
      document.addEventListener("mousedown", handleClickOutside)
    }else{
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return ()=>{
      document.removeEventListener("mousedown",handleClickOutside)
    }
  },[open]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] h-screen">
      {/* SideBar  */}
      <aside
        className={`bg-white text-black shadow p-4 fixed md:static h-full w-44 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-50 `}
        ref={sideRef}
      >
        <div className="flex justify-between items-center text-black mb-6">
          <div className="text-xl flex justify-center items-center font-bold">
            <img
              src={InzoIcon}
              alt="Logo"
              className="scale-105 h-10 rounded-md"
            />
            <label>Inz</label>
            <label className={`${rotate.rota}`}>o</label>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden border rounded-md bg-gray-300/30`}
          >
            {open ? (
              <BiX className="w-6 h-6" />
            ) : (
              <BiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        <nav className="flex flex-col gap-2 mb-8 border-t-2 pt-1 border-gray-200 font-semibold">
          <p className={`${HoverEffect.hover}`}>Home</p>
          <p className={`${HoverEffect.hover}`}>Analytics</p>
          <p className={`${HoverEffect.hover}`}>Settings</p>
        </nav>

        <nav className="flex flex-col gap-2 border-t-2 pt-1 border-gray-200 font-semibold">
          <p className={`${HoverEffect.hover}`}>About App</p>
          <p className={`${HoverEffect.hover}`}>Analytics</p>
          <p className={`${HoverEffect.hover}`}>Settings</p>
        </nav>
      </aside>

      <main className="bg-gray-100 p-6 md:ml-0 ml-0 ">
        <div className="md:hidden flex items-start justify-between mb-4">
          <button
            onClick={() => setOpen(!open)}
            className="border rounded-md bg-gray-300/30"
          >
            {open ? (
              <BiX className="w-6 h-6" />
            ) : (
              <BiMenu className="h-6 w-6" />
            )}
          </button>
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>

        {/* Content plachHolder  */}
        <div className="text-xl font-semibold text-gray-700">
          Contentwill appir here....................
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
