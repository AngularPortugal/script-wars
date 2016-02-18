(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .controller('FilmsController', FilmsController);

    FilmsController.$inject = ['$state', '$stateParams', 'FilmsService', '_', '$uibModal'];
    function FilmsController($state, $stateParams, FilmsService, _, $uibModal) {
        var vm = this;

        vm.name = $stateParams.name;
        vm.selectedSide = $stateParams.side;

        FilmsService.getFilms()
            .then(function (films) {
                vm.films = _.sortBy(films, 'releaseYear');
            });

        if (vm.name === '' || vm.selectedSide === '') {
            $state.go('home');
        }

        vm.showFilmDetails = function (film) {

            var detailsModal = $uibModal.open({
                templateUrl: 'partials/filmDetails.partial.html',
                controller: 'FilmDetailsController',
                controllerAs: 'vm',
                resolve: {
                    film: film
                }
            });

            detailsModal.result
                .then(function (film) {
                    // TODO: register film vote
                });
        };
    }

})();
