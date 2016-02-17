(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .factory('FilmsService', FilmsService);

    FilmsService.$inject = ['$http', '$q', '_'];
    function FilmsService($http, $q, _) {

        var service = {
            getFilms: getFilms
        };

        return service;

        function getFilms() {
            return $http.get('http://swapi.co/api/films/')
                .then(function (res) {

                    var allFilmsPromises = _.map(res.data.results, function (film) {
                        var releaseYear = film.release_date.substring(0, 4);
                        return getFilmImdbId(film.title, releaseYear)
                            .then(function (imdbDetails) {
                                return {
                                    title: film.title,
                                    plot: imdbDetails.Plot,
                                    director: film.director,
                                    releaseYear: releaseYear,
                                    coverUrl: 'covers/' + imdbDetails.imdbID + '.jpg',
                                    url: film.url
                                };
                            });
                    });

                    return $q.all(allFilmsPromises);
                });
        }

        function getFilmImdbId(filmName, filmYear) {
            return $http.get('http://www.omdbapi.com/?t=' + filmName + '&y=' + filmYear + '&plot=short&r=json')
                .then(function (res) {
                    return res.data;
                });
        }
    }

})();
