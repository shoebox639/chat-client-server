import angular from 'angular';
import angularRoute from 'angular-route';

import Home from './home';
import Chat from './chat';

const app = angular.module('app', [ 'ngRoute', Home, Chat ]);

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

