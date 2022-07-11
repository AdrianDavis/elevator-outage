// service for alternative message transform
app.service('message', ['$http', '$q', function Message($http, $q){
	this.getMessage = function() {
		var deferred = $q.defer();
		var httpPromise = $http.get('app/services/alternate-accessible-service.json')
		.then(function(message){
			deferred.resolve(message);
			message.text = message.data;
		},
		// error function
		function(reason){
			reason.error = true;
			reason.somethingWrong = reason;
			$log.warn(data, status, headers, config);
		});
		return deferred.promise;
	}
}]);