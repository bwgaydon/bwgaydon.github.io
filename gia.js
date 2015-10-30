$(document).ready(function() {
  document.getElementById('signup').style.top = 0 - window.getComputedStyle($(signup)[0]).height;
  document.getElementById('signup').style.top = 0 - window.getComputedStyle($(login)[0]).height;
});
