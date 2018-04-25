var axios = require('axios');

module.exports = class Update {
    constructor() {

    }

    UpdateState(params) {
        console.log(params);
        return new Promise(function(resolve, reject) {
            if (!params.address || !params.state)
                return reject("Unable to update device, no device or state given");

            axios({
                method : 'POST',
                url : 'http://' + params.address + ':8000/api/state/changestate',
                data : {
                    state : params.state
                }
            }).then(response => {
                if (response.statusCode !== 200) 
                    return reject("Unable to update device");

                return resolve(response);
            }).catch(error => {
                return reject(error);
            });
        });
    }
};