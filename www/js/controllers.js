angular.module("gifs.controllers", [])
.controller("GifCtrl", function($scope, $ionicModal, Gifs) {

  Gifs.populateGifs().then(function(){
    $scope.gifs = Gifs.data;
  })

  $scope.loadSearchedGifs = function(searchTerm) {
    Gifs.searchTerm = searchTerm;
    Gifs.populateGifs().then(function(){
      $scope.gifs = Gifs.data;
    })
  }

  $scope.loadMoreGifs = function() {
    Gifs.loadMoreGifs().then(function(){
    $scope.gifs = Gifs.data;
    $scope.$broadcast("scroll.infiniteScrollComplete");
    })
  }

  $scope.showGif = function(index) {
    $scope.currentGif = $scope.gifs[index];
    $scope.showModal('templates/modal.html');
  }

  $scope.showModal = function(templateUrl) {$ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope
   }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
   });
  }
  
  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove();
  }
})

.controller("TrendingCtrl", function($scope, $ionicModal, Trending) {
  Trending.populateGifs().then(function(){
    $scope.trendingGifs = Trending.data;
  })

  $scope.showGif = function(index) {
    $scope.currentGif = $scope.trendingGifs[index];
    $scope.showModal('templates/modal.html');
  }

  $scope.showModal = function(templateUrl) {$ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope
   }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
   });
  }
  
  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove();
  }
});
