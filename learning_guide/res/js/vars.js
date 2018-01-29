var app = angular.module('myApp', []);
var data = JSON.parse(order);
alert(data[0].topfirst);
app.controller('myCtrl', function($scope) {
    $scope.url_home = "https://rawgit.com/poc-org/hrit/test";
});
