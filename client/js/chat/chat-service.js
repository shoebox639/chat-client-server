import SocketMessage from '../../../websocket/socket-message';
import ChatRoom from '../../../chat/chat-room';
import extend from 'extend';

export default function ChatServiceFactory($rootScope, chatrooms){
  class WS {
    close() {
      if (this.ws) {
        this.ws.close();
      }
    }

    onServerAck(msg) {
      this.ws.send(new SocketMessage({
        type: 'get-chats'
      }).toString());
    }

    onActiveChats(msg) {
      $rootScope.$apply(() => {
        chatrooms.rooms = msg.content.chats.map(chatJson => new ChatRoom(chatJson));
      });
    }

    onNewMessage(msg) {
      $rootScope.$apply(() => {
        chatrooms.rooms[msg.content.chatId].addMessage(msg.content.chatMsg);
      });
    }

    init(username) {
      this.username = username;

      const msgHandlers = {
        'server-ack': this.onServerAck.bind(this),
        'active-chats': this.onActiveChats.bind(this),
        'new-message': this.onNewMessage.bind(this)
      }
      
      this.ws = new WebSocket('ws://localhost:8080/chat');
      this.ws.onopen = () => {
        this.ws.send(new SocketMessage({
          type: 'connect',
          content: {
            username
          }
        }).toString());
      };

      this.ws.onmessage = (evt) => {
        var msg = new SocketMessage(evt.data);
        console.log("ws message: ", msg);

        const handler = msgHandlers[msg.type];
        if (handler) {
          handler(msg);
        }
      };

      this.ws.onclose = () => {
        console.log("Connection is closed..."); 
      };

      this.ws.onerror = (ev) => {
        console.error("Socket error: " + ev.data);
      }
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

  return new WS();
}

ChatServiceFactory.$inject = ['$rootScope', 'chatrooms'];