(function () {
  var app = angular.module('product-seller')

  app.directive('numberSpinner', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/partials/components/number-spinner.html',
      link: function ($scope, element, attrs) {
        $scope.amount = parseInt(attrs.value);
        $scope.minus = function () {
          var newAmount = $scope.amount - 1;
          if (newAmount >= attrs.min) {
            $scope.amount = newAmount;
          }
        };
        $scope.plus = function () {
          var newAmount = $scope.amount + 1;
          if (newAmount <= attrs.max) {
            $scope.amount = newAmount;
          }
        };
      }
    };
  });

})();

