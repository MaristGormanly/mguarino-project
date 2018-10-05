document.addEventListener("keydown", function(event) {
	if(event.keyCode == 32) {
		window.location = "mainmenu";
	}
})
function Player(playerName, playerScore, playerDate) {
	this.name = playerName;
	this.score = playerScore;
	this.date = playerDate;
}
var mike = new Player("mike", 9, "6/12/15");
var duncan = new Player("Buncan", -10, "4/5/16");
var bongo = new Player("bongo", 5000, "5/5/17");
var chimpus = new Player("chimpus", 11000, "1/1/11");
var zonk = new Player("zonk", 1500, "9/3/14");
var chaz = new Player("chaz", 7000, "10/10/10");
var chris = new Player("chris crawley", 0, "4/20/69");
var sam = new Player("sam", 50000, "3/5/16");
var zippy = new Player("zippy", 100000, "7/15/13");
var yerrr = new Player("yerrr", 3500, "5/30/15");
var playerList = [mike, duncan, bongo, chimpus, zonk, chaz, chris, sam, zippy, yerrr];



playerList.sort((a,b) => b.score - a.score).forEach((Player, ind) => {
	$("#list").append(`${ind + 1}) ${Object.values(Player).join(" | ")} <br />`);
})


