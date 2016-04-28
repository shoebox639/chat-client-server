'use strict';

let nextId = 0;
module.exports = {
  connections: [],
  add(username, ws) {
    this.connections.push(ws);
    ws.username = username;
  },
  remove(ws) {
    this.connections = this.connections.filter(socket => socket.username !== ws.username);
  }
};