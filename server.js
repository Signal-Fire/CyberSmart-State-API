/* jshint esversion: 6 */
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    RetrieveRoutes = require('./Routes/Retrieve'),
    UpdateRoutes = require('./Routes/Update'),
    config = require('./Configuration');

app.use(bodyParser.urlencoded({
    extended : false
}));

app.use(bodyParser.json);

app.use('/retrieve', RetrieveRoutes);
app.use('/update', UpdateRoutes);

app.listen(config.port, () => {
    console.log('Listen up kids, the Iron Islands fleet consists of ' + config.port + ' ships!');
});