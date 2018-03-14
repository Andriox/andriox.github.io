var app = angular.module('WeatherForecastApp',['ngRoute','ngResource','WFControllers']);

app.config([ '$routeProvider', function($routeProvider) {
     	$routeProvider.when('/', {
     		templateUrl : 'views/Home.html',
     		controller : 'HomeController'
     	});
}]);

var controllers = angular.module('WFControllers', []);
