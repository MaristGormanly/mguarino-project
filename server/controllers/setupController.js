var gameData = require('../models/gameData');
var gameController = require('../controllers/gameController');
var professions = require('../models/professions');

exports.currentData = gameController.getData();

exports.setPlayerNames = function(req, res) {
    exports.currentData.playerNames.push(req.params.names);
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData.playerNames);
}

exports.setProfession = function(req, res) {
    var chosen = professions.getAllProfessions()[req.params.id];
    console.log(chosen);
    exports.currentData.playerProfession = chosen.name;
    exports.currentData.playerMoney = chosen.money;
    res.setHeader('Content-Type', 'application/json');
    console.log(exports.currentData);
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
    + "<p id=\"selectedOption\" >Which would you like to choose?</p>"
    + "<form action=\"oregonTrail.js\" method=\"POST\">"
    + "<input type = \"text\" id = \"selection\">"
    + "<input type = \"button\" id = \"submit\" value = \"Submit\" />"
    + "</form>";

var screen2 = "<p>Enter your wagon leader's name</p>"
    + "<form action=\"oregonTrail.js\" method=\"POST\">"
    + "<input type = \"text\" id = \"selection\">"
    + "<input type = \"button\" id = \"submit\" value = \"Submit\" />"
    + "</form>";

var screen3 = "<p>Enter the rest of your wagon members' names</p>"
    + "<form action=\"oregonTrail.js\" method=\"POST\">"
    + "<input type = \"text\" id = \"member1\"><br />"
    + "<input type = \"text\" id = \"member2\"><br />"
    + "<input type = \"text\" id = \"member3\"><br />"
    + "<input type = \"text\" id = \"member4\"><br />"
    + "<input type = \"button\" id = \"submit\" value = \"Submit\" />"
    + "</form>";
    
var screen4 = "<p>donezo</p>"

exports.setupScreens.push(screen1);
exports.setupScreens.push(screen2);
exports.setupScreens.push(screen3);
exports.setupScreens.push(screen4);

exports.getSetupScreen = function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send(exports.setupScreens[req.params.id]);
}