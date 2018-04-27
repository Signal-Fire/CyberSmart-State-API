/* jshint esversion: 6*/
var route = require('express').Router(),
    Retriever = require('../../Handlers/Retrieve');

route.get('/status', function(req, res) {
    Retriever.RetrieveState(req.body).then(response => {
        return res.status(200).send(response);
    }).catch(error => {
        return res.status(400).send({ "error " : error });
    });
});

module.exports = route;