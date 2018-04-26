
module.exports = new class Poller {
    constructor() {

    }

    Poll() {
        Retriever.RetrieveState().then(response => {
            
        }).catch(error => {
            
        });
    }
}