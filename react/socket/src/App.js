import React from "react";
import io from "socket.io-client";
function App() {
  const socket = io("http://localhost:8001");
  const send = (msg) => {
    socket.emit("chat message", msg);
  };
  const receive = () => {
    socket.on("chat message", (msg) => {
      console.log(msg);
    });
  };
  receive();

  return (
    <div className="App">
      <button onClick={() => send("miki")}>abc</button>
    </div>
  );
}

export default App;
