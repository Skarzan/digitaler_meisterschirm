import React, { useState, useEffect } from "react";
import Party from "./party/Party";

import socketIO from "../../utils/socketIO";

import sessionMock from "../../utils/gameSession";

const GameSession = ({ sessionID, hero }) => {
  const [session, setSession] = useState({
    ...sessionMock,
    id: sessionID,
    party: [hero],
  });

  useEffect(() => {
    socketIO.on("heroChangePoints", function (heroId, value, type) {
      heroUpdatePoints(heroId, value, type);
    });

    socketIO.on("heroChangeSchips", function (heroId, value) {
      heroUpdateSchips(heroId, value);
    });

    socketIO.on("request session", function (socketId) {
      socketIO.emit("send session", session, socketId);
    });

    socketIO.on("set session", function (newSession) {
      setSession({ ...newSession, party: [...newSession.party, hero] });
    });

    socketIO.on("add hero", function (hero) {
      setSession({ ...session, party: [...session.party, hero] });
    });

    socketIO.on("delete hero", function (heroID) {
      // delete hero from party
      const newParty = session.party.filter((obj) => {
        return obj.id !== heroID;
      });
      setSession({ ...session, party: [...newParty] });
    });

    return () => {
      socketIO.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const heroChangePoints = (heroId, newValue, type) => {
    heroUpdatePoints(heroId, newValue, type);
    socketIO.emit("heroChangePoints", session.id, heroId, newValue, type);
  };

  const heroUpdatePoints = (heroId, newValue, type) => {
    let newState = { ...session };

    newState.party.find((hero) => hero.id === heroId)[type].current = newValue;
    setSession(newState);
  };

  const heroUpdateSchips = (heroId, newValue) => {
    let newState = { ...session };

    newState.party.find((hero) => hero.id === heroId).schips.current = newValue;
    setSession(newState);
  };

  const heroChangeSchips = (heroId, newValue) => {
    heroUpdateSchips(heroId, newValue);
    socketIO.emit("heroChangeSchips", session.id, heroId, newValue);
  };

  const leaveSession = () => {
    setSession({ ...session, id: "" });
    socketIO.emit("leave session");
  };

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
