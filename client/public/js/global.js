var audio = new Audio('/music/ScapeMain.mp3');
audio.loop = true;
var playing = true;
window.onload = audio.play();

document.addEventListener("keyup", function(event) {
	if(event.keyCode == 52 && playing == true) {
		audio.pause();
		playing = false;
		document.getElementById("soundText").innerHTML = "loud mode";
	} else if(event.keyCode == 52 && playing == false) {
		audio.play();
		playing = true;
		document.getElementById("soundText").innerHTML = "quiet mode";
	}
})
window.onload = text;
var text = function fadeText() {
	$("#fadetext").fadeOut(500);
	$("#fadetext").fadeIn(500);
}
setInterval(text, 1500);







