import angular from 'angular';
import angularRoute from 'angular-route';

import ChatService from './chat-service';
import template from './chat.html';

const moduleName = 'app.chat';
const module = angular.module(moduleName, ['ngRoute']);

module.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/chat', { template: '<chat-client></chat-client>' });
});

class ChatController {
  constructor($scope, $location, ChatService) {
    $scope.model = {};

    $scope.username = $location.search().username;

    const chat = new ChatService();
    chat.init($scope.username).then((chats) => {
      $scope.chats = chats;
    });

    $scope.$on('$destroy', () => {
      chat.close();
    });
  }
}

ChatController.$inject = ['$scope', '$location', 'ChatService'];

module.factory('ChatService', ChatService);

module.component('chatClient', {
  restrict: 'E',
  bindings: {},
  template,
  controller: ChatController
});

export default moduleName;

