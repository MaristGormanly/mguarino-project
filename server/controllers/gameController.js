var gameData = require('../models/gameData');
exports.data = gameData.getData();

exports.getGameData = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.data);
}