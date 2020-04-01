import React from "react";
import Bar from "./Bar";
import Schips from "./Schips";
import Money from "./Money";

import "./Hero.scss";

const Hero = ({ hero, heroChangePoints, heroChangeSchips }) => {
  const changeHeroPoints = (newValue, type) => {
    heroChangePoints(hero.id, newValue, type);
  };

  const changeHeroSchips = newValue => {
    heroChangeSchips(hero.id, newValue);
  };

  return (
    <div className="Hero">
      <div className="heroName">{hero.name}</div>
      <div className="heroBody">
        <div>
          <Bar
            max={hero.LeP.max}
            current={hero.LeP.current}
            type="LeP"
            changeCurrentPoints={changeHeroPoints}
          ></Bar>

          {/*Show if hero has AsP*/}
          {hero.AsP.max !== 0 && (
            <Bar
              max={hero.AsP.max}
              current={hero.AsP.current}
              type="AsP"
              changeCurrentPoints={changeHeroPoints}
            ></Bar>
          )}

          {/*Show if hero has KaP*/}
          {hero.KaP.max !== 0 && (
            <Bar
              max={hero.KaP.max}
              current={hero.KaP.current}
              type="KaP"
              changeCurrentPoints={changeHeroPoints}
            ></Bar>
          )}
        </div>
        <Money money={hero.money}></Money>
        <Schips
          schips={hero.schips}
          changeCurrentSchips={changeHeroSchips}
        ></Schips>
      </div>
    </div>
  );
};

export default Hero;
