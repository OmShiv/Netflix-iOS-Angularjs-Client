'use strict';

(function () {

    var NetflixDB = Netflix.mockResponse,

        findMovie = function (id) {
            return NetflixDB.movies[id];
        };

    angular.module('Netflix.movieServices', [])
        .factory('MovieList', [
            function () {
                return {
                    getMovies: function () {
                        return NetflixDB.lists;
                    }
                }
            }])
        .factory('Movie', [
            function () {
                return {
                    movieDetail: function (movieId) {
                        return findMovie(parseInt(movieId));
                    }
                }
            }]);
}());