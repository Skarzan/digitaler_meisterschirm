import React, { useState } from "react";
import "./App.css";

import Party from "./components/party/Party";

import { heroes } from "./utils/heroManager";

const App = () => {
  const [party, setParty] = useState(heroes);

  const heroChangePoints = (heroId, newValue, type) => {
    let newState = [...party];
    newState.find(hero => hero.id === heroId)[type].current = newValue;
    setParty(newState);
  };

  return (
    <div className="App">
      <Party party={heroes} heroChangePoints={heroChangePoints}></Party>
    </div>
  );
};

export default App;
