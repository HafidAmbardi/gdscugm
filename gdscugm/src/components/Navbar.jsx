import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="desktop-main-menu">
      <ul>
        <li>
          <Link to="falcon_9">Falcon 9</Link>
        </li>
        <li>
          <Link to="falcon_heavy">Falcon Heavy</Link>
        </li>
        <li>
          <Link to="dragon">Dragon</Link>
        </li>
        <li>
          <a href="#">Starship</a>
        </li>
        <li>
          <a href="#">Human Spacelight</a>
        </li>
        <li>
          <a href="#">Rideshare</a>
        </li>
        <li>
          <a href="#">Starlink</a>
        </li>
        <li>
          <li>
            <Link to="bonus">Bonus</Link>
          </li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
