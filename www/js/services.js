angular.module("gifs.services", [])

.factory("Gifs", function($http) {
  var o = {
    data: [],
    searchTerm: "unicorns"
  }

  o.populateGifs = function() {
    return $http({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search?q=" + o.searchTerm + "&limit=100&api_key=dc6zaTOxFJmzC"
    }).success(function(responseData) {
      o.data = responseData.data;
    });
  }

  o.loadMoreGifs = function() {
    return $http({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search?q=" + o.searchTerm + "&limit=100&offset=" + o.data.length + "&api_key=dc6zaTOxFJmzC"
    }).success(function(responseData) {
      o.data = o.data.concat(responseData.data);
    });
  }

  return o;
})

.factory("Trending", function($http) {
  var o = {
    data: [],
  }

  o.populateGifs = function() {
    return $http({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/trending?limit=100&api_key=dc6zaTOxFJmzC"
    }).success(function(responseData) {
      o.data = responseData.data;
    });
  }

  return o;
});


