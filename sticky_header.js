function main() {

	headers = document.querySelectorAll('.header'),
	i = 0;	//header index
	
	//size overflow pane
	overflow_pane = document.getElementById('overflow_pane');
	overflow_header = document.getElementById('overflow_header');
	
	function onScroll() {
		//if div reaches top of page
		//copy div into overflow pane
		if(window.scrollY >= headers[i].offsetTop) {
			overflow_header.innerHTML = headers[i].innerHTML;
			headers[i].style.display = none;
			i++;
		}
	}
	
	// only listen for scroll events
	window.addEventListener('scroll', onScroll, false);
	
	

};

$(document).ready(main);
