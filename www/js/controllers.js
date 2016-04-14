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

  $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope,
      animation: 'slide-in-up',
   }).then(function(modal) {
      $scope.modal = modal;
   });
  
  $scope.openModal = function() {
    $scope.modal.show();
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  }

})

.controller("TrendingCtrl", function($scope,Trending) {
  Trending.populateGifs().then(function(){
    $scope.trendingGifs = Trending.data;
  })
});
