var gameData = require('../models/gameData');
var pace = require('../models/pace');
var terrain = require('../models/terrain');
var weather = require('../models/weather');

exports.currentData = gameData.getData();

exports.getGameData = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData);
}

exports.updateGameData = function(req, res) {
    exports.currentData.currentTerrain = terrain.getTerrain();
    exports.currentData.currentWeather = weather.getRandomWeather();
    
    exports.currentData.daysOnTrail++;
    exports.currentData.milesTraveled += Math.floor(exports.currentData.currentPace.miles * exports.currentData.currentWeather.miles); 
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData);
}

exports.getPace = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData.currentPace);
}

exports.resetGameData = function(req, res) {
    exports.currentData = gameData.getData();
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData);
}