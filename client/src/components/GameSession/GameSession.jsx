import React from "react";
import Party from "./party/Party";

const GameSession = ({
  session,
  heroChangePoints,
  heroChangeSchips,
  leaveSession
}) => {
  return (
    <div>
      <h1>{session.id}</h1>
      <Party
        name={session.name}
        party={session.party}
        heroChangePoints={heroChangePoints}
        heroChangeSchips={heroChangeSchips}
      ></Party>
      <button onClick={() => leaveSession()}>Leave Session</button>
    </div>
  );
};

export default GameSession;
