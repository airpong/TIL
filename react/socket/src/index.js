import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import socketio from "socket.io-client";
const socket = socketio.connect("http://localhost:4000");
(() => {
  socket.emit("init", { name: "bella" });
  socket.on("welcome", (msg) => {
    console.log(msg);
  });
})();
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
