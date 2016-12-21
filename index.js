var mongoose = require('mongoose');
var express = require('express');
var app = express();

app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/bushcraft');

var gameSchema = mongoose.Schema({
    game : String,
    activeMonths : Array
});

var gameModel = mongoose.model('huntingSeasons', gameSchema);

var newGame = new gameModel();

newGame.game = 'Duck';
newGame.activeMonths = ['september', 'october', 'november'];

newGame.save(function(err, savedObject) {
    if(err) {
        console.log('sorry, there was an error.')
    } else {
        console.log('saved object');
        console.log(savedObject);
    }
});

mongoose.model('huntingSeasons').find(function(err, result) {
    console.log(result)
});

app.listen(8080, function() {
    console.log('app listening on port 8080');
})
