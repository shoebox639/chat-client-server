import ChatMessage from '../../../../chat/chat-message';

class ChatClientController {
  constructor($scope, ChatService, chat) {
    this.chat = chat;
    this.$scope = $scope;
    $scope.$ctrl = this;
    this.model = {};
    this.ChatService = ChatService;
  }


  sendMessage(content) {
    this.ChatService.sendMessage(this.chat.id, new ChatMessage(this.username, content));
    this.inputText = '';
  }
}

ChatClientController.$inject = ['$scope', 'ChatService', 'chat'];

module.exports = ChatClientController;