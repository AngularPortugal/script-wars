(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .controller('FilmsController', FilmsController);

    FilmsController.$inject = ['$state', '$stateParams', 'FilmsService'];
    function FilmsController($state, $stateParams, FilmsService) {
        var vm = this;

        vm.name = $stateParams.name;
        vm.selectedSide = $stateParams.side;
        vm.films = FilmsService.getFilms();

        if (vm.name === '' || vm.selectedSide === '') {
            $state.go('home');
        }
    }

})();
