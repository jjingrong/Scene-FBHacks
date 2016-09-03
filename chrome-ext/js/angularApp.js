var myApp = angular.module('sceneApp',[]);

myApp.controller('ItemsController', ['$scope', 'GetShowProducts', function($scope, GetShowProducts) {
    chrome.tabs.executeScript(null, {file: "inject.js"});
	$scope.getData = function() {
    setTimeout(function() {
      chrome.storage.local.get("video", function(value) {
  			  GetShowProducts.getShowProducts(value.video, function(response){
  	        	$scope.greetings = [response];
              var jsonResponse = JSON.parse(angular.toJson(response.data));
              $scope.items = jsonResponse;
  	    		});
  		})
        chrome.storage.local.set({'video': 0});

    }, 1500);
    }
}]);

myApp.service('GetShowProducts', ['$http', function($http){
    return{
        "getShowProducts": function(showID, callback){
          console.log(showID);
            $http({
                method: 'GET',
                url: 'http://scene-fb-hacks.herokuapp.com/product/getForShow?showID=' + showID,
            }).then(callback, function errorCallback(response){console.log("failed to get products")});
        }
    }
}])
