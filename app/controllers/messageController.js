// controller for alternative message transfrom
app.controller('alternativeCtrl', ['$scope', 'message', function($scope, message){
	$scope.message = {};
	try {
		$scope.message = message.getMessage();
		$scope.message.then(function(message){
			$scope.message = message;
			$scope.text = message.data;
		});
	} catch(error){
		console.error(error);
	}
}]);