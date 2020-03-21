import React, { useState } from "react";
import "./App.css";

import Party from "./components/party/Party";

import session from "./utils/gameSession";

const App = () => {
  const [party, setParty] = useState(session.party);

  const heroChangePoints = (heroId, newValue, type) => {
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
