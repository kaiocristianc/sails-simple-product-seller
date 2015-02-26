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
      $scope.calcTotal();
    };

    $scope.toogleFilter = function () {
      $scope.hideFilter = !$scope.hideFilter;
    };

    $scope.calcTotal = function () {
      var totalValue = 0;
      $.each($scope.saleItems, function (index, saleItem) {
        totalValue = totalValue + (saleItem.amount * saleItem.product.price)
      });
      $scope.totalValue = totalValue;
    };

    $scope.create = function () {
      var data = {
        customer: $scope.customer,
        saleItems: $scope.saleItems
      };
      $http.post('/sale/create', data).success(function (data) {
          alert('Sale successfully created');
        }
      );
    }
  })

  app.controller('saleListController', function ($scope, $http) {

    $scope.init = function () {
      $http.get('/sale').success(function (data) {
        $scope.sales = data;
        console.log($scope.sales)
      });
    }


  });


})();


