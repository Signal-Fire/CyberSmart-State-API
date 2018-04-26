var axios = require('axios');

module.exports = new class Retriever {
    constructor() {

    }

    RetrieveState(device) {
        return new Promise(function(resolve, reject) {
            axios({
                method : 'GET',
                url : 'http://' + device.address + ':8000/api/state/get'
            }).then(res => {
                if (response.statusCode !== 200) 
                    return reject("Unable to retrieve device information");

                return resolve(res);
            }).catch(error => {
                return reject(error);
            });
        });
    }

    RetrieveDevices() {
        
    }
};