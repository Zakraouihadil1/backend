const http = require('http');
const app = require('./app');
const router =require('./routers')

app.set('port', process.env.PORT || 4000);
const server = http.createServer(app);

server.listen(process.env.PORT || 4000);