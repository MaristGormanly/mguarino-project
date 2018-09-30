window.onload = text;
function player(playerName, playerScore, playerDate) {
	this.name = playerName;
	this.score = playerScore;
	this.date = playerDate;
}
var mike = new player("mike", 9999999, "6/12/15");
var duncan = new player("duncan", -10, "4/5/16");
var bongo = new player("bongo", 5000, "5/5/17");
var chimpus = new player("chimpus", 11000, "1/1/11");
var zonk = new player("zonk", 1500, "9/3/14");
var chaz = new player("chaz", 7000, "10/10/10");
var chris = new player("chris crawley", 0, "4/20/69");
var sam = new player("sam", 50000, "3/5/16");
var zippy = new player("zippy", 100000, "7/15/13");
var yerrr = new player("yerrr", 3500, "5/30/15");
var playerList = [mike, duncan, bongo, chimpus, zonk, chaz, chris, sam, zippy, yerrr];
playerList.sort(function(a,b) {
	return b.score - a.score;
});
document.getElementById("scoreOne").innerHTML += Object.values(playerList[0]).join(" ");
document.getElementById("scoreTwo").innerHTML += Object.values(playerList[1]).join(" ");
document.getElementById("scoreThree").innerHTML += Object.values(playerList[2]).join(" ");
document.getElementById("scoreFour").innerHTML += Object.values(playerList[3]).join(" ");
document.getElementById("scoreFive").innerHTML += Object.values(playerList[4]).join(" ");
document.getElementById("scoreSix").innerHTML += Object.values(playerList[5]).join(" ");
document.getElementById("scoreSeven").innerHTML += Object.values(playerList[6]).join(" ");
document.getElementById("scoreEight").innerHTML += Object.values(playerList[7]).join(" ");
document.getElementById("scoreNine").innerHTML += Object.values(playerList[8]).join(" ");
document.getElementById("scoreTen").innerHTML += Object.values(playerList[9]).join(" ");
var text = function fadeText() {
	$('h2').fadeOut(500);
	$('h2').fadeIn(500);
}
setInterval(text, 1500);
document.addEventListener("keydown", function(event) {
	if(event.keyCode == 32) {
		window.location = "mainmenu";
	}
})
