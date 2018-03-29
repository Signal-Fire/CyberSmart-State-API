/* jshint esversion: 6*/
var route = require('express').Router(),
    Updater = new(require('../../Handlers/Update'))();

route.post('/state', function(req, res) {
    Updater.UpdateState(req.body).then(newState => {
        return res.status(200).send({ "state " : + newState });
    }).catch(error => {
        return res.status(400).send({ "error " : error });
    });
});

module.exports = route;