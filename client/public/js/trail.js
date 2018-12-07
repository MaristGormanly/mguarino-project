document.addEventListener("keydown", function(event) {
	if(event.keyCode == 32) {
		updateData();
	}
	if(event.keyCode == 27) {
		window.location = "mainmenu";
	}
	if(event.keyCode == 80) {
		changePace();
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
	deathCheck(gameInfo);
}

function resetGame() {
	fetch('/api/reset').then(function(res) {
		res.text().then(function(data) {
			gameInfo = JSON.parse(data);
			displayData(gameInfo);
			console.log(gameInfo);
		})
	});
}

function deathCheck(info) {
	var messageBox = document.getElementById('messageBox');
	if(info.groupHealth <= 0) {
		//alert("u ded haha");
		messageBox.style.visibility = "visible";
		document.addEventListener("keydown", function(e) {
			if(e.keyCode == 49) {
				resetGame();
				window.location = "setup";
			}
			if(e.keyCode == 50) {
				resetGame();
				window.location = "mainmenu";
			}
		})
	}
}

function changePace() {
	var paceName = prompt("What would you like to change the pace to? (Steady, Strenuous, Grueling, Resting)");
	if(!(paceName == "Steady" || paceName == "Strenuous" || paceName == "Grueling" || paceName == "Resting")) {
		alert("Incorrect input.");
	} else {
		if(paceName == "Steady") {
			paceId = 0;
		} else if(paceName == "Strenuous") {
			paceId = 1;
		} else if(paceName == "Grueling") {
			paceId = 2;
		} else if(paceName == "Resting") {
			paceId = 3;
		}
		fetch('/api/setPace/'+paceId, {
			method: 'post',
			headers: {'Content-Type': 'application/json, charset=UTF-8'},
			body: '{"data": "' + paceId + '"}'
		}).then(function(res) {
			if(res.status !== 200)
			 console.log('problem with ajax call! ' + res.status + " msg: " + res.value);
			return;
		});
		console.log("pace " + paceName + " saved");
		document.getElementById('pace').innerHTML = paceName;
	}
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
	document.getElementById('message').innerHTML = info.messages;
}