function main() {

	headers = document.querySelectorAll('.header'),
	i = 0;	//header index
	
	//size overflow pane
	overflow_pane = document.getElementById('overflow_pane');
	overflow_header = document.getElementById('overflow_header');
	
	function onScroll() {
		//if div reaches top of page
		//copy div into overflow pane
		console.log("window scroll = " + window.scrollY);
		console.log("header offset = " + headers[i].offsetTop);
		if(window.scrollY >= headers[i].offsetTop) {
			overflow_header.innerHTML = headers[i].innerHTML;
			headers[i].style.visibility = 'hidden';
			overflow_header.style.display = 'block';
			i++;
		}
	}
	
	// only listen for scroll events
	$(body).addEventListener('scroll', onScroll, false);
	
	$('.container-div')[0].style.height=window.innerHeight+'px';

};

$(document).ready(main);
