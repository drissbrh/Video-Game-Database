import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="">
          VGDB
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
        <li>
          <Link to="/info">Account</Link>
        </li>
      </ul>
      <div className="threeLines" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
