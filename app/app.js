var app = angular.module('Bar', ['ui.router', 'BarCtrls']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
            })
            .state('gallery', {
                url: '/gallery',
                templateUrl: 'views/gallery.html',
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html',
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
            })
            .state('press', {
                url: '/press',
                templateUrl: 'views/press.html',
            })
            .state('events', {
                url: '/events',
                templateUrl: 'views/events.html',
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
