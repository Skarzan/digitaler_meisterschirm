import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginSession from "./components/LoginSession";
import GameSession from "./components/GameSession/GameSession";

import SetHero from "./components/SetHero";

const App = () => {
  const [hero, setHero] = useState(false);
  const [sessionID, setSessionID] = useState("");

  const enterSession = (ID) => {
    setSessionID(ID);
  };

  const pickHero = (playerHero) => {
    setHero(playerHero);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            {sessionID ? (
              <GameSession sessionID={sessionID}></GameSession>
            ) : !hero ? (
              <SetHero submitHero={pickHero}></SetHero>
            ) : (
              <LoginSession submitSessionId={enterSession}></LoginSession>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
