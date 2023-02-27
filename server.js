const WebSocket = require("ws");
let server = new WebSocket.Server({ port: 3000 });

server.on("connection", (ws) => {
  ws.send("server rodando...");
});
