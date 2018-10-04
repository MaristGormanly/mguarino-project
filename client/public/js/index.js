var audio = new Audio('/music/ScapeMain.mp3');
window.onload = audio.play();
document.addEventListener("keydown", function(event) {
	if(event.keyCode == 32) {
		window.location = "mainmenu";
	}
})
