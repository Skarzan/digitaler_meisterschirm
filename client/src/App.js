import React, { useState, useEffect } from "react";
import "./App.css";

import socketIO from "./utils/socketIO";

import Party from "./components/party/Party";

import session from "./utils/gameSession";

const App = () => {
  useEffect(() => {
    socketIO.on("heroChangePoints", function(heroId, value, type) {
      heroUpdatePoints(heroId, value, type);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [party, setParty] = useState(session.party);

  const heroChangePoints = (heroId, newValue, type) => {
    heroUpdatePoints(heroId, newValue, type);
    socketIO.emit("heroChangePoints", heroId, newValue, type);
  };

  const heroUpdatePoints = (heroId, newValue, type) => {
    let newState = [...party];
    newState.find(hero => hero.id === heroId)[type].current = newValue;
    setParty(newState);
  };

  return (
    <div className="App">
      <Party party={party} heroChangePoints={heroChangePoints}></Party>
    </div>
  );
};

export default App;
