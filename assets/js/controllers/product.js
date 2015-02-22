(function () {
  var app = angular.module('controller.product', []);

  app.controller('productCreateController', function ($scope, $http) {
    $scope.product = {};
    $scope.create = function () {
      $http.post('/product/create', $scope.product).success(function (data) {
          alert('Product successfully created');
        }
      );
    }
  })


})();


