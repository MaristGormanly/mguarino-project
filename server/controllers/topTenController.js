var topTen = require('../models/topTen')
var mysql = require('mysql');

/*
var con = mysql.createConnection({
    host: "localhost",
    user: "ttUser",
    password: "12345"
})

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
})
*/
exports.currentTopScores = [];
/*
exports.currentTopScores.push(topTen.addScore("mike", 999999, "6/12/15"));
exports.currentTopScores.push(topTen.addScore("Buncan", -10, "4/5/16"));
exports.currentTopScores.push(topTen.addScore("bongo", 5000, "5/5/17"));
exports.currentTopScores.push(topTen.addScore("chimpus", 11000, "1/1/11"));
exports.currentTopScores.push(topTen.addScore("zonk", 1500, "9/3/14"));
exports.currentTopScores.push(topTen.addScore("chaz", 7000, "10/10/10"));
exports.currentTopScores.push(topTen.addScore("chris crawley", 0, "4/20/69"));
exports.currentTopScores.push(topTen.addScore("sam", 50000, "3/5/16"));
exports.currentTopScores.push(topTen.addScore("zippy", 100000, "7/15/13"));
exports.currentTopScores.push(topTen.addScore("yerrr", 3500, "5/30/15"));
*/
exports.getCurrentScores = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentTopScores);
}

