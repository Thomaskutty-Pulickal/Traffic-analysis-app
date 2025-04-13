const express = require('express');
const http = require('http');
const cors = require('cors');
const streamRoutes = require('./routes/streamRoutes');
const { initWebSocket, handleWebSocketConnection } = require('./utils/socket');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use('/api', streamRoutes);

initWebSocket(server);
handleWebSocketConnection();

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
