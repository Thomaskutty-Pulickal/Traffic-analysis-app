const WebSocket = require('ws');
const { generateMockData } = require('../services/mockDataService');

let wss;

function initWebSocket(server) {
  wss = new WebSocket.Server({ server });
  console.log('WebSocket Server initialized');
}

function startStream(ws) {
  const interval = setInterval(() => {
    const data = generateMockData();
    ws.send(JSON.stringify(data));
  }, 3000);

  ws.on('close', () => {
    clearInterval(interval);
    console.log('WebSocket client disconnected');
  });
}

function handleWebSocketConnection() {
  wss.on('connection', (ws, req) => {
    console.log('WebSocket client connected');
    startStream(ws);
  });
}

module.exports = { initWebSocket, handleWebSocketConnection };
