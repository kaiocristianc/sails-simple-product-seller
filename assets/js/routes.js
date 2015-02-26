(function () {
  var app = angular.module('product-seller');
  app.config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/createCustomer', {
        templateUrl: '/templates/partials/customer/create.html'
      }).when('/createProduct', {
        templateUrl: '/templates/partials/product/create.html'
      }).when('/createSale', {
        templateUrl: '/templates/partials/sale/create.html'
      }).when('/createSale', {
        templateUrl: '/templates/partials/sale/create.html'
      })
    }]);
})();

