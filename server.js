// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const socketIo = require("socket.io");
// Get our API routes
const api = require('./server/routes/api');
const electricity = require('./server/routes/electricity');
const getData = require('./server/routes/getData');
const storeData = require('./server/routes/storeData');
const app = express();
var sql = require('mssql'); // MS Sql Server client

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist'))); 
// Set our api routes
app.use('/api', api);
app.use('/api/electricity', electricity);
app.use('/api/get', getData);
app.use('/api/store', storeData);


// config for your database
var config = {
    user: 'sentinelwater', // update me
    password: 'Imagine18', // update me
    server: 'sentinelserver.database.windows.net', // update me
    database: 'sentinelbeta',
    options: {
      encrypt: true
    }
};


// connect to your database
sql.connect(config, function (err) {
  if (err) console.log(err);
});
  
var request = new sql.Request();

global.request = request;
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || 1337;
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
const io = socketIo(server); 

//connect to socket
server.listen(port);
io.on('connect', function (socket) {
    console.log('Connected client on port %s.', port);
    socket.on('message', function (m) {
        console.log('[server](message): %s', JSON.stringify(m));
        io.emit('message', m);
    });
    socket.on('disconnect', function () {
        console.log('Client disconnected');
    });
});

global.io = io;


/**
 * Listen on provided port, on all network interfaces.
 */
//server.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = request;
