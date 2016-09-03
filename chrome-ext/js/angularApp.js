var myApp = angular.module('sceneApp',[]);

myApp.controller('ItemsController', ['$scope', 'GetShowProducts', function($scope, GetShowProducts) {
	$scope.items = [];
	$scope.getData = function() {
		chrome.storage.local.get("video", function(value) {
			  GetShowProducts.getShowProducts(value.video, function(response){
	        	$scope.greetings = [response];
	    		});
		})
    }
}]);

myApp.service('GetShowProducts', ['$http', function($http){
    return{
        "getShowProducts": function(showID, callback){
            $http({
                method: 'GET',
                url: 'http://scene-fb-hacks.herokuapp.com/product/getForShow?showID=' + showID,
            }).then(callback, function errorCallback(response){console.log("failed to get products")});
        }
    }
}])
