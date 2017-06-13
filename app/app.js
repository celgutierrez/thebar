angular.module('Bar', ['BarCtrls', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/gallery.html'
            })
            .state('events', {
                url: '/events',
                templateUrl: 'views/events.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html'
            })
            .state('press', {
                url: '/press',
                templateUrl: 'views/press.html'
            })
            .state('gallery', {
                url: '/gallery',
                templateUrl: 'views/gallery.html'
            });
    }]);
