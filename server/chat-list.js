const Chat = require('../chat/chat-room');
const ChatMessage = require('../chat/chat-message');

module.exports = {};

function addShow(name) {
  module.exports[name] = new Chat(name);
}

addShow('Firefly');
addShow('Battlestar Galactica');
addShow('Stargate: Universe');
addShow('Freaks and Geeks');
addShow('Veronica Mars');
addShow('Arrested Development');

module.exports['Firefly'].addMessage(new ChatMessage('Joss Whedon', "At least I'm famous now"));
module.exports['Firefly'].addMessage(new ChatMessage('Adam Baldwin', "I was in Chuck!"));
module.exports['Firefly'].addMessage(new ChatMessage('Nathan Fillion', "My show is still going."));
module.exports['Firefly'].addMessage(new ChatMessage('Adam Baldwin', "@NathanFillion I hate you."));
module.exports['Firefly'].addMessage(new ChatMessage('Jewel Staite', "Why all the fighting?"));
module.exports['Battlestar Galactica'].addMessage(new ChatMessage('bsgSucksLulz', "It should have been cancelled way earlier!"));
module.exports['Arrested Development'].addMessage(new ChatMessage('Jason Bateman', "We got renewed!"));
