// filter for alternative message text
app.filter('htmlCleanUp', ['$sce', function($sce){
	return function(stringToParse){
		return $sce.trustAsHtml(stringToParse);
	};
}]);