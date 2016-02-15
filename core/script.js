function contextSwitch(button) {
    if (button.hasClass("selected")) return;
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

    //set up menu buttonanimations
    $(".menu_button").each(function() {
        this.addEventListener("click", function() {
            contextSwitch($(this));
        });
    });
    
    var windowParams = "left=100,top=50,width=600,height=600";
    $("#CRM")[0].addEventListener("click", function() {
    window.open("https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=3MVG9uudbyLbNPZM9tgYt1cA4yglnVMRyvCK01x2K8j3Qo1I.MkpK2mm8xTrBdwNPR8BG1HLN4S_5aRnwYPUc&client_secret=3910440158623989535&scope=full%20refresh_token&redirect_uri=https://fake.fake&state=sfdc", "Salesforce OAuth", "windowParams");
    });
    
    $("#marketing")[0].addEventListener("click", function() {
    window.open("https://login.mailchimp.com/oauth2/authorize?response_type=code&redirect_uri=https%3A%2F%2Ffake.fake&state=mailchimp3&client_id=627660219231", "Mailchimp OAuth", "windowParams");
    });
    
    $("#accounting")[0].addEventListener("click", function() {
    window.open("https://appcenter.intuit.com/Connect/Begin?oauth_token=qyprdDTz75mmcY0hDAaLYDxKkyNjtsX7XQZ58UFVyottByeg&oauth_callback=https%3A%2F%2Ffake.fake%3Fstate%3Dquickbooks", "Quickbooks OAuth", "windowParams");
    });
    
    $("#support")[0].addEventListener("click", function() {
    window.open("https://appcenter.intuit.com/Connect/Begin?oauth_token=qyprdqJYJc8o1MlkOnpXquZYNHohxwpSOla0VTxIvOGQSNTp&oauth_callback=https%3A%2F%2Ffake.fake%3Fstate%3Dquickbooks", "Quickbooks OAuth", "windowParams");
    });
    
    

});
