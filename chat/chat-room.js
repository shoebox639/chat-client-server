'use strict';

class Chat {
  constructor(config) {
    if (typeof config === 'number') {
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
}

module.exports = Chat;