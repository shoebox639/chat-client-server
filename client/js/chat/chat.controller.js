class ChatController {
  constructor($scope, $location, ChatService, chatrooms) {
    this.username = $location.search().username;

    ChatService.init(this.username);

    this.chats = chatrooms;
  }
}

ChatController.$inject = ['$scope', '$location', 'ChatService', 'chatrooms'];

module.exports = ChatController;