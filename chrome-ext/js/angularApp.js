var myApp = angular.module('sceneApp',[]);

myApp.controller('StateController', ['$scope', function($scope) {
  $scope.empty = true
}]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greetings = ['Hello','Hola'];
}]);
