(function () {
  var app = angular.module('product-seller')
  app.directive("createMenu", function () {
    return {
      restrict: "E",
      templateUrl: "/templates/partials/createMenu.html"
    }
  });

})();

