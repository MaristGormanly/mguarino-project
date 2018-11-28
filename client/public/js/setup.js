/*document.addEventListener("keypress", function(event) {
	if(event.keyCode == 32) {
		window.location = "mainmenu"
	}
})
*/
var gameContainer = document.getElementById('setupContent');
var currentScreen = 0;
document.onload(loadNextScreen(currentScreen))
document.getElementById('submit').addEventListener('click', saveData())

function loadNextScreen(currentScreen) {
	fetch('/api/setup/'+currentScreen).then(function(res) {
		res.text().then(function(data) {
			gameContainer.innerHTML = data;
		});
	});
	currentScreen++;
};

function saveData() {
	var data = document.getElementById('selection').value;
	fetch('/api/setData/'+currentScreen, {
		method: 'post',
		headers: {'Content-Type': 'application/json'}
	}).then(json).then(function(data) {
		console.log('success', data);
	})
	.catch(function(error) {
		console.log('failed', error);
	});
	loadNextScreen(currentScreen);
}