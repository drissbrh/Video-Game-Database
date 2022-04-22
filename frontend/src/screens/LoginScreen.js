import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginScreen.css";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };
  return (
    <div className="loginscreen">
      <h1 className="signIn__header">Sign In</h1>
      {error && <h1>{error}</h1>}
      {loading && <h1 className="spinner">.......</h1>}
      <form onSubmit={handleSubmit} className="form__elements">
        <div className="email__section">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="email__section">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <p className="register__link">
          New to the platfrom ?{"  "}
          <Link to="/register">Register</Link>
        </p>
        <button type="submit" className="signin__btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
