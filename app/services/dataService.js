// service for elevatorStatus
app.service('data', ['$http', '$q', '$log', function Data($http, $q, $log){
	this.getData = function() {
		var deferred = $q.defer();
		//var url = 'app/services/status-complete.json';
		var url = 'http://www3.septa.org/hackathon/elevator/index.php?=ALL&callback=JSON_CALLBACK';
		var httpPromise = $http.jsonp(url)
		.success(function(data, status, headers, config){
			deferred.resolve(data);
		})
		// error function
		.error(function(data, status, headers, config){
			$log.warn(data);
			$log.warn(status);
			$log.warn(headers);
			$log.warn(config);
		});
		return deferred.promise;
	}
}]);