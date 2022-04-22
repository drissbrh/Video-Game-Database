import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="registerscreen">
      <h1 className="register__header">Register</h1>
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
              type="name"
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
      </form>

      <button type="submit" className="register__btn">
        Register
      </button>
    </div>
  );
};

export default RegisterScreen;
