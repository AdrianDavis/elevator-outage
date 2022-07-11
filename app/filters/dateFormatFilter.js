// filter for alternative message text
app.filter('dateFormat', [function(){
	return function(dateString){
		return Date.parse(dateString);
	};
}]);