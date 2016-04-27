'use strict';

let nextId = 0;
module.exports = {
  connections: {},
  add(ws) {
    const id = nextId++;
    this.connections[id] = ws;
    ws.id = id;
  },
  remove(ws) {
    delete this.connections[ws.id];
  }
};