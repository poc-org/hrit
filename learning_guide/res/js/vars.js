var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.url_home = "https://rawgit.com/poc-org/hrit/test";
	$scope.location = function(page){
		var pages = JSON.parse(order);
		return pages[page].name;
	};
});
