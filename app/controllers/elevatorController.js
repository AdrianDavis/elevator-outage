// controller for elevator status
app.controller('elevatorCtrl', ['$scope', 'data', function($scope, data){
	$scope.data = {};
	try {
		$scope.data = data.getData();
		$scope.data.then(function(data){
			$scope.data = data;
			$scope.meta = data.meta;
			$scope.results = data.results;
			$scope.updated = data.updated || new Date().toISOString();
			$scope.success = 'success';
		});
	} catch(error){
		console.error(error);
	}
}]);