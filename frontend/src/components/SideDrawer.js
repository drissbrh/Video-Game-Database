import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux toolkit/auth/authSlice";

const SideDrawer = ({ show, click }) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/profile">{user.name}</Link>
            </li>
            <li onClick={logoutHandler} className="log__out">
              LOGOUT
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">SIGN IN</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideDrawer;
