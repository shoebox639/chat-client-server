import SocketMessage from '../../../websocket/socket-message';

export default function ChatServiceFactory($q){
  class WS {
    close() {
      if (this.ws) {
        this.ws.close();
      }
    }

    init(username) {
      const deferred = $q.defer();

      const onServerAck = (msg) => {
        this.ws.send(new SocketMessage({
          type: 'get-chats'
        }).toString());
      }

      const onActiveChats = (msg) => {
        deferred.resolve(msg.content.chats);
      }

      const msgHandlers = {
        'server-ack': onServerAck,
        'active-chats': onActiveChats
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

      return deferred.promise;
    }
  }

  return WS;
}

factory.$inject = ['$q'];