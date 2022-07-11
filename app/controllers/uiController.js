// user interface controller
app.controller('uiCtrl', ['$scope', 'data', function($scope, data){
	$scope.data = {}
	try {
		$scope.data = data.getData();
		$scope.data.then(function(data){
			$scope.data = data;
			$scope.results = data.results;
			$scope.lineStatus = function(outage){
				if(outage == 0){
					return 'good';
				} else if (outage == null){
					return 'error';
				} else if (outage > 0){
					return 'update';
				} else {
					return '';
				}
			};
			var count = 0;
			var mfl = 0;
			var bsl = 0;
			var nhsl = 0;
			var trolley = 0;
			var rail = 0;
			var line;
			
			for(var i = 0; i < $scope.results.length; i++) {
				line = $scope.results[i].line;

				if (line == 'Market Frankford Line' || line == '69th Street North Bus Terminal'){
					++mfl;
				} else if (line == 'Broad Street Subway / Broad Ridge Spur'){
					++bsl;
				} else if (line == 'Norristown High Speed Line'){
					++nhsl;
				} else if (line == 'Trolley Lines'){
					++trolley;
				} else if (line == 'Regional Rail'){
					++rail;
				} else if (line == 'Bus'){
					++bus;
				} else {
					console.log('error? ' + line);
				}
			} // end of for loop

			$scope.mfl = mfl;
			$scope.bsl = bsl;
			$scope.nhsl = nhsl;
			$scope.trolley = trolley;
			$scope.rail = rail;
		});
	} catch(error){
		console.error(error);
	}//end of try
}]);