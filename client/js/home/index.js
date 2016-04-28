import angular from 'angular';
import angularRoute from 'angular-route';
import angularCookies from 'angular-cookies';

import chat from '../chat';
import template from './home.html';
import HomeController from './home.controller';
import LogoutController from './logout.controller';

import EmojiList from '../emoji-list';

const moduleName = 'app.home';
const module = angular.module(moduleName, ['ngRoute', 'ngCookies']);

module.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', { 
    template: '<home></home>',
    title: 'Someone is Wrong on the Internet',
    subtitle: 'So let them know.'
  }).when('/logout', {
    template: '',
    controller: LogoutController
  });
});

module.component('home', {
  restrict: 'E',
  bindings: {},
  template,
  controller: HomeController
});

module.constant('takenUserNames', []);

module.directive('unique', ['takenUserNames', function(takenUserNames) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.unique = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }

        return takenUserNames.indexOf(viewValue.trim()) < 0;
      };
    }
  };
}]);

export default moduleName;

