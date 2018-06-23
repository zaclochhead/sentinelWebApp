
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {
    const month = req.query.month;
    request.query(`
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(month,datediff(month,`+(0-month*12)+`,GETDATE()),0)
    AND dateID < dateadd(month,datediff(month,`+(-1-month*12)+`,GETDATE()),0)
    
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(month,datediff(month,`+(1-month*12)+`,GETDATE()),0)
    AND dateID < dateadd(month,datediff(month,`+(0-month*12)+`,GETDATE()),0)
    
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(month,datediff(month,`+(2-month*12)+`,GETDATE()),0)
        AND dateID < dateadd(month,datediff(month,`+(1-month*12)+`,GETDATE()),0)
    
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(month,datediff(month,`+(3-month*12)+`,GETDATE()),0)
        AND dateID < dateadd(month,datediff(month,`+(2-month*12)+`,GETDATE()),0)

    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(month,datediff(month,`+(4-month*12)+`,GETDATE()),0)
        AND dateID < dateadd(month,datediff(month,`+(3-month*12)+`,GETDATE()),0)
        
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(month,datediff(month,`+(5-month*12)+`,GETDATE()),0)
        AND dateID < dateadd(month,datediff(month,`+(4-month*12)+`,GETDATE()),0) 
        
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(month,datediff(month,`+(6-month*12)+`,GETDATE()),0)
        AND dateID < dateadd(month,datediff(month,`+(5-month*12)+`,GETDATE()),0)

    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(month,datediff(month,`+(7-month*12)+`,GETDATE()),0)
        AND dateID < dateadd(month,datediff(month,`+(6-month*12)+`,GETDATE()),0)
        
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(month,datediff(month,`+(8-month*12)+`,GETDATE()),0)
        AND dateID < dateadd(month,datediff(month,`+(7-month*12)+`,GETDATE()),0)
        
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(month,datediff(month,`+(9-month*12)+`,GETDATE()),0)
        AND dateID < dateadd(month,datediff(month,`+(8-month*12)+`,GETDATE()),0)

    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(month,datediff(month,`+(10-month*12)+`,GETDATE()),0)
        AND dateID < dateadd(month,datediff(month,`+(9-month*12)+`,GETDATE()),0)
        
    select 
    avg(level)
    from test
    WHERE dateID >= dateadd(month,datediff(month,`+(11-month*12)+`,GETDATE()),0)
        AND dateID < dateadd(month,datediff(month,`+(10-month*12)+`,GETDATE()),0)`, function (err, recordset) {

        if (err) {
            res.send(err);
        }
        // sql.close();
        // send records as a response
        else {
           //
            res.send((recordset));
            io.emit('yearlyWaterLevels',recordset.recordsets);            
        } 
    });
});
module.exports = router;