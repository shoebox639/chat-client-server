const chats = require('../chat-list');
const SocketMessage = require('../../websocket/socket-message');

module.exports = (ws) => {
  return {
    'get-chats': function(msg) {
      ws.send(new SocketMessage({
        type: 'active-chats',
        content: {
          chats
        }
      }).toString());
    }
  }
};
