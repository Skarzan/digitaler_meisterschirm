import React, { useState } from "react";
import { ReactComponent as SchipSVG } from "../../../../assets/icons/schip.svg";
import { CSSTransitionGroup } from "react-transition-group"; // ES6

import "./Schips.scss";

function Schips({ schips, changeCurrentSchips }) {
  const [showButtons, setShowButtons] = useState(false);

  const clickButton = value => {
    if (value >= 0 && value <= schips.max) {
      changeCurrentSchips(value);
    }
  };

  //TODO: show buttons on mobile
  return (
    <div
      className="Schips"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <div className="schipIcon">
        <SchipSVG></SchipSVG>
        <div className="schipNumbers">{`${schips.current}/${schips.max}`}</div>
        <CSSTransitionGroup
          transitionName="fade-in"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {showButtons && (
            <button
              className="minusButton"
              onClick={() => clickButton(schips.current - 1)}
            >
              -
            </button>
          )}
          {showButtons && (
            <button
              className="plusButton"
              onClick={() => clickButton(schips.current + 1)}
            >
              +
            </button>
          )}
        </CSSTransitionGroup>
      </div>
    </div>
  );
}

export default Schips;
