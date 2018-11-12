function terrain(name, image) {
    this.name = name;
    this.image = image;
}

var allTerrains = [];
allTerrains.push(new terrain("Plains", ""));
allTerrains.push(new terrain("Mountains", ""));
allTerrains.push(new terrain("Forest", ""));
allTerrains.push(new terrain("Desert", ""));

exports.getTerrain = function() {
    var num = Math.floor(Math.random() * terrain.length);
    return allTerrains[num];
}

exports.getAllTerrains = function() {
    return allTerrains;
}