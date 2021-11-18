require('dotenv').config();
const { Bootstrap } = require('./app');

const app = new Bootstrap();

app.init();