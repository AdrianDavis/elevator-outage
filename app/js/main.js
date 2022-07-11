(function(){
	var $j = jQuery.noConflict();
	$j(document).ready(function(){
		// closes all of the .info divs
		function closeLine() {
			// adds close class to all lines
			$j('.info').removeClass('open').addClass('close');
		}
		closeLine();
		
		// opens and closes the lines
		function openLine() {
			// starts open close click
			$j('.display').click(function(e){
				var info = e.currentTarget.nextElementSibling;
				var evt = e.currentTarget.nextElementSibling.className;
				
				if(evt == 'info close'){
					$j(info).removeClass('close').addClass('open');
				} else if(evt == 'info open'){
					$j('article').blur();
					$j(info).removeClass('open').addClass('close');
				} else {
					console.log('Error?');
				}
			});
		};
		openLine();
		
		function initAdjustWindow(){
			return {
				match: function(){
					closeLine();
				},
				unmatch: function(){
					closeLine();
				}
			};
		}
	});
})();
