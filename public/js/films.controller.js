(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .controller('FilmsController', FilmsController);

    FilmsController.$inject = ['$state', '$stateParams', 'FilmsService', '_'];
    function FilmsController($state, $stateParams, FilmsService, _) {
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
    }

})();
