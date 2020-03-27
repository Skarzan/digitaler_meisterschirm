import React from "react";
import Bar from "./Bar";

const Hero = ({ hero, heroChangePoints }) => {
  const changeHeroPoints = (newValue, type) => {
    heroChangePoints(hero.id, newValue, type);
  };

  return (
    <div className="Hero">
      <h1>{hero.name}</h1>

      <Bar
        max={hero.LeP.max}
        current={hero.LeP.current}
        type="LeP"
        changeCurrentPoints={changeHeroPoints}
      ></Bar>

      {/*SHow if hero has AsP*/}
      {hero.AsP.max !== 0 && (
        <Bar
          max={hero.AsP.max}
          current={hero.AsP.current}
          type="AsP"
          changeCurrentPoints={changeHeroPoints}
        ></Bar>
      )}

      {/*SHow if hero has KaP*/}
      {hero.KaP.max !== 0 && (
        <Bar
          max={hero.KaP.max}
          current={hero.KaP.current}
          type="KaP"
          changeCurrentPoints={changeHeroPoints}
        ></Bar>
      )}
      <div className="heroSchips">{`Schips: ${hero.schips.current}/${hero.schips.max}`}</div>
      <div className="heroMoney">{`Geldbörse: ${hero.money}`}</div>
    </div>
  );
};

export default Hero;
