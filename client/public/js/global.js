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

