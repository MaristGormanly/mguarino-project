document.addEventListener("keydown", function(event) {
	if(event.keyCode == 32) {
		window.location = "mainmenu";
	}
})

playerList.sort((a,b) => b.score - a.score).forEach((Player, ind) => {
	$("#list").append(`${ind + 1}) ${Object.values(Player).join(" | ")} <br />`);
})


