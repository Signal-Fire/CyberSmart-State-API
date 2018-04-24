var route = require('express').Router(),  
    Calculator = require('../../Handlers/Calculator'),
    State = require('../../Models/state');

route.get('/energy', function(req, res) {
    try {
        Calculator.CalculateUsage().then(usage => {
            return res.status(200).send(usage);
        }).catch(error => {
            return res.status(400).send(error);
        });
    } catch (ex) {
        return res.status(500).send({ 'error' : ex });
    }
});

module.exports = route;