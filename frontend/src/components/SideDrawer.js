import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

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
        {userInfo ? (
          <>
            <li>
              <Link to="/profile">{userInfo.name.split(" ")[0]}</Link>
            </li>
            <li onClick={logoutHandler}>
              <Link>LOGOUT</Link>
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
