import React from "react";

const Bar = ({ current, max, changeCurrentPoints, type }) => {
  const changeValue = e => {
    e.preventDefault();
    const newValue = e.target.value;
    changeCurrentPoints(parseInt(newValue), type);
  };

  return (
    <div className="Bar">
      <div>{`${type}: ${current}/${max}`}</div>
      <input
        onChange={e => changeValue(e)}
        type="range"
        min="0"
        max={max}
        value={current}
      ></input>
    </div>
  );
};

export default Bar;
