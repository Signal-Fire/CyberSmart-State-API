/* jshint esversion : 6 */
var request = require('request');

module.exports = class Retriever {
    constructor() {

    }

    RetrieveState(device) {
        return new Promise(function(resolve, reject) {
            request
            .get('http://' + device.address + ':3000/api/state/get')
            .on('response', response => {
                if (response.statusCode !== 200) 
                    return reject("Unable to retrieve device information");

                return resolve(response);
            }).on('error', error => {
                return reject(error);
            });
        });
    }
};