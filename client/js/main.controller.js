'use strict';

class MainController {
  constructor($scope, $cookies, $window) {
    $scope.$ctrl = this;
    this.$cookies = $cookies;
    this.$window = $window;

    $scope.$on('$routeChangeSuccess', (evt, route) => {
      this.username = this.$cookies.get('username');
      this.title = route.$$route.title;
      this.subtitle = route.$$route.subtitle;
    });
  }
}

MainController.$inject = ['$scope', '$cookies', '$window'];
module.exports = MainController;