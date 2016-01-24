$(document).ready(function() {
	$(".menu_button").each(function() {
  		this.addEventListener("click",function() {
			$(this).toggleClass("selected");
  	});
  });
  
});
