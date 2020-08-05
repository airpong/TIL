import React, { useState, useEffect } from "react";
import io from "socket.io-client";

function App() {
  const [comp, setComp] = useState(<Home />);

  const current_url = window.location.href;
  const url_object = new URL(current_url);
  const port = url_object.port;

  const JWTs = ["abc", "bdc", "efg"];
  const names = ["하창언", "노영삼", "정성훈"];

  const imageUrl =
    "https://lh3.googleusercontent.com/proxy/hafzfv5pd0wK5j9fs6ass1IrLhGaAEYhRRZCoerJl-cqgvpliPGbBddB7POw2Cc_mDd3-SOXojvyWLVxPJtFzBXr2IktxDj47zRG_QzRpOTGgy8kw4BuAfooXxA5wXuAoYgU5duIbcPFzeswR3ARPOaMqwa1Uq8ZkSacUx9Tww";

  // const socket = io(
  //   "http://ec2-13-125-2-123.ap-northeast-2.compute.amazonaws.com:3000",
  //   {
  //     query: {
  //       id: port - 2999,
  //       email: "abc@abc.com",
  //       JWT: JWTs[port - 3000],
  //       name: names[port - 3000],
  //       imageUrl,
  //       latitude: 127.5,
  //       longitude: 37.5,
  //     },
  //   }
  // );
  console.log("hello");
  const socket = io("http://localhost:8001", {
    query: {
      id: port - 2999,
      email: "abc@abc.com",
      JWT: JWTs[port - 3000],
      name: names[port - 3000],
      imageUrl,
      latitude: 127.5,
      longitude: 37.5,
    },
  });

  const sendTogether = () => {
    socket.emit("together", {
      id: port - 2999,
      location: { latitude: 127.5, longitude: 37.5 },
    });
  };
  const sendTogetherInvite = () => {
    const chkbox = document.querySelectorAll("input");
    const checkedUser = [];
    chkbox.forEach((element) => {
      if (element.checked) {
        checkedUser.push(element.id);
      }
    });
    socket.emit("togetherInvite", checkedUser);
  };

  socket.on("connect", () => {});
  socket.on("together", (data) => {
    const users = data;
    console.log(data);
    setComp(
      <div>
        {users.map((user, index) => (
          <div>
            <input type="checkbox" id={user.id} />
            {user.name}
          </div>
        ))}
        <button onClick={sendTogetherInvite}>초대하기</button>
      </div>
    );
  });
  socket.on("togetherInvite", async (data) => {
    console.log("hello");
    const { roomName, users } = data;
    setComp(
      <div>
        <div>{roomName}</div>
        <ul>
          {users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  });
  socket.on("inviteAccept", async (data) => {
    console.log("hello");
    setComp(
      <div>
        <div>{data.hostName}이 초대함</div>
        <button>수락</button>
        <button>거절</button>
      </div>
    );
  });
  function Home() {
    return (
      <div className="App">
        <button onClick={sendTogether}>같이하기</button>
      </div>
    );
  }

  return <main children={comp} />;
}

export default App;
