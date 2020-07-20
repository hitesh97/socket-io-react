import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import MessageList from "./MessageList";
import NewMessage from "./NewMessage";

export default () => {
  const [user, token] = [{name : 'hitesh here'}, '4234242343-424234234234']
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(location.origin, token && { query: { token } });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [token]);

  return socket && (
    <div>
      {user ? (
        <div>
          Signed in as {user.name}
        </div>
      ) : (
        <div>
          Not signed in
        </div>
      )}
      <MessageList socket={socket} />
      <br />
      <NewMessage socket={socket} />
    </div>
  );
};
