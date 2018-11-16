/*document.addEventListener("keypress", function(event) {
	if(event.keyCode == 32) {
		window.location = "mainmenu"
	}
})
*/
var gameContainer = document.getElementById('setupContent');
//var currentScreen = 0;
document.getElementById('submit').addEventListener('click', loadNextScreen)

function loadNextScreen() {
	fetch('/api/setup/firstScreen/').then(function(res) {
		res.text().then(function(data) {
			gameContainer.innerHTML = data;
		});
	});
};
