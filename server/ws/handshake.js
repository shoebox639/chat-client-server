'use strict';
const SocketMessage = require('../../websocket/socket-message');
const openConnections = require('./connections');

module.exports = (ws) => (msg) => {
  openConnections.add(ws);
  
  ws.send(new SocketMessage({
    type: 'server-ack'
    // register username with salted hash as id and return it
  }).toString());
};