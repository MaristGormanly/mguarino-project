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

exports.setupScreens = [];

var screen1 = "<p>Choose your life:</p>"
    + "<ol id=\"professionQuestions\" >"
    + "<li id=\"bankerChoice\" >Be a banker from Boston</li>"
    + "<li id=\"carpenterChoice\" >Be a carpenter from Ohio</li>"
    + "<li id=\"farmerChoice\" >Be a farmer from Illinois</li>"
    + "<li id=\"differencesChoice\" >Find out the differences</li>"
    + "</ol>"
    + "<div id=\"selectedOption\" >Which would you like to choose?</div>";

exports.setupScreens.push(screen1);

exports.getSetupScreen = function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send(exports.setupScreens[0]);
}