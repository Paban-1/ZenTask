import React from "react";
// Import Components form Index.js
import { DrawOutlineButton } from "../../constants/index.js";
// Import NavItems form index.jsx
import { NAVITEMS, NAVITEMS2 } from "../../constants/index.jsx";
import {InzoIconZoomed} from '../../constants/index.js'
// Import NavLink for navigate
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-zinc-800 text-white flex justify-center items-center">
    <div className="border py-2 px-24 fixed top-0 left-0 right-0 bg-zinc-800 text-white z-50">
      <div className="flex justify-between items-center py-2">
        <div className="flex gap-6">
          {NAVITEMS.map((items) => (
            <div className="border border-black" key={items.id}>
              {items.label}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <img src={InzoIconZoomed} alt="" className="h-6 w-6"/>
          <h2 className="font-bold">ZenTask</h2>
        </div>

        <div className=" flex justify-between items-center gap-6">
          {NAVITEMS2.map((items) => (
            <div className="border border-black" key={items.id}>
              <p> {items.label} </p>
            </div>
          ))}

          <NavLink to="/user/v1/api/register">
            <DrawOutlineButton>Free Trial</DrawOutlineButton>
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
