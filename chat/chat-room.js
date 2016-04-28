'use strict';

class Chat {
  constructor(config) {
    if (typeof config == 'string') {
      const id = config;
      this.id = id;
      this.messages = [];
    }
    else {
      this.id = config.id;
      this.messages = config.messages;
    }
  }

  addMessage(msg) {
    this.messages.push(msg);
  }

  lastMessage() {
    if (this.messages.length) {
      return this.messages[this.messages.length - 1];
    }
    else {
      return {};
    }
  }

  numUnread() {
    return this.messages.filter(msg => !msg.read).length;
  }

  readAll() {
    this.messages.forEach(msg => msg.read = true);
  }
}

module.exports = Chat;