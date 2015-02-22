(function () {
  var app = angular.module('controller.sale', []);

  app.controller('saleCreateController', function ($scope, $http) {
    $scope.saleItems = [];
    $scope.hideFilter = true;
    $scope.saleItem = {};
    $scope.totalValue = 0;

    $scope.init = function () {
      $http.get('/product').success(function (data) {
        $scope.products = data;
      });
      $http.get('/customer').success(function (data) {
        $scope.customers = data;
      })
    };

    $scope.addToCart = function () {
      $scope.saleItem.amount = $scope.amount;
      var newItem = angular.copy($scope.saleItem);
      $scope.saleItems.push(newItem);
      $scope.setTotalValue();
    };

    $scope.toogleFilter = function () {
      $scope.hideFilter = !$scope.hideFilter;
    };

    $scope.setTotalValue = function () {
      var totalValue = 0;
      $.each($scope.saleItems, function (index, saleItem) {
        totalValue = totalValue + (saleItem.amount * saleItem.product.price)
      });
      $scope.totalValue = totalValue;
    };

    $scope.create = function () {
      $http.post('/sale/create', {saleItems: $scope.saleItems}).success(function (data) {
          alert('Sale successfully created');
        }
      );
    }
  })


})();


