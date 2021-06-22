const http = require('http');
const app = require('./app');

const router =  express.Router();
const alien = require('alien');

app.set('port', process.env.PORT || 4000);
const server = http.createServer(app);

server.listen(process.env.PORT || 4000);