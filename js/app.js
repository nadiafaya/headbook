var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider',
  	function($routeProvider) {
    	$routeProvider.
      	when('/', {
        	templateUrl: 'views/home.html',
        	controller: 'main'
      	}).
      	otherwise({
        	redirectTo: '/'
      	});
	}
]);