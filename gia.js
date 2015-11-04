function events() {
    document.getElementById('login_button').addEventListener('click', login_animate);
    document.getElementById('signup_button').addEventListener('click', signup_animate);
    inputbox = document.getElementsByClassName("inputbox");
}

function login_animate() {
    
}

function signup_animate() {
    
}

function clearBox(box) {
	box.value = "";
}

$(document).ready(function() {
	events();
});
