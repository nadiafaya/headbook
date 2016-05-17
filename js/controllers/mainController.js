app.controller("main", ["$scope", function($scope) {
	
	$scope.selectedOrder = { id: "date" };


	$scope.posts = [
		{
			author: "Nicolás",
			date: new Date(2016,5,3),
			content: "Hola carola",
			likes: 1,
			comments: 1
		},
		{
			author: "Nadia",
			date: new Date(2016,5,2),
			content: "Vamos boca carajo",
			likes: 3,
			comments: 5
		},
		{
			author: "Nicolás",
			date: new Date(2016,5,1),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac cursus turpis, at dictum lorem. Aliquam feugiat massa quis tortor venenatis, tristique vehicula mauris mollis. Vestibulum elementum ipsum quis augue mollis, dictum consectetur felis blandit. Cras venenatis euismod nibh at vestibulum. Fusce ante metus, rutrum vel odio in, mattis dapibus nisl. Vestibulum et placerat nibh, at sollicitudin risus. Donec ligula leo, commodo vitae arcu non, eleifend condimentum dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur maximus ex augue, sit amet blandit tellus iaculis a.",
			likes: 7,
			comments: 2
		}
	];
}]);