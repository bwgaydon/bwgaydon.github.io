function events() {
    document.getElementById('login_button').addEventListener('click', login_animate);
    document.getElementById('signup_button').addEventListener('click', signup_animate);
}

function login_animate() {
    alert('login');
}

function signup_animate() {
    alert('signup');
}

$(document).ready(function() {
	events();
});
