class HomeController {
  constructor($scope, $location, $cookies, ChatService, takenUserNames) {
    this.$location = $location;
    this.$cookies = $cookies;
    this.ChatService = ChatService;
    this.takenUserNames = takenUserNames;
    this.usernameInput = '';

    if ($cookies.get('username')) {
      this.submit($cookies.get('username')).catch((err) => {
        if (err === 'username-rejected') {
          this.$location.path('/logout');
        }
      });
    }
  }

  submit(username) {
    const sanitized = username.trim();
    if (sanitized) {
      return this.ChatService.connect(sanitized).then((chat) => {
        this.$cookies.put('username', sanitized);

        this.$location.path('/chat');
      }).catch((err) => {
        if (err === 'username-rejected') {
          this.takenUserNames.push(sanitized);
          this.form.username.$validate();
        }
        throw err;
      });
    }

    return false;
  }
}

HomeController.$inject = ['$scope', '$location', '$cookies', 'ChatService', 'takenUserNames'];

export default HomeController;