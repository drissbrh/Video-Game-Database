import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useState } from "react";

//Screens
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";

import FavouritesScreen from "./screens/FavouritesScreen";

//components
import NavBar from "./components/NavBar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="App">
      <Router>
        <NavBar
          click={() => {
            setSideToggle(true);
          }}
        />
        <Backdrop
          show={sideToggle}
          click={() => {
            setSideToggle(false);
          }}
        />
        <SideDrawer
          show={sideToggle}
          click={() => {
            setSideToggle(false);
          }}
        />

        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/page/:pageNumber" component={HomeScreen} />
          <Route path="/game/:id" component={GameScreen} />
          <Route path="/favourites" component={FavouritesScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/register" component={RegisterScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
