window.onload = text;
var text = function fadeText() {
	$("#fadetext").fadeOut(500);
	$("#fadetext").fadeIn(500);
}
setInterval(text, 1500);
