function contextSwitch(button) {
	if(button.hasClass("selected")) return;
  else {
  	currentMenu.toggleClass("selected");
    button.toggleClass("selected");
    currentMenu = button;
  }
}

$(document).ready(function() {
	//global variables
	currentMenu = $("#metrics_button");
  	currentMenu.addClass("selected");
  	
  	$("#egg")[0].addEventListener("hover",function() {
  		$(this).css("visibility":"visible");
  	});
  	
	$(".menu_button").each(function() {
  	this.addEventListener("click",function(){
    	contextSwitch($(this));
    });
  });
  
});
