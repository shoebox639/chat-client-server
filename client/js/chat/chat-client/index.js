import angular from 'angular';
import angularBootstrap from 'angular-bootstrap';

import openChatModal from './open-chat-modal';

const moduleName = 'app.chat.client';
const module = angular.module(moduleName, ['ui.bootstrap']);

module.factory('openChatModal', openChatModal)

export default moduleName;
