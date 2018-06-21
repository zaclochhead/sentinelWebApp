
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {

/*     io.emit('message',JSON.parse('{"message": '+level+'}'));
    io.emit('temperature', JSON.parse('{"temperature": ' + level + '}'));  */

    // query to the database and get the records
    request.query(`select avg(level) from test
        WHERE dateID >= dateadd(day,datediff(day,7,GETDATE()),0)`, function (err, recordset) {
        //I added these 2 lines
        if (err) res.send(err);
        // sql.close();
        // send records as a response
        else res.send(recordset); 
    });
});
module.exports = router;