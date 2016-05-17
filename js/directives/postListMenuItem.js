app.directive("postListMenuItem", [function() {
	return {
		restrict: "C",
		transclude: true,
		replace: true,
		scope: true, // create a new scope
		templateUrl: "/views/postListMenuItem.html",
		link: function(scope, elem, attrs) {
			scope.orderBy = attrs.orderBy;
			scope.isSelected = function() {
				return scope.selectedOrder.id === scope.orderBy;
			};
		},
		controller: function($scope) {
			$scope.reOrderPosts = function() {
				$scope.selectedOrder.id = $scope.orderBy;
				$scope.posts = $scope.posts.sort(function(a, b){
					return a[$scope.orderBy] < b[$scope.orderBy];
				});
			};
		}
	};
}])