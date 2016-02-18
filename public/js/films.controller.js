(function () {
    'use strict';

    angular.module('scriptWarsApp')
        .controller('FilmsController', FilmsController);

    FilmsController.$inject = ['$state', '$stateParams'];
    function FilmsController($state, $stateParams) {
        var vm = this;

        vm.name = $stateParams.name;
        vm.selectedSide = $stateParams.side;

        vm.films = [
            {
                title: 'A New Hope',
                releaseYear: '1977',
                coverUrl: 'covers/tt0076759.jpg'
            },
            {
                title: 'The Empire Strikes Back',
                releaseYear: '1980',
                coverUrl: 'covers/tt0080684.jpg'
            },
            {
                title: 'Return of the Jedi',
                releaseYear: '1983',
                coverUrl: 'covers/tt2301123.jpg'
            },
            {
                title: 'The Phantom Menace',
                releaseYear: '1999',
                coverUrl: 'covers/tt0120915.jpg'
            },
            {
                title: 'Attack of the Clones',
                releaseYear: '2002',
                coverUrl: 'covers/tt0121765.jpg'
            },
            {
                title: 'Revenge of the Sith',
                releaseYear: '2005',
                coverUrl: 'covers/tt0121766.jpg'
            },
            {
                title: 'The Force Awakens',
                releaseYear: '2015',
                coverUrl: 'covers/tt2488496.jpg'
            }
        ];

        if (vm.name === '' || vm.selectedSide === '') {
            $state.go('home');
        }
    }

})();
