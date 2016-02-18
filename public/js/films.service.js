(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .factory('FilmsService', FilmsService);

    FilmsService.$inject = ['$http', '_'];
    function FilmsService($http, _) {

        var service = {
            getFilms: getFilms
        };

        return service;

        function getFilms() {
            return $http.get('http://swapi.co/api/films/')
                .then(function (res) {

                    // TODO: get film cover
                    var films = _.map(res.data.results, function (film) {
                        return {
                            title: film.title,
                            plot: film.opening_crawl,
                            director: film.director,
                            releaseYear: film.release_date.substring(0, 4),
                            coverUrl: 'covers/tt0076759.jpg',
                            url: film.url
                        };
                    });

                    return films;
                });
        }
    }

})();
