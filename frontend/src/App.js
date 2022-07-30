import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

//Screens
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import FavouritesScreen from "./screens/FavouritesScreen";

//components
import NavBar from "./components/NavBar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <div className="App">
        <NavBar click={() => setSideToggle(true)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route exact path="/page/:pageNumber" element={<HomeScreen />} />
          <Route path="/login" exact element={<LoginScreen />} />
          <Route path="/register" exact element={<RegisterScreen />} />
          <Route path="/profile" exact element={<ProfileScreen />} />
          <Route path="/favourites" exact element={<FavouritesScreen />} />
          <Route path="/game/:id" exact element={<GameScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
