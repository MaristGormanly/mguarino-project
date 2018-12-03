var interval = null;
partyTime = false;
document.addEventListener("keydown", function(event) {
	if(event.keyCode == 51) {
		window.location = "topten"
	} else if(event.keyCode == 49) {
		window.location = "setup"
	} else if(event.keyCode == 53 && partyTime == false) {
		party();
		partyTime = true;
	} else if(event.keyCode == 53 && partyTime == true) {
		partyStop();
		partyTime = false;
	}
})
function party() {
	alert("It's party time. (WARNING: FLASHING LIGHTS)");
	var counter = 1;
	interval = setInterval(function() {
		var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
		document.body.style.background = colors[counter%colors.length];
		counter++;
		console.log(counter + colors[counter%colors.length])
	}, 100);
}
function partyStop() {
	alert("Party's over.");
	clearInterval(interval);
	document.body.style.background = "black";
}
