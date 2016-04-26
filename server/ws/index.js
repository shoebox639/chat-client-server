const router = require('express').Router();
const extend = require('extend');

const SocketMessage = require('../../websocket/socket-message');
const chatHandler = require('./chat-handlers');
const connectHandler = require('./handshake');

router.ws('/', function(ws, req) {
  const chat = chatHandler(ws);
  const connect = connectHandler(ws);

  const msgHandlers = {
    'connect': connect(ws)
  };

  extend(msgHandlers, chat);

  ws.on('message', function(evt) {
    const msg = new SocketMessage(evt);

    const handler = msgHandlers[msg.type];
    if (handler) {
      handler(msg);
    }
  });
});
 
module.exports = router;