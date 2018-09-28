window.onload = text;
var text = function fadeText() {
	$('h2').fadeOut(500);
	$('h2').fadeIn(500);
}
setInterval(text, 1500);
document.addEventListener("keydown", function(event) {
	if(event.keyCode == 32) {
		window.location = "mainmenu";
	}
})
