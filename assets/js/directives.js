(function () {
  var app = angular.module('product-seller')

  app.directive("create-customer", function () {
    return {
      restrict: "E",
      template: "<div class='btn-group' role='group'>" +
      "<button type='button' class='btn btn-info'>+ Customer</button>" +
      "</div>"
    }
  });
})();

