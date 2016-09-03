var myApp = angular.module('sceneApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greetings = [];
}]);
