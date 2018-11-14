var gameData = require('../models/gameData');
var professions = require('../models/professions');

exports.currentData = gameData.getData();

exports.setPlayerNames = function(req, res) {
    exports.currentData.playerNames.push(req.params.names);
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData.playerNames);
}

exports.setProfession = function(req, res) {
    var chosen = professions.getAllProfessions()[req.params.id];
    exports.currentData.playerProfession = chosen.name;
    exports.currentData.playerMoney = chosen.money;
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData.playerProfession + ", " + exports.currentData.playerMoney);
    //res.send(exports.currentData.playerMoney);
}

var months = ["March", "April", "May", "June", "July"];

exports.setStartMonth = function(req, res) {
    exports.currentData.startMonth = months[req.params.id];
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData.startMonth)
}