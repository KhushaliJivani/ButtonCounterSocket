const express = require("express");
const app = express();
const client = require("../src/configRedis/redisInit");
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
//start a socket io server.
io.on('connection', (socket) => {
  socket.on('countBtn', function (clicked_value) {
    if (clicked_value == 'red') {
      client.incr('counterRed');
      client.get('counterRed', (err, data) => {
        io.emit('redCount', data);
      })
    } else if (clicked_value == 'blue') {
      client.incr('counterBlue')
      client.get('counterBlue', (err, data) => {
        io.emit('blueCount', data);
      })
    } else {
      client.incr('counterGreen')
      client.get('counterGreen', (err, data) => {
        io.emit('greenCount', data);
      })
    }
  });
});

server.listen(3001, () => {
  console.log('Server is listening on 3001');
});