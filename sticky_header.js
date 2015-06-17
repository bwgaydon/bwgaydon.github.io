function main() {

	headers = document.getElementsByClassName('header'),
	i = 0;	//header index
	
	overflow_header = document.getElementById('overflow_header');
	container = document.getElementsByClassName('container')[0];
	
	function onScroll() {
		//if div reaches top of page
		//copy div into overflow pane
		if(container.scrollTop >= headers[i].offsetTop) {
			overflow_header.innerHTML = headers[i].innerHTML;
			overflow_header.style.backgroundColor = getComputedStyle(headers[i]).backgroundColor;
			headers[i].style.visibility = 'hidden';
			overflow_header.style.display = 'block';
			if(headers.length != i+1) i++;
		}
	}
	
	// only listen for scroll events
	container.addEventListener('scroll', onScroll, false);
	
	container.style.height=window.innerHeight+'px';

};

$(document).ready(main);
