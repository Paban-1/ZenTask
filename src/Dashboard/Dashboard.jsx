import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import { logo } from "../constents";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] h-screen">
      {/* SideBar  */}
      <aside
        className={`bg-white text-black shadow p-4 fixed md:static h-full w-44 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center text-black mb-6">
          <div className="text-xl font-bold">
            <img src={logo} alt="" className="h-10 rounded-md scale-75" />
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? (
              <BiX className="w-6 h-6" />
            ) : (
              <BiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        <nav className="flex flex-col gap-4 mb-8 border-t-2 border-gray-200">
          <p>Home</p>
          <p>Analytics</p>
          <p>Settings</p>
        </nav>

        <nav className="flex flex-col gap-4 border-t-2 border-gray-200">
          <p>Home</p>
          <p>Analytics</p>
          <p>Settings</p>
        </nav>
      </aside>

      <main className="bg-gray-100 p-6 md:ml-0 ml-0">
        <div className="md:hidden flex items-start justify-between mb-4">
          <button onClick={() => setOpen(!open)} className="border ">
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
