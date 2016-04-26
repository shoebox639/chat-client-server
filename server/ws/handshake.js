'use strict';
const SocketMessage = require('../../websocket/socket-message');

const Chat = require('../chat');

module.exports = (ws) => (msg) => {
  const chat = new Chat(msg.username);

  ws.send(new SocketMessage({
    type: 'server-ack'
    // register username with salted hash as id and return it
  }).toString());
};