import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useState } from "react";

//Screens
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import PersonalInfos from "./screens/PersonalInfos";
import FavouritesScreen from "./screens/FavouritesScreen";

//components
import NavBar from "./components/NavBar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import AccountScreen from "./screens/AccountScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(1);
  return (
    <div className="App">
      <Router>
        <NavBar
          click={() => {
            setSideToggle(2);
          }}
        />
        <Backdrop
          show={sideToggle}
          click={() => {
            setSideToggle(1);
          }}
        />
        <SideDrawer
          show={sideToggle}
          click={() => {
            setSideToggle(1);
          }}
        />

        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/game/:id" component={GameScreen} />
          <Route path="/favourites" component={FavouritesScreen} />
          <Route path="/info" component={AccountScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
