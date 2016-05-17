app.controller("main", ["$scope", function($scope) {
	$scope.posts = [
		{
			author: "Nicolás",
			date: new Date(),
			content: "Hola carola"
		},
		{
			author: "Nadia",
			date: new Date(),
			content: "Vamos boca carajo"
		},
		{
			author: "Nicolás",
			date: new Date(),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac cursus turpis, at dictum lorem. Aliquam feugiat massa quis tortor venenatis, tristique vehicula mauris mollis. Vestibulum elementum ipsum quis augue mollis, dictum consectetur felis blandit. Cras venenatis euismod nibh at vestibulum. Fusce ante metus, rutrum vel odio in, mattis dapibus nisl. Vestibulum et placerat nibh, at sollicitudin risus. Donec ligula leo, commodo vitae arcu non, eleifend condimentum dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur maximus ex augue, sit amet blandit tellus iaculis a."
		}
	];
}]);