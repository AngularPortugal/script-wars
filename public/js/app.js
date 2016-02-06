var app = angular
	.module('scriptWarsApp', []);

app.controller('MainController', function ($http) {
	var vm = this;

	vm.title = 'Script Wars';
});