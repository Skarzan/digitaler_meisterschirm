import React from "react";
import image from "../../../../assets/icons/money.png";

import "./Money.scss";

function Money({ money }) {
  return (
    <div className="Money">
      <div className="moneySack">
        <img className="moneyImage" src={image}></img>
        <div className="moneyCount">{`${money / 100} Silber`}</div>
      </div>
    </div>
  );
}

export default Money;
