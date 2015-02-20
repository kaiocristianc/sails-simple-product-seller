(function () {
  var app = angular.module('product-seller');
  app.config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/createCustomer', {
        templateUrl: '/templates/partials/customer/create.html'
      })
    }]);
})();

