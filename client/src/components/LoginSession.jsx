import React, { useState } from "react";

const LoginSession = ({ submitSessionId }) => {
  const [sessionName, setSessionName] = useState("");

  const enterSession = e => {
    e.preventDefault();
    submitSessionId(sessionName);
  };

  return (
    <div className="LoginSession">
      <h2>Log into a Session</h2>{" "}
      <form onSubmit={e => enterSession(e)}>
        <input
          type="text"
          value={sessionName}
          onChange={e => setSessionName(e.target.value)}
        ></input>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};

export default LoginSession;
