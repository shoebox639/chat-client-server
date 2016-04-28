import angular from 'angular';
import angularBootstrap from 'angular-bootstrap';

import EmojiListController from './emoji-list.controller';
import template from './emoji-list.html';

const moduleName = 'app.emojis.list';
const module = angular.module(moduleName, ['ui.bootstrap']);

module.component('emojiList', {
  restrict: 'E',
  bindings: { 'appendWith': '&' },
  template: template,
  controller: EmojiListController
});

export default moduleName;
