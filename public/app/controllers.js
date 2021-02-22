var app = angular.module('BarCtrls', ['BarServices', 'ngRoute', 'ngTouch']);
app.controller('SliderCtrl', function($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;

    $scope.slides = [{
        image: 'http://lorempixel.com/400/200/nightlife/1',
        id: currIndex++
    }, {
        image: 'http://lorempixel.com/400/200/nightlife/4',
        id: currIndex++
    }, {
        image: 'http://lorempixel.com/400/200/nightlife/2',
        id: currIndex++

    }, {
        image: 'http://lorempixel.com/400/200/nightlife/3',
        id: currIndex++

    }];

}); 

app.controller('mobileNav', function($scope) {
    $scope.hidemenu = false;
    var menuBtn = document.getElementById('menuBtn');

    if (screen.width <= 768 ) {
        angular.element(menuBtn).removeClass('mobile-only');
    }

    $scope.toggleMenu = function(){
        $scope.hidemenu = !$scope.hidemenu;
    }

});