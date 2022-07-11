// directive for alternative message transform
app.directive('altService', ['data', 'message', function(data, message){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'app/views/alt.html',
		scope: true
	};
}]);