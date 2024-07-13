const app = require('../app.js')
const serverless = require('serverless-http');

app()
module.exports.handler = serverless(app);
