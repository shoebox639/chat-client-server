const Chat = require('../chat/chat-room');
const ChatMessage = require('../chat/chat-message');

module.exports = [
  new Chat(0),
  new Chat(1),
  new Chat(2)
];

module.exports[0].addMessage(new ChatMessage('Some Dude', 'I have something to say!'));
