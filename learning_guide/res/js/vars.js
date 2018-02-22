 var url_home = "https://rawgit.com/poc-org/hrit/test";
 var url_image = "https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/";
 var url_mode2 = "https://rawgit.com/poc-org/hrit/test/learning_guide/pages/mode2page/modetwopage.html?page=";
 var mode2Image = "10.jpg";
    

var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {    
    $scope.url_home = "https://rawgit.com/poc-org/hrit/test";
    $scope.url_image = "https://raw.githubusercontent.com/poc-org/hrit/test/learning_guide/res/images/";
    $scope.url_mode2 = "https://rawgit.com/poc-org/hrit/test/mod2page.html?page=";
    
    $scope.location = function (page) {
        var pages = JSON.parse(conf);
        return pages[page].name;
    };
    $scope.mode2conf = function () {
        var pages = JSON.parse(mode2conf);
        return pages[0].name;
    };
});


