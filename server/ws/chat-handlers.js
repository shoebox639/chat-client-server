'use strict';

const chats = require('../chat-list');
const openConnections = require('./connections');
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
    },

    'send-message': function(msg) {
      const chatId = msg.content.chatId;
      chats[chatId].addMessage(msg.content.chatMsg);

      Object.keys(openConnections.connections).forEach((cid) => {
        openConnections.connections[cid].send(new SocketMessage({
          type: 'new-message',
          content: msg.content
        }).toString());
      })
    }
  }
};
