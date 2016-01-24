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
  
	$(".menu_button").each(function() {
  	this.addEventListener("click",function(){
    	contextSwitch($(this));
    });
  });
  
});
