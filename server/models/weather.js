function weather(id, type, health, miles, prob) {
    this.id = id;
    this.type = type;
    this.health = health;
    this.miles = miles;
    this.prob = prob;
}

var allWeathers = []
allWeathers.push(new weather(0, "Very Hot", -8, .7, .1));
allWeathers.push(new weather(1, "Hot", -3, .9, .1));
allWeathers.push(new weather(2, "Warm", 1, 1, .2));
allWeathers.push(new weather(3, "Cool", 1, .95, .1));
allWeathers.push(new weather(4, "Cold", -5, .8, .1));
allWeathers.push(new weather(5, "Very Cold", -12, .7, .1));
allWeathers.push(new weather(6, "Rain", -4, .6, .1));
allWeathers.push(new weather(7, "Heavy Rain", -8, .4, .05));
allWeathers.push(new weather(8, "Snow", -15, .3, .05));
allWeathers.push(new weather(9, "Blizzard", -30, .1, .05));
allWeathers.push(new weather(10, "Heavy Fog", -3, .5, .05));

exports.getRandomWeather = function() {
    var num = Math.random();
    var probTotal = 0;
    var i = 0;
    while(probTotal <= num) {
        probTotal += allWeathers[i].prob;
        i++;
    }//while
    return allWeathers[i];
}

exports.getAllWeathers = function() {
    return allWeathers;
}