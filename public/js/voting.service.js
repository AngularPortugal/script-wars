(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .factory('VotingService', VotingService);

    VotingService.$inject = ['$http', '_'];
    function VotingService($http, _) {
        var apiKey = 'z6cZbCNGTdFYHaWt2H04gzD1M0FlnmoC';
        var baseUrl = 'https://api.mongolab.com/api/1';

        var service = {
            vote: vote,
            getResults: getResults
        };

        return service;

        function vote(film) {
            var voteIncrement = {
                "$inc": {
                    votes: 1
                },
                "$set": {
                    film: film
                }
            };

            return $http.put(baseUrl + '/databases/script-wars/collections/votes?apiKey=' + apiKey + '&q={"_id":"' + film.id + '"}&u=true', voteIncrement)
                .then(function (res) {
                    console.log(res);
                });
        }

        function getResults() {
            return $http.get(baseUrl + '/databases/script-wars/collections/votes?apiKey=' + apiKey)
                .then(function (res) {
                    return _.sortBy(res.data, 'votes').reverse();
                });
        }
    }

})();
