var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var config = require('../Configuration');
var conn = mongoose.createConnection(config.database);

var Schema = mongoose.Schema;

var StateSchema = new Schema({
    state: {
        type : Number,
        required : true
    },
    device: {
        type : String,
        required : true
    },
    timestamp : {
        type : Date,
        required : true,
        default : Date.now
    }
});

module.exports = conn.model('Device', StateSchema);