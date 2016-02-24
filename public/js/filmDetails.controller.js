(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .controller('FilmDetailsController', FilmDetailsController);

    FilmDetailsController.$inject = ['$uibModalInstance', 'film'];
    function FilmDetailsController($uibModalInstance, film) {
        var vm = this;

        vm.film = film;

        vm.vote = function () {
            $uibModalInstance.close(vm.film);
        };

        vm.close = function () {
            $uibModalInstance.dismiss('close');
        };
    }

})();
