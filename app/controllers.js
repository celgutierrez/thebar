var app = angular.module('BarCtrls', ['BarServices']);
console.log('loaded');
app.controller('SliderCtrl', function($scope) {
    console.log('in the carousel');
    $scope.myInterval = 3000;
    $scope.slides = [{
        image: 'http://lorempixel.com/400/200/'
    }, {
        image: 'http://lorempixel.com/400/200/food'
    }, {
        image: 'http://lorempixel.com/400/200/sports'
    }, {
        image: 'http://lorempixel.com/400/200/people'
    }];
});
