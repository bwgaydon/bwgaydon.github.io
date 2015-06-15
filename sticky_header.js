function main() {

	headers = document.querySelectorAll('.header'),
	lastScrollY = 0,
	ticking = false;
	
	
	/**
	 * Callback for our scroll event - just
	 * keeps track of the last scroll value
	 */
	function onScroll() {
	    lastScrollY = window.scrollY;
	    requestTick();
	}
	
	/**
	 * Calls rAF if it's not already
	 * been done already
	 */
	function requestTick() {
	    if(!ticking) {
	        requestAnimationFrame(update);
	        ticking = true;
	    }
	}
	
	/**
	 * Our animation callback
	 */
	function update() {
	    var header = null,
	        headerTop = [],
	        offset = 0;
	
		// first loop is going to do all
		// the reflows (since we use offsetTop)
	    for(var h = 0; h < headers.length; h++) {
	
	        header = headers[h];
	        headerTop[h] = header.offsetTop;
	    }
	
		// second loop is going to go through
		// the movers and add the left class
		// to the elements' classlist
	    for(var h = 0; h < headers.length; h++) {
	
	        header = headers[h];
	console.log('scrollY is:'+(lastScrollY-headerTop[h]));
	        if(lastScrollY >= headerTop[h]) {
	            header.style.top = header.style.top + ((lastScrollY - headerTop[h]) + "px");
	        } else {
	            header.style.top = header.style.top + ((lastScrollY - headerTop[h]) + "px");
	        }
	
	    }
	
		// allow further rAFs to be called
	    ticking = false;
	}
	
	// only listen for scroll events
	window.addEventListener('scroll', onScroll, false);

};

$(document).ready(main);
