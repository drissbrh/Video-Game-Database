import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./LoginScreen.css";

import { useDispatch, useSelector } from "react-redux";

import { login, reset } from "../redux/auth/authSlice";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, user, message } = auth;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    // Redirect when logged in
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [navigate, isError, isSuccess, user, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };
  return (
    <div className="loginscreen">
      <h1 className="signIn__header">Sign In</h1>
      {message && <p className="signIn__error">{message}</p>}
      {isLoading && <h1 className="spinner1"></h1>}
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
