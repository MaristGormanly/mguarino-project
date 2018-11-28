/*document.addEventListener("keypress", function(event) {
	if(event.keyCode == 32) {
		window.location = "mainmenu"
	}
})
*/
var gameContainer = document.getElementById('setupContent');
loadNextScreen(0);
var currentScreen = 1;
document.getElementById('submit').addEventListener('click', 
	function() {
		saveData(currentScreen);
		currentScreen++;
	}
);

function loadNextScreen(newScreen) {
	fetch('/api/setup/'+newScreen).then(function(res) {
		res.text().then(function(data) {
			gameContainer.innerHTML = data;
		});
	});
	console.log(newScreen)
};


function saveData(currentScreen) {
	var data = document.getElementById('selection').value;
	
}
