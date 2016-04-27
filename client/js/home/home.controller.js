class HomeController {
  constructor($location) {
    this.$location = $location;
  }

  submit(username) {
    console.log('yolo');
    this.$location.path('/chat').search('username', username);
    return false;
  }
}

HomeController.$inject = ['$location'];

export default HomeController;