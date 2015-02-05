'use strict';

angular.module('Netflix.directives', [])
    .directive('movieThumbnail', ['Movie', function(Movie){
        return {
            restrict: 'A',
            replace: true,
            template: '<img src="{{movieThumbnailImage}}" />',
            link: function ($scope, $element, $attrs) {
                var movieDetail = Movie.movieDetail($attrs['movieId']);
                $scope.movieThumbnailImage = movieDetail.summary.box_art['150x214'];
            }
        };
    }]);