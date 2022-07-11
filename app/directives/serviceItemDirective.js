// directive for service items
app.directive('serviceItem', ['data', function(data){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/views/status.html',
		scope: true
	};
}]);