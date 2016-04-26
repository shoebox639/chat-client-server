const Chat = require('./chat');

module.exports = [
  new Chat(1),
  new Chat(2),
  new Chat(3)
];

module.exports[0].addMessage({
  sender: 'Some Dude',
  msg: 'I have something to say!'
})
