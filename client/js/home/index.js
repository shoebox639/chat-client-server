import angular from 'angular';
import angularRoute from 'angular-route';

import chat from '../chat';
import template from './home.html';

const moduleName = 'app.home';
const module = angular.module(moduleName, ['ngRoute']);

class HomeController {
  constructor($scope, $location) {
    $scope.model = {};

    $scope.submit = function(username) {
      $location.path('/chat').search('username', username);
    }
  }
}
HomeController.$inject = ['$scope', '$location'];

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

