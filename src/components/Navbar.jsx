import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/">
            <li></li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
