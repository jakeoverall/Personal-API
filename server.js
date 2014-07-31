var express = require('express');
var bodyParser = require('body-parser');

var name = { 'name': 'Jake Overall' };
var location = { 'address': '1514 E Nebraska Place', 'City': 'Nampa', 'State': 'ID' };
var hobbies = ['JavaScript', 'C#', 'Snowboarding'];

var mentions = [{ 'url': 'http://www.google/+JakeOverall' }];

var friends = [{ 'name': 'Jimmy' }];

var occupations = [{
    'position': 'Director of Clinical Serives',
    'company': 'Family Home Health'
}, {
    'position': 'Lifeguard',
    'company': 'City of Nampa'
}];

var app = express();


app.use(bodyParser.json());

app.get('/name', function (req, res) {
    res.status(200).json(name);
});

app.get('/location', function (req, res) {
    res.status(200).json(location);
});

app.get('/hobbies', function (req, res) {
    if (req.query.order === 'asc') {
        res.status(200).json(hobbies.sort());
    };
    
    if (req.query.order === 'des') {
        res.status(200).json(hobbies.reverse());
    };

    res.status(200).json(hobbies);
});

app.get('/occupations', function (req, res) {
    res.status(200).json(occupations);
});

app.get('/occupations/latest', function (req, res) {
    res.status(200).json(occupations[0]);
});


app.get('/mentions', function(req, res) {
    res.status(200).json(mentions);
});

app.get('/friends', function (req, res) {
    res.status(200).json(friends);
});


app.post('/mentions', function (req, res) {
    var newMention = req.body;

    mentions.push(newMention);

    res.status(201).json(newMention);
});

app.post('/friends', function (req, res) {
    var newFriend = req.body;

    friends.push(newFriend);

    res.status(201).json(newFriend);
});

var port = 9080;

app.listen(port, function () {
    console.log('server listening on port ' + port);
});