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
const getDay = require('./server/routes/getDay');
const getWeek = require('./server/routes/getWeek');
const getYear = require('./server/routes/getYear');
const getCurrentDay = require('./server/routes/getCurrentDay');
const getCurrentWeek = require('./server/routes/getCurrentWeek');
const getCurrentYear = require('./server/routes/getCurrentYear');
const emailer = require('./server/routes/emailer');
const weather = require('./server/routes/weather');
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
app.use('/api/getWeek', getWeek);
app.use('/api/getYear', getYear);
app.use('/api/getDay', getDay);
app.use('/api/getCurrentWeek', getCurrentWeek);
app.use('/api/getCurrentYear', getCurrentYear);
app.use('/api/getCurrentDay', getCurrentDay);
app.use('/api/emailer', emailer);
app.use('/api/weather', weather);
// config for your database
// var config = {
//     user: 'sentinelwater', // update me
//     password: 'Imagine18', // update me
//     server: 'sentinelserver.database.windows.net', // update me
//     database: 'sentinelbeta',
//     options: {
//       encrypt: true
//     }
// };


// connect to your database
// sql.connect(config, function (err) {
//   if (err) console.log(err);
// });
  
//var request = new sql.Request();

//global.request = request;
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
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

// Connection string for the IoT Hub service
//
// NOTE:
// For simplicity, this sample sets the connection string in code.
// In a production environment, the recommended approach is to use
// an environment variable to make it available to your application
// or use an x509 certificate.
// https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security
//
// Using the Azure CLI:
// az iot hub show-connection-string --hub-name {YourIoTHubName} --output table
//var connectionString = 'HostName=sentinelIoT.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=HccsK+hrS8NqsFJCA7hut1ipeVK7cwR7/C3tOl+D7O8=';

// Using the Node.js SDK for Azure Event hubs:
//   https://github.com/Azure/azure-event-hubs-node
// The sample connects to an IoT hub's Event Hubs-compatible endpoint
// to read messages sent from a device.
var { EventHubClient, EventPosition } = require('azure-event-hubs');

var printError = function (err) {
  console.log(err.message);
};

// Display the message content - telemetry and properties.
// - Telemetry is sent in the message body
// - The device can add arbitrary application properties to the message
// - IoT Hub adds system properties, such as Device Id, to the message.
var printMessage = function (message) {
/*   console.log('Telemetry received: ');
  console.log(JSON.stringify(message.body));
  console.log('Application properties (set by device): ')
  console.log(JSON.stringify(message.applicationProperties));
  console.log('System properties (set by IoT Hub): ')
  console.log(JSON.stringify(message.annotations));
  console.log("waterLevel")
  console.log(message.body.waterLevel); */
  if(message.body.waterLevel != null){    
    io.emit('level', JSON.parse('{"level": ' + message.body.waterLevel + '}')); 
  }
  if(message.body.waterLevelTwo != null){
    io.emit('levelTwo', JSON.parse('{"level": ' + message.body.waterLevelTwo + '}')); 
  }
  //console.log('');
  //console.log("waterLevel");
};

// Connect to the partitions on the IoT Hub's Event Hubs-compatible endpoint.
// This example only reads messages sent after this application started.
// var ehClient;
// EventHubClient.createFromIotHubConnectionString(connectionString).then(function (client) {
//  // console.log("Successully created the EventHub Client from iothub connection string.");
//   ehClient = client;
//   return ehClient.getPartitionIds();
// }).then(function (ids) {
//   //console.log("The partition ids are: ", ids);
//   return ids.map(function (id) {
//     return ehClient.receive(id, printMessage, printError, { eventPosition: EventPosition.fromEnqueuedTime(Date.now()) });
//   });
// }).catch(printError);

//module.exports = request;
