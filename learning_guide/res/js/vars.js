var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.url_home = "https://rawgit.com/poc-org/hrit/test";
	$scope.location = function(page){
		var pages = JSON.parse(conf);
		return pages[page].name;
	};
	$scope.mode2conf = function(){
		var pages = JSON.parse(mode2conf);
		return pages[0].name;
	};
});
