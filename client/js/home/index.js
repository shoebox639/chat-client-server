import angular from 'angular';
import angularRoute from 'angular-route';

import chat from '../chat';
import template from './home.html';
import HomeController from './home.controller';

const moduleName = 'app.home';
const module = angular.module(moduleName, ['ngRoute']);

module.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', { template: '<home></home>' });
});

module.component('home', {
  restrict: 'E',
  bindings: {},
  template,
  controller: HomeController
});

export default moduleName;

