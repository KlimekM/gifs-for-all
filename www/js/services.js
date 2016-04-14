angular.module("gifs.services", [])

.factory("Gifs", function($http) {
  var o = {
    data: [],
    searchTerm: "unicorns"
  }

  o.populateGifs = function() {
    return $http({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search?q=" + o.searchTerm + "&api_key=dc6zaTOxFJmzC"
    }).success(function(data) {
      o.data = data;
    });
  }

  return o;
});
