
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {
    const week = req.query.week;
    request.query(`
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(day,datediff(day,`+(-1-week*7)+`,GETDATE()),0)
    AND dateID < dateadd(day,datediff(day,`+(-2-week*7)+`,GETDATE()),0)
    
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(day,datediff(day,`+(0-week*7)+`,GETDATE()),0)
    AND dateID < dateadd(day,datediff(day,`+(-1-week*7)+`,GETDATE()),0)
    
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(day,datediff(day,`+(1-week*7)+`,GETDATE()),0)
        AND dateID < dateadd(day,datediff(day,`+(0-week*7)+`,GETDATE()),0)
    
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(day,datediff(day,`+(2-week*7)+`,GETDATE()),0)
        AND dateID < dateadd(day,datediff(day,`+(1-week*7)+`,GETDATE()),0)

    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(day,datediff(day,`+(3-week*7)+`,GETDATE()),0)
        AND dateID < dateadd(day,datediff(day,`+(2-week*7)+`,GETDATE()),0)
        
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(day,datediff(day,`+(4-week*7)+`,GETDATE()),0)
        AND dateID < dateadd(day,datediff(day,`+(3-week*7)+`,GETDATE()),0) 
        
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(day,datediff(day,`+(5-week*7)+`,GETDATE()),0)
        AND dateID < dateadd(day,datediff(day,`+(4-week*7)+`,GETDATE()),0)`, function (err, recordset) {

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