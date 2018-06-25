
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {

    dateID = req.query.dateID;

    request.query(`
    select avg (level) from test
    WHERE dateID > dateadd(day,-1,'`+dateID+`')
    AND dateID < dateadd(day,1,'`+dateID+`')
    
    select avg (level) from test
    WHERE dateID > dateadd(day,-2,'`+dateID+`')
    AND dateID < dateadd(day,0,'`+dateID+`')
    
    select avg (level) from test
    WHERE dateID > dateadd(day,-3,'`+dateID+`')
    AND dateID < dateadd(day,-1,'`+dateID+`')
    
    select avg (level) from test
    WHERE dateID > dateadd(day,-4,'`+dateID+`')
    AND dateID < dateadd(day,-2,'`+dateID+`')

    select avg (level) from test
    WHERE dateID > dateadd(day,-5,'`+dateID+`')
    AND dateID < dateadd(day,-3,'`+dateID+`')
        
    select avg (level) from test
    WHERE dateID > dateadd(day,-6,'`+dateID+`')
    AND dateID < dateadd(day,-4,'`+dateID+`')
        
    select avg (level) from test
    WHERE dateID > dateadd(day,-7,'`+dateID+`')
    AND dateID < dateadd(day,-5,'`+dateID+`')`, function (err, recordset) {

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