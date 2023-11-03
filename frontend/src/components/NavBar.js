import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/authSlice";

const NavBar = ({ click }) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  const logoutHandler = () => {
    dispatch(logout());
  };
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
        {user ? (
          <li>
            <Link to="/favourites">FAVOURITES</Link>
          </li>
        ) : (
          <></>
        )}
        {user ? (
          <>
            <li>
              <Link to="/profile">
                {user && user.name && user.name.split(" ")[0].toUpperCase()}
              </Link>
            </li>
            <li onClick={logoutHandler}>
              <p>LOGOUT</p>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">SIGN IN</Link>
          </li>
        )}
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
