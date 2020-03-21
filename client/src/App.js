import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";

import { heroes } from "./utils/heroManager";

const App = () => {
  return (
    <div className="App">
      <Hero hero={heroes[0]}></Hero>
    </div>
  );
};

export default App;
