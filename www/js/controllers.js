angular.module("gifs.controllers", [])

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

.controller("GifCtrl", function($scope, $ionicModal, Gifs) {

  Gifs.populateGifs().then(function(){
    $scope.gifs = Gifs.data;
  })

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

.controller("TrendingCtrl", function($scope,Trending) {
  Trending.populateGifs().then(function(){
    $scope.trendingGifs = Trending.data;
  })
});
