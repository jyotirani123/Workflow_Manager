const express = require('express');

/**
 *  Singleton instance of class App
 */

let instance = null;

class App {
    constructor() {
        if(instance) {
            return instance;
        }
        this.app = express();
        this.#setMiddlewares();
    }

    #setMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    start() {
        const APP_PORT = process.env.APP_PORT || 3001;
        this.app.listen(APP_PORT, () => {
            console.log(` >>>>>>>>>>>>>>>>>>>>>> Server is running on port ${APP_PORT} <<<<<<<<<<<<<<<<<<<<<<<<<<<<<`);
        });
    }
}

module.exports = App;