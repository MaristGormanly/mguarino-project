document.addEventListener("keydown", function(event) {
	if(event.keyCode == 32) {
		updateData();
	}
})
/*
var days = document.getElementById('days');
var miles = document.getElementById('miles');
var health = document.getElementById('health');
var weather = document.getElementById('weather');
var pace = document.getElementById('pace');
var terrain = document.getElementById('terrain');
var memberStatus = document.getElementById('memberStatus');
*/
loadData();

function loadData() {
	fetch('/api/data').then(function(res) {
		res.text().then(function(data) {
			gameInfo = JSON.parse(data);
			console.log(gameInfo);
			displayData(gameInfo);
		})	
	});	
}

function updateData() {
	fetch('/api/update').then(function(res) {
		res.text().then(function(data) {
			gameInfo = JSON.parse(data);
			console.log(gameInfo);
			displayData(gameInfo);
		})
	})
}

function displayData(info) {
	document.getElementById('days').innerHTML = info.daysOnTrail;
	console.log("yernk");
	document.getElementById('miles').innerHTML = info.milesTraveled;
	document.getElementById('health').innerHTML = info.groupHealth;
	document.getElementById('weather').innerHTML = info.currentWeather.type;
	document.getElementById('pace').innerHTML = info.currentPace.name;
	document.getElementById('terrain').innerHTML = info.currentTerrain.name;
	document.getElementById('memberStatus').innerHTML = info.playerStatus;
	if(info.currentTerrain.name == "Plains") {
		document.getElementById('background').style.backgroundImage = 'url(/images/plains.png)';
	} else if(info.currentTerrain.name == "Mountains") {
		document.getElementById('background').style.backgroundImage = 'url(/images/mountains.png)';
	} else if(info.currentTerrain.name == "Forest") {
		document.getElementById('background').style.backgroundImage = 'url(/images/forest.png)';
	} else if(info.currentTerrain.name == "Desert") {
		document.getElementById('background').style.backgroundImage = 'url(/images/desert.png)';
	}
}