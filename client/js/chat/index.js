import angular from 'angular';
import angularRoute from 'angular-route';

import ChatService from './chat-service';
import ChatController from './chat.controller';

import ChatList from './chat-list';

const moduleName = 'app.chat';
const module = angular.module(moduleName, ['ngRoute', ChatList]);

module.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/chat', { 
    template: `<chat-page></chat-page>`
  });
});

module.factory('ChatService', ChatService);
module.constant('chatrooms', { rooms: [] });

module.component('chatPage', {
  restrict: 'E',
  bindings: {},
  template: `
    <div>
      Signed in as: <strong>{{$ctrl.username}}</strong>
    </div>
    <chat-list chats="$ctrl.chats.rooms"></chat-list>
  `,
  controller: ChatController
});

export default moduleName;

