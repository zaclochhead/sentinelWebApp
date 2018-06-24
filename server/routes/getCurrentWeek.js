
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {

    request.query(`
    select avg (level) from test
    WHERE dateID > dateadd(day,0,getdate())
    AND dateID < dateadd(day,1,GETDATE())
    
    select avg (level) from test
    WHERE dateID > dateadd(day,-1,getdate())
    AND dateID < dateadd(day,0,GETDATE())
    
    select avg (level) from test
    WHERE dateID > dateadd(day,-2,getdate())
    AND dateID < dateadd(day,-1,GETDATE())
    
    select avg (level) from test
    WHERE dateID > dateadd(day,-3,getdate())
    AND dateID < dateadd(day,-2,GETDATE())

    select avg (level) from test
    WHERE dateID > dateadd(day,-4,getdate())
    AND dateID < dateadd(day,-3,GETDATE())
        
    select avg (level) from test
    WHERE dateID > dateadd(day,-5,getdate())
    AND dateID < dateadd(day,-4,GETDATE())
        
    select avg (level) from test
    WHERE dateID > dateadd(day,-6,getdate())
    AND dateID < dateadd(day,-5,GETDATE())`, function (err, recordset) {

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