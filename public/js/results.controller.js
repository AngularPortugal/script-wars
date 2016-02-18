(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['$scope', '$state', '$stateParams', '$interval', 'VotingService'];
    function ResultsController($scope, $state, $stateParams, $interval, VotingService) {
        var vm = this;

        vm.name = $stateParams.name;
        vm.selectedSide = $stateParams.side;

        updateResults();

        var updateInterval = $interval(updateResults, 5000);

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
