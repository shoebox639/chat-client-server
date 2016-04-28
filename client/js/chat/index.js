import angular from 'angular';
import angularRoute from 'angular-route';
import angularCookies from 'angular-cookies';

import ChatService from './chat-service';
import ChatController from './chat.controller';

import ChatList from './chat-list';

const moduleName = 'app.chat';
const module = angular.module(moduleName, ['ngRoute', 'ngCookies', ChatList]);

module.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/chat', { 
    template: `<chat-page></chat-page>`,
    title: 'Cancelled',
    subtitle: 'Talk about all the shows that were cancelled too early.'
  });
});

module.factory('ChatService', ChatService);
module.constant('chatrooms', { rooms: {} });

module.component('chatPage', {
  restrict: 'E',
  bindings: {},
  template: `
    <chat-list chats="$ctrl.chats.rooms"></chat-list>
  `,
  controller: ChatController
});

export default moduleName;

