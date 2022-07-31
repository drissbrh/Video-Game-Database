import React, { useState } from "react";
import "./ProfileScreen.css";
import kratos from "../screens/Kratos.webp";

import { useDispatch, useSelector } from "react-redux";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [birth, setBirth] = useState("");
  const dispatch = useDispatch();

  // const gameList = useSelector((state) => state.gameList);
  // const { loading, error, games } = gameList;

  const auth = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, user, message } = auth;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="profilescreen">
      <form className="profilescreen__inside" onSubmit={handleSubmit}>
        {" "}
        <h2>Personal Info</h2>
        {isLoading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : isError ? (
          <h3>{isError}</h3>
        ) : (
          <>
            {
              <>
                <div className="profile__details">
                  <img src={kratos} />
                  <p>{user.name.split(" ")[0].toUpperCase()}</p>
                </div>
                <>
                  <div className="name__section">
                    <label>Name</label>
                    <input
                      type="name"
                      placeholder="Enter your Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="name__section">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Change your Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="name__section">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      placeholder="2022/02/02"
                      value={birth}
                      onChange={(e) => {
                        setBirth(e.target.value);
                      }}
                    />
                  </div>
                  <div className="name__section">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Enter your new password"
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                    />
                  </div>
                  <button type="submit">Update Profile</button>
                </>
              </>
            }
          </>
        )}
      </form>
    </div>
  );
};

export default ProfileScreen;
