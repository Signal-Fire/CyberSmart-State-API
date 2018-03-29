/* jshint esversion: 6 */
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

const port = 8082;

app.use(bodyParser.urlencoded({
    extended : false
}));

app.listen(port, () => {
    console.log('Listen up kids, the Iron Islands fleet consists of ' + port + ' ships!');
});