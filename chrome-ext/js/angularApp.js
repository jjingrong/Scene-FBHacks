var myApp = angular.module('sceneApp',[]);

myApp.controller('ItemsController', ['$scope', 'GetShowProducts', function($scope, GetShowProducts) {
	$scope.getData = function() {
		chrome.storage.local.get("video", function(value) {
			  GetShowProducts.getShowProducts(value.video, function(response){
	        	$scope.greetings = [response];
            var jsonResponse = JSON.parse(angular.toJson(response.data));
            console.log(jsonResponse[0]);
            // for (var item in jsonResponse) {
            //   console.log(item);
            // }
            $scope.items = jsonResponse;
	    		});
		})
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
