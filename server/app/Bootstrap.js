const App = require('./App');
const Connection = require('./Connection');

let instance = null;

class Bootstrap {
    constructor() {
        if(instance) return instance;

        this.app = new App();
        this.db = new Connection();
    }

    init() {
        this.db.connect();
        this.app.start();
    }
}

module.exports = Bootstrap;