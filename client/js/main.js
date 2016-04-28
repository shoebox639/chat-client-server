import angular from 'angular';
import angularRoute from 'angular-route';
import angularCookies from 'angular-cookies';

import Home from './home';
import Chat from './chat';
import MainController from './main.controller';

const app = angular.module('app', ['ngRoute', 'ngCookies', Home, Chat]);

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

app.controller('rootController', MainController);