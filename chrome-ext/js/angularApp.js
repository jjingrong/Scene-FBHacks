var myApp = angular.module('sceneApp',[]);

myApp.controller('ItemsController', ['$scope', 'GetShowProducts', function($scope, GetShowProducts) {
<<<<<<< HEAD
    chrome.tabs.executeScript(null, {file: "inject.js"});
=======
	$scope.price = 0
>>>>>>> 11c1cf90557d5e9ab939951ffc5ce327fd8ad4d2
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
	// @param: id of item pressed 
	$scope.itemCellPressed = function(_id) {
		for (var i = 0; i < $scope.items.length; i++) {
			// Object found
			if ($scope.items[i].id == _id) {
				// Toggle selected
				if ($scope.items[i].selected) {
					$scope.items[i].selected = 0
				} else {
					$scope.items[i].selected = 1
				}
				// Update price total
				$scope.price = getPriceTotal($scope.items);
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

// @param: Array of items
// @return: Monetary value of all items
function getPriceTotal(arr) {
	var totalPrice = 0.00
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i].selected)
		if (arr[i].selected) {
			console.log('selected!')
			console.log('totalPrice: ' + totalPrice)
			var numericValue = getNumericValueFromString(arr[i].price)
			totalPrice += numericValue
		}
	}
	return totalPrice
}

// @param: Unformatted String which contains price
// @return: Numeric value of money
function getNumericValueFromString(str) {
	return 1
}
