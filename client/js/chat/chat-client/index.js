import angular from 'angular';
import angularBootstrap from 'angular-bootstrap';

import openChatModal from './open-chat-modal';
import EmojiList from '../../emoji-list';

const moduleName = 'app.chat.client';
const module = angular.module(moduleName, ['ui.bootstrap', EmojiList]);

module.factory('openChatModal', openChatModal)

export default moduleName;
