import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
const TopBar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div id="overlay" className={!menu ? "" : "overlay-show"}></div>
      <div
        id="mobile-menu"
        className={`${menu ? "show-menu" : ""} mobile-main-menu`}
      >
        <ul>
          <li>
            <a href="#">Mission</a>
          </li>
          <li>
            <a href="#">Launches</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Updates</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>

          <li className="mobile-only">
            <a href="falcon9.jsx">Falcon 9</a>
          </li>
          <li className="mobile-only">
            <a href="falcon-heavy.html">Falcon Heavy</a>
          </li>
          <li className="mobile-only">
            <a href="dragon.html">Dragon</a>
          </li>
          <li className="mobile-only">
            <a href="#">Starship</a>
          </li>
          <li className="mobile-only">
            <a href="#">Human Spacelight</a>
          </li>
          <li className="mobile-only">
            <a href="#">Rideshare</a>
          </li>
          <li className="mobile-only">
            <a href="#">Starlink</a>
          </li>
          <li className="mobile-only">
            <a href="#">Shop</a>
          </li>
        </ul>
      </div>
      <header className="main-header">
        <div className="logo">
          <Link to="/">
            <img src="img/logo.png" alt="SpaceX" />
          </Link>
        </div>
        <Navbar />
      </header>

      <button
        id="menu-btn"
        className={`${menu ? "open" : ""} hamburger`}
        onClick={() => {
          setMenu(!menu);
        }}
        type="button"
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
  );
};

export default TopBar;
