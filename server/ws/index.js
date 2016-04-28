'use strict';

const router = require('express').Router();
const extend = require('extend');

const SocketMessage = require('../../websocket/socket-message');
const chatHandler = require('./chat-handlers');
const connectHandler = require('./handshake');

const openConnections = require('./connections');

router.ws('/', function(ws, req) {
  const chat = chatHandler(ws);
  const connect = connectHandler(ws);

  let msgHandlers = {
    'connect': connect
  };

  msgHandlers = extend(msgHandlers, chat);

  ws.on('message', function(evt) {
    const msg = new SocketMessage(evt);

    const handler = msgHandlers[msg.type];
    if (handler) {
      handler(msg);
    }
  });

  ws.on('close', function(evt) {
    console.error(evt);
    openConnections.remove(ws);
    console.log('connection closing!');
  })
});
 
module.exports = router;