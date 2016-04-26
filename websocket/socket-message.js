'use strict';

class Message {
  constructor(input) {
    if (typeof input === 'string') {
      input = JSON.parse(input);
    }

    this.msg = input;
    this.content = input.content;
    this.type = input.type;

  }

  get(field) {
    return this.content[field];
  }

  toString() {
    return JSON.stringify(this.msg);
  }
}

module.exports = Message;