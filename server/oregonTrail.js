const express = require('express')
const app = express()
app.use(express.static('client/public'));
const port = 1337

var topTen = require('./controllers/topTenController');

app.route('/api/topTen')
	.get(topTen.getCurrentScores);

var gameData = require('./controllers/gameController');

app.route('/api/gameData')
	.get(gameData.getGameData);

app.route('/api/gameUpdate')
	.get(gameData.updateGameData);

app.route('/api/resetGame')
	.get(gameData.resetGameData);

app.get('/', function (req, res) {
	res.sendFile('index.html', {root: './client/views'})
});
app.get('/mainmenu', function (req, res) {
	res.sendFile('mainmenu.html', {root: './client/views'})
});
app.get('/topten', function (req, res) {
	res.sendFile('topten.html', {root: './client/views'})
});
app.get('/setup', function (req, res) {
	res.sendFile('setup.html', {root: './client/views'})
});
app.get('/trail', function (req, res) {
	res.sendFile('trail.html', {root: './client/views'})
});

app.listen(port, () => console.log(`Oregon Snail standing by on port ${port}!`))