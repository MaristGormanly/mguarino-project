var audio = new Audio('/music/ScapeMain.mp3');
window.onload = audio.play();
var playing = true;

document.addEventListener("keyup", function(event) {
	if(event.keyCode == 52 && playing == true) {
		audio.pause();
		playing = false;
	} else if(event.keyCode == 52 && playing == false) {
		audio.play();
		playing = true;
	}
})



window.onload = text;
var text = function fadeText() {
	$("#fadetext").fadeOut(500);
	$("#fadetext").fadeIn(500);
}
setInterval(text, 1500);





/*var music = function playMusic() {
	var audio = new Audio('/music/ScapeMain.mp3');
	audio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	});
	audio.play();
}*/

