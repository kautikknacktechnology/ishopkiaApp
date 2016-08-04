// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ishopkiaApp', ['ionic',
                               'ngCordova',
                               'ishopkiaApp.controllers',
                               'ishopkiaApp.services',
                               'ishopkiaApp.config',
                               'ishopkiaApp.directives',
                               'ishopkiaApp.indexCtrl',
                               'ishopkiaApp.loginCtrl',
                               'ishopkiaApp.registerCtrl',
                               ])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('login', {
        url: "/login",
        cache: false,
        templateUrl: "templates/login.html",
        controller: 'loginCtrl'
    })
        .state('register', {
            url: "/register",
            cache: false,
            templateUrl: "templates/register.html",
            controller: 'registerCtrl'
        })

    .state('app.index', {
        url: '/index',
        cache: false,
        views: {
            'menuContent': {
                templateUrl: 'templates/index.html',
                controller: 'indexCtrl'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});
