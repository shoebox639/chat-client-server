class ChatListController {
  constructor($scope, ChatService, openChatModal) {
    this.openChatModal = openChatModal;
    $scope.$on('$destroy', () => {
      ChatService.close();
    });
  }
  
  openChat(chat) {
    this.openChatModal(chat);
  }
}

ChatListController.$inject = ['$scope', 'ChatService', 'openChatModal', 'chatrooms'];

module.exports = ChatListController