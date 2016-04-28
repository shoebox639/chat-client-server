class ChatListController {
  constructor($scope, ChatService, openChatModal, $cookies) {
    this.openChatModal = openChatModal;
    this.username = $cookies.get('username');

    $scope.$on('$destroy', () => {
      if (ChatService.connection) {
        ChatService.connection.close();
      }
    });
  }
  
  openChat(chat) {
    this.openChatModal(chat);
  }
}

ChatListController.$inject = ['$scope', 'ChatService', 'openChatModal', '$cookies'];

module.exports = ChatListController