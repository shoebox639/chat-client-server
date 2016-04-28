const Chat = require('../chat/chat-room');
const ChatMessage = require('../chat/chat-message');

module.exports = {
  'Firefly': new Chat('Firefly'),
  'Gattlestar Galactica': new Chat('Gattlestar Galactica'),
  'Stargate: Universe': new Chat('Stargate: Universe')
};

module.exports['Firefly'].addMessage(new ChatMessage('Joss Whedon', 'It was cancelled too early!'));
