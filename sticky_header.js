function main() {

	headers = document.getElementsByClassName('header'),
	i = 0;	//header index
	
	//size overflow pane
	overflow_pane = document.getElementById('overflow_pane');
	overflow_header = document.getElementById('overflow_header');
	
	function onScroll() {
		//if div reaches top of page
		//copy div into overflow pane
		if(window.scrollY >= headers[i].offsetTop) {
			overflow_header.innerHTML = headers[i].innerHTML;
			headers[i].style.visibility = 'hidden';
			overflow_header.style.display = 'block';
			i++;
			console.log("i is now " + i);
		}
	}
	
	// only listen for scroll events
	document.getElementsByClassName('container')[0].addEventListener('scroll', onScroll, false);
	
	$('.container')[0].style.height=window.innerHeight+'px';

};

$(document).ready(main);
