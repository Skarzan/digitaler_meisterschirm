import React from "react";

const Hero = ({ hero, increase }) => {
  return (
    <div className="Hero">
      <h1>{hero.name}</h1>

      <div className="heroLeP">{`LeP: ${hero.LeP.current}/${hero.LeP.max}`}</div>

      {/*SHow if hero has AsP*/}
      {hero.AsP.max !== 0 && (
        <div className="heroAsP">{`AsP: ${hero.AsP.current}/${hero.AsP.max}`}</div>
      )}

      {/*SHow if hero has KaP*/}
      {hero.KaP.max !== 0 && (
        <div className="heroKAP">{`KaP: ${hero.KaP.current}/${hero.KaP.max}`}</div>
      )}
      <div className="heroSchips">{`Schips: ${hero.schips.current}/${hero.schips.max}`}</div>
      <div className="heroMoney">{`Money: ${hero.money}`}</div>
    </div>
  );
};

export default Hero;
