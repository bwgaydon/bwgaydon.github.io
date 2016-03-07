function contextSwitch(button) {
    if (button.hasClass("selected")) return;
    else {
        /*
        sidebar button selection:
        1. remove selected from active
        2. hide pane
        3. add selected to button
        4. show new pane
        5. set active to new button
        */
        
        active.removeClass("selected");
        document.getElementById(active[0].id.replace("_button", "")).style.display = "none";
        button.addClass("selected");
        document.getElementById(button[0].id.replace("_button", "")).style.display = "block";
        active = button;
        /*
        if(active[0].id == "reports_button") $('#app_container').css("left","0px");
        else $('#app_container').css("left","-120px");
        */
        
        if(active[0].id == "reports_button") {
            $('.app_button').each(function() {
                $(this).css("left","120px");
            });
        }
        else {
            $('.app_button').each(function() {
                $(this).css("left","0px");
            });
        }
        
    }
}

//get "xyz" from "variable=xyz"
function getQueryVariable(variable)
{
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
       var pair = vars[i].split("=");
       if(pair[0] == variable){return pair[1];}
   }
   return(false);
}

$(document).ready(function() {
    //global variables
    //view switches controlled via buttons
    active = $("#metrics_button");
    active.addClass("selected");
    document.getElementById(active[0].id.replace("_button", "")).style.display = "block";

    //set up menu buttonanimations
    $(".menu_button").each(function() {
        this.addEventListener("click", function() {
            contextSwitch($(this));
        });
    });
    //load app icons/URLs
    //this requires each field in JSON be titled the same as the corresponding DOM element
    appsObject = $.getJSON("/appdata/apps.json", function() {
        $('.app_button').each(function() {
            //$('#CRM')[0].style.backgroundImage = " url(' " + appsObject.responseJSON.CRM.appIcon + " ') ";
            var first = "$('#" + this.id + "')[0].style.backgroundImage = ";
            var second = '"' + "url('" + '"' + "+ appsObject.responseJSON." + this.id + ".appIcon + " + '"' + "')" + '"';
            eval(first+second);
        });
    });

    
    //if redirect from oauth page, catch codes
    if(window.location.search.substring(1) != "") {
        var code = getQueryVariable("code");
        console.log("code= " + code);
    }
    
});
