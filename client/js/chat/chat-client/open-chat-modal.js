import ChatClientController  from './chat-client.controller';
import template  from './chat-client.html';

export default function openChatModal($uibModal){
  return function(chat) {
    $uibModal.open({
      controller: ChatClientController,
      template,
      resolve: {
        chat: () => chat
      }
    });
  }
};

openChatModal.$inject = ['$uibModal'];