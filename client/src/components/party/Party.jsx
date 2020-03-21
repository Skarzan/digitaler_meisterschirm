import React from "react";
import Hero from "./Hero/Hero";

const Party = ({ party, heroChangePoints }) => {
  return (
    <div className="Party">
      <h2>Gruppe</h2>
      <div className="partyHeroes">
        {party.map(hero => {
          return (
            <Hero
              key={hero.name}
              hero={hero}
              heroChangePoints={heroChangePoints}
            ></Hero>
          );
        })}
      </div>
    </div>
  );
};

export default Party;
