function main() {

	headers = document.getElementsByClassName('header'),
	i = 0;	//header index
	
	sticky = document.getElementById('overflow_header');
	container = document.getElementsByClassName('container')[0];
	
	
	function onScroll() {
		//if div reaches top of page
		//copy div into overflow pane
		
		if(container.scrollTop >= headers[i].offsetTop) {
			sticky.innerHTML = headers[i].innerHTML;
			sticky.style.backgroundColor = getComputedStyle(headers[i]).backgroundColor;
			headers[i].style.visibility = 'hidden';
			sticky.style.display = 'block';
			if(headers.length != i+1) i++;
		}
		if(container.scrollTop <= headers[i-1].offsetTop) {
			sticky.innerHTML = headers[i-2].innerHTML;
			sticky.style.backgroundColor = getComputedStyle(headers[i-2]).backgroundColor;
			headers[i-1].style.visibility = "visible";
			if(i != 0) i--;
		}
	}
	
	// only listen for scroll events
	container.addEventListener('scroll', onScroll, false);
	
	container.style.height=window.innerHeight+'px';

};

$(document).ready(main);
