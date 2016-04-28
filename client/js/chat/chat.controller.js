class ChatController {
  constructor($location, ChatService, chatrooms) {
    if (!ChatService.connection) {
      return $location.path('/');
    }

    ChatService.connection.getChats();

    this.chats = chatrooms;
  }
}

ChatController.$inject = ['$location', 'ChatService', 'chatrooms'];

module.exports = ChatController;