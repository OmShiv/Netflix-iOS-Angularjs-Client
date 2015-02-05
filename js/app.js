'use strict';

angular.module('Netflix', [
    'ngRoute',
    'hmTouchEvents',
    'Netflix.controllers',
    'Netflix.movieServices',
    'Netflix.directives'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'partials/movie-list.html'
        })
        .when('/movies/:movieId', {
            templateUrl: 'partials/movie-detail.html'
        })
        .otherwise({
            redirectTo: '/list'
        });
}])