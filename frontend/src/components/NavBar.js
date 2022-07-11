import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const NavBar = ({ click }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

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
        {userInfo ? (
          <li>
            <Link to="/favourites">FAVOURITES</Link>
          </li>
        ) : (
          <></>
        )}
        {userInfo ? (
          <>
            <li>
              <Link to="/profile">{userInfo.name.split(" ")[0]}</Link>
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
