import SocketMessage from '../../../websocket/socket-message';
import ChatRoom from '../../../chat/chat-room';
import extend from 'extend';

const onActiveChats = (ws, chatrooms) => (msg) => {
  console.log(msg.content.chats);
  Object.keys(msg.content.chats).forEach((id) => {
    chatrooms.rooms[id] = new ChatRoom(msg.content.chats[id]);
  });
};

const onNewMessage = (ws, chatrooms) => (msg) => {
  chatrooms.rooms[msg.content.chatId].addMessage(msg.content.chatMsg);
};

export default function ChatServiceFactory($rootScope, $q, chatrooms){
  class Connection {
    constructor(ws, username) {
      this.ws = ws;
      this.username = username;

      const msgHandlers = {
        'active-chats': onActiveChats(ws, chatrooms),
        'new-message': onNewMessage(ws, chatrooms),
      }

      this.ws.onmessage = (evt) => {
        $rootScope.$apply(() => {
          var msg = new SocketMessage(evt.data);
          console.log("ws message: ", msg);

          const handler = msgHandlers[msg.type];
          if (handler) {
            handler(msg);
          }
        });
      };
    }

    close() {
      if (this.ws) {
        this.ws.close();
      }
    }

    getChats() {
      this.ws.send(new SocketMessage({
        type: 'get-chats'
      }).toString());
    }

    sendMessage(chatId, chatMsg) {
      extend(chatMsg, { sender: this.username });
      this.ws.send(new SocketMessage({ 
        type: 'send-message', 
        content: {
          chatId,
          chatMsg
        },
      }).toString());
    }
  }

  return {
    connect(username) {
      const deferred = $q.defer()

      const ws = new WebSocket('ws://localhost:8080/chat');

      ws.onopen = () => {
        ws.send(new SocketMessage({
          type: 'connect',
          content: { username }
        }).toString());
      };

      ws.onmessage = (evt) => {
        $rootScope.$apply(() => {
          var msg = new SocketMessage(evt.data);

          if (msg.type === 'server-ack') {
            const connection = new Connection(ws, username);
            this.connection = connection;

            deferred.resolve(connection);
          }
          else if (msg.type === 'username-rejected') {
            deferred.reject('username-rejected');
          }
        });
      };

      ws.onclose = (ev) => {
        console.log("Connection is closed..."); 
        deferred.reject(ev);
      };

      ws.onerror = (ev) => {
        console.error("Socket error: " + ev.data);
        deferred.reject(ev);
      }

      return deferred.promise;
    }
  };
}

ChatServiceFactory.$inject = ['$rootScope', '$q', 'chatrooms'];