var gameData = require('../models/gameData');

exports.currentData = gameData.getData();

exports.setPlayerNames = function(req, res) {
    exports.currentData.playerNames[req.params.id] = req.body.playerName;
    res.setHeader('Content-Type', 'text/plain');
    res.send(exports.currentData.playerNames);
}