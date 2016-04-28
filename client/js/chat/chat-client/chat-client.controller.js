import ChatMessage from '../../../../chat/chat-message';

class ChatClientController {
  constructor($scope, ChatService, chat) {
    $scope.$ctrl = this;

    this.chat = chat;
    this.$scope = $scope;
    this.model = {};
    this.chatConnection = ChatService.connection;
    this.inputText = '';

    this.chat.readAll();

    $scope.$watch('$ctrl.chat.messages', () => {
      this.chat.readAll();
      this.scrollBottom();
    }, true);

    $scope.$on('emoji-selected', (evt, emoji) => {
      this.inputText += emoji;
    })
  }

  scrollBottom() {
    const elem = document.querySelector('.chat-body');
    if (elem) {
      elem.scrollTop = elem.scrollHeight;
    }
  }

  sendMessage(content) {
    const santitzied = content.trim();
    if (santitzied) {
      this.chatConnection.sendMessage(this.chat.id, new ChatMessage(this.username, santitzied));
      this.inputText = '';
    }
  }
}

ChatClientController.$inject = ['$scope', 'ChatService', 'chat'];

module.exports = ChatClientController;