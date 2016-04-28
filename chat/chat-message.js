'use strict';

class ChatMessage {
  constructor(sender, content) {
    this.sender = sender;
    this.content = content;
    this.read = false;
  }
}

module.exports = ChatMessage;