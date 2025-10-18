import React from "react";
// Import Components form Index.js
import { Button } from "../constants/index.js";
// Import NavItems form index.jsx
import { NAVITEMS } from "../constants/index.jsx";
// Import NavLink for navigate
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border border-black px-4 py-4">
      <div className="border border-black flex justify-between items-center">
        <div>
          <h2>Logo</h2>
        </div>

        <div className="flex gap-6">
          {NAVITEMS.map((items) => (
            <div className="border border-black" key={items.id}>
              {items.label}
            </div>
          ))}
        </div>

        <div className="">
          <NavLink to="/user/v1/api/register">
          <Button variant="danger">Sing Up</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
