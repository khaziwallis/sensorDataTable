require('angular');
require('angular-route');
var app = angular.module('app',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.otherwise({
			redirectTo: '/home'
		})
});

app.controller('MainController', function ($scope) {
        $scope.message = 'dude its main Controller';
});
