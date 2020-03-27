import React from "react";
import Party from "./party/Party";

const GameSession = ({ session, heroChangePoints, leaveSession }) => {
  return (
    <div>
      <h1>{session.id}</h1>
      <Party party={session.party} heroChangePoints={heroChangePoints}></Party>
      <button onClick={() => leaveSession()}>Leave Session</button>
    </div>
  );
};

export default GameSession;
