'use strict';

angular.module('Netflix.controllers', [])
    .controller('MainController', ['$injector', function ($injector) {
        var $rootScope = $injector.get('$rootScope'),
            $location = $injector.get('$location');

        this.detailView = false;

        $rootScope.go = function(path){
          $location.url(path);
        }
    }])
    .controller('MovieListController', ['$scope', '$injector', function ($scope, $injector) {
        var $rootScope = $injector.get('$rootScope'),
            MovieList = $injector.get('MovieList');

        this.movies = MovieList.getMovies();

        this.init = function () {
            $scope.main.detailView = false;
        }

        this.holdAction = function ($evt, item) {
            var $element = $evt.element;
            this.previousElement && this.previousElement.removeClass('selected');

            $element.addClass('selected');
            this.previousElement = $element;
        }
        this.showMovie = function (movieId) {
            $rootScope.go('movies/'+movieId);
        }
    }])
    .controller('MovieDetailController', ['$scope',  '$injector', function($scope, $injector) {
        var $rootScope = $injector.get('$rootScope'),
            $routeParams = $injector.get('$routeParams'),
            Movie = $injector.get('Movie');

        var movieDetail = Movie.movieDetail($routeParams.movieId);

        this.thumbnailImage = movieDetail.summary.box_art['150x214'];
        this.shortTitle = movieDetail.summary.title.title_short;
        this.playTitle = movieDetail.summary.title.playback_title;
        this.init = function () {
            $scope.main.detailView = true;
            window.scrollTo(0, 0);
        }
    }])