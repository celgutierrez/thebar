var app = angular.module('Bar', ['BarCtrls', 'ui.router', 'ngAnimate', 'ngTouch', 'ui.bootstrap']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
            })
            .state('gallery', {
                url: '/gallery',
                templateUrl: 'views/gallery.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
            .state('layout', {
                url: '/layout',
                templateUrl: 'views/layout.html'
            })
            .state('events', {
                url: '/events',
                templateUrl: 'views/events.html'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'views/404.html'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
]);
