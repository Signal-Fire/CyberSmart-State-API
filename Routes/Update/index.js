/* jshint esversion: 6*/
var route = require('express').Router(),
    Updater = new(require('../../Handlers/Update'))(),
    Calculator = require('../../Handlers/Calculator');

route.post('/state', function(req, res) {
    Updater.UpdateState(req.body).then(newState => {
        return res.status(200).send(newState);
    }).catch(error => {
        return res.status(400).send({ "error " : error });
    });
});

module.exports = route;