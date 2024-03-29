import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/auth/authSlice";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passMessage, setPassMessage] = useState(null);

  const auth = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, user, message } = auth;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const userData = { name, email, password };
      dispatch(registerUser(userData));
    } else {
      setPassMessage("Passwords do not match");
    }
  };
  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }
  }, [isSuccess, user, navigate]);
  return (
    <div className="registerscreen">
      <h1 className="register__header">Register</h1>
      {passMessage && <p className="signIn__error">{passMessage}</p>}
      {message && <p className="signIn__error">{message}</p>}
      {isLoading && <h5 className="spinner2"></h5>}
      <form onSubmit={handleSubmit} className="form__elements1">
        <div className="username__section">
          <label>Name</label>
          <input
            type="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className="username__section">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="username__section">
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
        <div className="username__section">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <p className="login__link">
          Already have an account ?{"  "}
          <Link to="/login">Sign In</Link>
        </p>
        <button type="submit" className="register__btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
