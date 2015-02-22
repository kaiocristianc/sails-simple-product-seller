(function () {
  var app = angular.module('controller.customer', []);

  app.controller('customerCreateController', function ($scope, $http) {
    $scope.customer = {};
    $scope.create = function () {
      $http.post('/customer/create', $scope.customer).success(function (data) {
          alert('Customer successfully created');
        }
      );
    }
  })


})();


