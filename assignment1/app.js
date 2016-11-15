(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.menu ="";
  $scope.message ="";

  $scope.checkItems = function() {
   if($scope.menu.length == 0)  {
     $scope.message = "Please enter data first";
   }
   else {
     var itemsCount = $scope.menu.split(',').length;
       $scope.message = (itemsCount <= 3) ? "Enjoy!": "Too much!";
  }

 }

};

})();
