'use strict';

class LogoutController {
  constructor($cookies, $location) {
    $cookies.remove('username');
    console.log('helloooo')
    $location.path('/');
  }
}

LogoutController.$inject = ['$cookies', '$location'];
module.exports = LogoutController;