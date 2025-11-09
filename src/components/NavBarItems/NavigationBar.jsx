
import React, { useState } from "react";
import { NAVITEM, BiMenu, BiX, FiMenu } from "../../constants";
import {NavLink, useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

const NavigationBar = () => {
  const navigate=useNavigate()

  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const handleMainButton = () => {
    if (user) navigate("/dashboard");
    else navigate("/register");
  };

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  
    return (
      <nav className="fixed z-50 top-0 left-0 right-0 py-2 md:px-28 px-14 text-white font-extralight tracking-tighter select-none">
      <div className={`bg-zinc-800 border border-zinc-700 py-1 flex justify-between items-center px-2 ${menuOpen? "rounded-t-xl border-none ":"rounded-full "}`}>
        <div className="md:hidden flex">
          <button onClick={handleClick}>
            {menuOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>

        <div className="px-2">
          <h2>Logo</h2>
        </div>

        <div className="md:flex gap-4 hidden">
          {NAVITEM.map((item) => (
            <div key={item.id}>
              <p className="cursor-pointer">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          {!user && (
            <NavLink to="/login" className={`bg-purple-500 px-6 py-1 rounded-full hidden md:flex`}>
            Login
          </NavLink>
          )}
          
          <button
            onClick={handleMainButton}
            className="bg-purple-500 px-6 py-1 rounded-full"
          >
            {user ? "Dashboard" : "Register"}
          </button>
        </div>
      </div>

      <div className={` ${menuOpen ? "block" : "hidden"} p-2 bg-zinc-800 rounded-b-xl`}>
        <div className=" mb-4 flex flex-col gap-2">
          {NAVITEM.map((item) => (
            <div key={item.id}>
              <p className="cursor-pointer">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="flex"> 
        <NavLink to="/login" className={`bg-purple-500 px-6 py-1 rounded-full`}>
          {!user? "Login":"dashboard"}
        </NavLink>
        </div>
      </div>
    </nav>
    );
}

export default NavigationBar