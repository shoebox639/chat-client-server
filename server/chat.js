'use strict';

class Chat {
  constructor(id) {
    this.id = id;
    this.messages = [];
  }

  addMessage(msg) {
    this.messages.push(msg);
  }
}

module.exports = Chat;