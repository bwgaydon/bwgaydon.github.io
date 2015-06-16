function main() {

	headers = document.querySelectorAll('.header'),
	index = 0;
	
	//size overflow pane
	overflow_pane = document.getElementById('overflow_pane');
	overflow_pane.style.height = window.height;
	overflow_pane.style.width = window.width;
	
	function onScroll() {
		//if div reaches top of page
		//copy div into overflow pane
	}
	
	// only listen for scroll events
	window.addEventListener('scroll', onScroll, false);
	
	

};

$(document).ready(main);
