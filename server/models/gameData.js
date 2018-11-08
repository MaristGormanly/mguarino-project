function gameData(inNames, inStatus, inProfession, inMoney, inMonth, inTraveled, inHealth, inPace, inDays, inWeather, inTerrain, inMessage) {
    this.playerNames = [null,null,null,null,null];
    this.playerStatus = [false,false,false,false,false];
    this.playerProfession = null;
    this.playerMoney = 0;
    this.startMonth = null;
    this.milesTraveled = 0;
    this.groupHealth = 100;
    this.currentPace = null;
    this.daysOnTrail = 0;
    this.currentWeather = null;
    this.currentTerrain = null;
    this.messages = "bop";
}

exports.getData = function() {
    var data = new gameData();
    return data;
}