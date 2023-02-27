const WebSocket = require("ws");
let server = new WebSocket.Server({ port: 3000 });

let users = {};

server.on("connection", (ws) => {
  ws.send("cliente entrou...");
  console.log("cliente entrou...");

  ws.on("message", (message) => {
    const user = JSON.parse(message);

    users[user.id] = user;
    ws.send(users);
  });
});
