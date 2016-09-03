var myApp = angular.module('sceneApp',[]);

myApp.controller('ItemsController', ['$scope', function($scope) {
  $scope.items = ['Lightsaber', 'Kylo Ren mask'];
}]);
