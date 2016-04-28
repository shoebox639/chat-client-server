class EmojiListController {
  constructor($scope, $sce) {
    this.$scope = $scope;
    this.emojis = [];
    for (let i = 0xDE00; i <= 0xDE40; i++) {
      this.emojis.push(String.fromCharCode(0xD83D, i));
    }

    this.emojis = this.emojis.map(char => {
      return {
        char,
        largeDisplay: $sce.trustAsHtml(`<span class="emoji emoji-large">${char}</span>`)
      }
    });

    this.inserted = '';
  }

  select(emoji) {
    this.$scope.$emit('emoji-selected', emoji);
  }
}

EmojiListController.$inject = ['$scope', '$sce'];

module.exports = EmojiListController;