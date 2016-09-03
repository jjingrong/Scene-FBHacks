var myApp = angular.module('sceneApp',[]);

myApp.controller('ItemsController', ['$scope', 'GetShowProducts', function($scope, GetShowProducts) {
	$scope.getData = function() {
    setTimeout(function() {
      chrome.storage.local.get("video", function(value) {
  			  GetShowProducts.getShowProducts(value.video, function(response){
  	        	$scope.greetings = [response];
              var jsonResponse = JSON.parse(angular.toJson(response.data));
              $scope.items = jsonResponse;
  	    		});
  		})
    }, 1500);

    }
	// @param: id of item pressed 
	$scope.itemCellPressed = function(_id) {
		for (var i = 0; i < $scope.items.length; i++) {
			// Object found
			if ($scope.items[i].id == _id) {
				// Toggle selected
				if ($scope.items[i].selected) {
					$scope.items[i].selected = 0
					console.log($scope.items[i])
				} else {
					$scope.items[i].selected = 1
					console.log($scope.items[i])
				}
			}
		}
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
