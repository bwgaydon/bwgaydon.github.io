function main() {

	headers = document.getElementsByClassName('header'),
	i = 0;	//header index
	
	sticky = document.getElementById('overflow_header');
	container = document.getElementsByClassName('container')[0];
	
	function next_header() {
		if(i>=0 && i < headers.length) return headers[i];
		else return null;
	}
	
	function prev_header() {
		if(i>0 && i < headers.length) return headers[i-1];
		else if(i == headers.length-1) return headers[i];
		else return null;
	}
	
	
	function onScroll() {
		//if div reaches top of page
		//copy div into overflow pane
		
		if(container.scrollTop >= next_header().offsetTop) {
			next = next_header();
			sticky.innerHTML = next.innerHTML;
			sticky.style.backgroundColor = getComputedStyle(next).backgroundColor;
			next.style.visibility = 'hidden';
			sticky.style.display = 'block';
			if(i < headers.length-1) i++;
		}
		console.log(container.scrollTop+"<="+ prev_header().offsetTop);
		if(container.scrollTop <= prev_header().offsetTop) {
			
			//replace header in its place
			prev_header().style.visibility = "visible";
			if(i != 0) i--;		//IMPORTANT: this changes return value of prev_header
			//insert new prev into sticky
			sticky.innerHTML = prev_header().innerHTML;
			sticky.style.backgroundColor = getComputedStyle(prev_header()).backgroundColor;
		}
	}
	
	// only listen for scroll events
	container.addEventListener('scroll', onScroll, false);
	
	container.style.height=window.innerHeight+'px';

};

$(document).ready(main);
