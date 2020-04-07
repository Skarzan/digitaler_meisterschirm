import React from "react";
import Hero from "./Hero/Hero";

import "./Party.scss";

const Party = ({ name, party, heroChangePoints, heroChangeSchips }) => {
  return (
    <div className="Party">
      <h2>{name}</h2>
      <div className="partyHeroes">
        {party.map((hero) => {
          return (
            <Hero
              key={hero.id}
              hero={hero}
              heroChangePoints={heroChangePoints}
              heroChangeSchips={heroChangeSchips}
            ></Hero>
          );
        })}
      </div>
    </div>
  );
};

export default Party;
