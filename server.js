const WebSocket = require("ws");
let server = new WebSocket.Server({ port: 3000 });

server.on("connection", (ws) => {
  ws.send("cliente entrou...");
  console.log("cliente entrou...");

  ws.on("message", (message) => {
    console.log(`Mensagem recebida: ${message}`);
  });
});
