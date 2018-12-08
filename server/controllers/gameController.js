var gameData = require('../models/gameData');
var pace = require('../models/pace');
var terrain = require('../models/terrain');
var weather = require('../models/weather');

exports.currentData = gameData.getData();

exports.getGameData = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData);
}

exports.getData = function() {
    return exports.currentData;
}

exports.updateGameData = function(req, res) {
    exports.currentData.currentTerrain = terrain.getTerrain();
    exports.currentData.currentWeather = weather.getRandomWeather();
    
    exports.currentData.daysOnTrail++;
    exports.currentData.milesTraveled += Math.floor(exports.currentData.currentPace.miles * exports.currentData.currentWeather.miles);
    exports.currentData.groupHealth += exports.currentData.currentWeather.health;
    exports.currentData.groupHealth += exports.currentData.currentPace.health;
    exports.currentData.groupHealth = 100;
    if(exports.currentData.daysOnTrail >= 45) {
        exports.currentData.messages = "ya took too long and now yer ded";
        exports.currentData.groupHealth = 0;
        exports.currentData.playerStatus = [true, true, true, true, true];
    }
    if(exports.currentData.milesTraveled >= 500) {
        exports.currentData.messages = "wow, u really went and did it";
    }
    if(exports.currentData.groupHealth > 100) {
        exports.currentData.groupHealth = 100;
    }

    var deathRoll = Math.floor(Math.random() * 100) + 1;
    if(exports.currentData.groupHealth <= 0) {
        exports.currentData.playerStatus = [true, true, true, true, true];
        exports.currentData.messages = "You're all dead."
    } else if(exports.currentData.groupHealth < 20) {
        if(deathRoll <= 10) {
            var i = 4;
            while(exports.currentData.playerStatus[i] == true) {
                i--;
            }
            exports.currentData.playerStatus[i] = true;
            exports.currentData.messages = "A member of your party has died.";
        }
    } else if(exports.currentData.groupHealth < 50) {
        if(deathRoll <= 3) {
            var i = 4;
            while(exports.currentData.playerStatus[i] == true) {
                i--;
            }
            exports.currentData.playerStatus[i] = true;
            exports.currentData.messages = "A member of your party has died.";
        }
    } else {
        exports.currentData.messages = "Another day on the trail...";
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData);
}

exports.getPace = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData.currentPace);
}

exports.setPace = function(req, res) {
    console.log("Changed pace to: " + pace.getAllPaces()[req.params.id].name);
    exports.currentData.currentPace = pace.getAllPaces()[req.params.id];
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData.currentPace);
}

exports.resetGameData = function(req, res) {
    exports.currentData = gameData.getData();
    res.setHeader('Content-Type', 'application/json');
    console.log(exports.currentData);
    res.send(exports.currentData);
}

