'use strict';
const SocketMessage = require('../../websocket/socket-message');
const openConnections = require('./connections');

module.exports = (ws) => {
  return (msg) => {
    const username = msg.content.username;
    if (openConnections.connections.filter(socket => socket.username == username).length) {
      ws.send(new SocketMessage({
        type: 'username-rejected'
      }).toString());
      ws.close();
    }
    else {
      openConnections.add(username, ws);
      
      ws.send(new SocketMessage({
        type: 'server-ack'
        // register username with salted hash as id and return it
      }).toString());
    }
  }
};