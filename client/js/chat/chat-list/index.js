import angular from 'angular';

import ChatClient from '../chat-client';

import ChatListController from './chat-list.controller';
import template from './chat-list.html';

const moduleName = 'app.chat.list';
const module = angular.module(moduleName, [ChatClient]);

module.component('chatList', {
  restrict: 'E',
  bindings: { chats: '<' },
  template,
  controller: ChatListController
});

export default moduleName;
