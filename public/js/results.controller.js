(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['$scope', '$state', '$stateParams', '$interval', 'VotingService', 'results'];
    function ResultsController($scope, $state, $stateParams, $interval, VotingService, results) {
        var vm = this;

        vm.name = $stateParams.name;
        vm.selectedSide = $stateParams.side;

        displayMostVoted(results);

        var updateInterval = $interval(updateResults, 2000);

        $scope.$on('$destroy', function () {
            $interval.cancel(updateInterval);
        });

        function displayMostVoted(results) {
            vm.film = results[0].film;
            vm.votes = results[0].votes;
        }

        function updateResults() {
            VotingService.getResults()
                .then(displayMostVoted);
        }
    }

})();
