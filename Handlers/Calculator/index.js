var State = require('../../Models/state');

module.exports = new class Calculator {
    constructor() {
        
    }

    CalculateUsage() {
        return new Promise(function(resolve, reject) {
            State.find({}, function(err, result) {
                if (err || result === null)
                    return reject("No result, or error");

                
                /*
                    Logic
                */
                return resolve(result);
            });
        });
    }
}