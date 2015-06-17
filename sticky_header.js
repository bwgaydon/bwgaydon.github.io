function main() {

	headers = document.getElementsByClassName('header'),
	i = 0;	//header index
	
	overflow_header = document.getElementById('overflow_header');
	container = document.getElementsByClassName('container')[0];
	
	function stick(source, target) {
		target.innerHTML = source.innerHTML;
		target.style.backgroundColor = getComputedStyle(source).backgroundColor;
		source.style.visibility = 'hidden';
		target.style.display = 'block';
	}
	
	function onScroll() {
		//if div reaches top of page
		//copy div into overflow pane
		
		if(container.scrollTop >= headers[i].offsetTop) {
			stick(headers[i], overflow_header);
			if(headers.length != i+1) i++;
		}
		if(container.scrollTop <= headers[i-1].offsetTop) {
			stick(headers[i], overflow_header);
			if(i != 0) i--;
		}
	}
	
	// only listen for scroll events
	container.addEventListener('scroll', onScroll, false);
	
	container.style.height=window.innerHeight+'px';

};

$(document).ready(main);
