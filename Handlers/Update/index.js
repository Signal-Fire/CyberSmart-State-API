/* jshint esversion: 6 */
var request = require('request');

module.exports = class Update {
    constructor() {

    }

    UpdateState(params) {
        return new Promise(function(resolve, reject) {
            if (!params.ip || !params.state)
                return reject("Unable to update device, no device or state given");

            request.post({ 
                headers: {'content-type' : 'application/json'},
                url: 'http://' + params.address + ':8000/api/state/changestate', 
                body: JSON.stringify({state : params.state}) 
            }, 
            function optionalCallback(err, httpResponse, body) {
                if (err) 
                    return reject("Change state failed" + err);                  

                return resolve("Updated state");
            });
        });
    }
};