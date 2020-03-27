import React, { useState, useEffect } from "react";
import "./App.css";

import socketIO from "./utils/socketIO";

import LoginSession from "./components/LoginSession";
import GameSession from "./components/GameSession/GameSession";

import sessionMock from "./utils/gameSession";

const App = () => {
  const [session, setSession] = useState(sessionMock);

  useEffect(() => {
    socketIO.on("heroChangePoints", function(heroId, value, type) {
      heroUpdatePoints(heroId, value, type);
    });

    return () => {
      socketIO.removeListener("heroChangePoints");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const heroChangePoints = (heroId, newValue, type) => {
    heroUpdatePoints(heroId, newValue, type);
    socketIO.emit("heroChangePoints", session.id, heroId, newValue, type);
  };

  const heroUpdatePoints = (heroId, newValue, type) => {
    let newState = { ...session };

    newState.party.find(hero => hero.id === heroId)[type].current = newValue;
    setSession(newState);
  };

  const changeSessionId = id => {
    let newState = { ...session };
    newState.id = id;
    setSession(newState);
    socketIO.emit("enter session", id);
  };

  const leaveSession = () => {
    setSession({ ...session, id: "" });
    socketIO.emit("leave session");
  };

  return (
    <div className="App">
      {session.id ? (
        <GameSession
          session={session}
          heroChangePoints={heroChangePoints}
          leaveSession={leaveSession}
        ></GameSession>
      ) : (
        <LoginSession submitSessionId={changeSessionId}></LoginSession>
      )}
    </div>
  );
};

export default App;
