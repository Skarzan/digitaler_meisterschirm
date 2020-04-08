import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginSession from "./components/LoginSession";
import GameSession from "./components/GameSession/GameSession";
import socketIO from "./utils/socketIO";

import SetHero from "./components/SetHero";

const App = () => {
  const [hero, setHero] = useState(false);
  const [sessionID, setSessionID] = useState("");

  const enterSession = (ID) => {
    socketIO.emit("enter session", ID, hero);
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
              <GameSession sessionID={sessionID} hero={hero}></GameSession>
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
