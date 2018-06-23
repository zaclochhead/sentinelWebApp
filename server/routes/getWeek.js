
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {
    request.query(`
        select 
        avg(level)
        from test
        WHERE dateID >= dateadd(day,datediff(day,0,GETDATE()),0)

        select 
        avg(level)
        from test
        WHERE dateID >= dateadd(day,datediff(day,1,GETDATE()),0)
        AND dateID < dateadd(day,datediff(day,0,GETDATE()),0)
        
        select 
        avg(level)
        from test
        WHERE dateID >= dateadd(day,datediff(day,2,GETDATE()),0)
            AND dateID < dateadd(day,datediff(day,1,GETDATE()),0)
        
        select 
        avg(level)
        from test
        WHERE dateID >= dateadd(day,datediff(day,3,GETDATE()),0)
            AND dateID < dateadd(day,datediff(day,2,GETDATE()),0)

        select 
        avg(level)
        from test
        WHERE dateID >= dateadd(day,datediff(day,4,GETDATE()),0)
            AND dateID < dateadd(day,datediff(day,3,GETDATE()),0)
            
        select 
        avg(level)
        from test
        WHERE dateID >= dateadd(day,datediff(day,5,GETDATE()),0)
            AND dateID < dateadd(day,datediff(day,4,GETDATE()),0) 
            
        select 
        avg(level)
        from test
        WHERE dateID >= dateadd(day,datediff(day,6,GETDATE()),0)
            AND dateID < dateadd(day,datediff(day,5,GETDATE()),0) `, function (err, recordset) {

        if (err) {
            res.send(err);
        }
        // sql.close();
        // send records as a response
        else {
           //
            res.send((recordset));
            io.emit('weeklyWaterLevels',recordset.recordsets);            
        } 
    });
});
module.exports = router;