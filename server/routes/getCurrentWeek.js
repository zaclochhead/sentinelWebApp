
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {

    timeID = req.query.timeID;
    

    request.query(`
    select avg (level) from test
    WHERE dateID > dateadd(day,0,'`+timeID+`')
    AND dateID < dateadd(day,1,'`+timeID+`')
    
    select avg (level) from test
    WHERE dateID > dateadd(day,-1,'`+timeID+`')
    AND dateID < dateadd(day,0,'`+timeID+`')
    
    select avg (level) from test
    WHERE dateID > dateadd(day,-2,'`+timeID+`')
    AND dateID < dateadd(day,-1,'`+timeID+`')
    
    select avg (level) from test
    WHERE dateID > dateadd(day,-3,'`+timeID+`')
    AND dateID < dateadd(day,-2,'`+timeID+`')

    select avg (level) from test
    WHERE dateID > dateadd(day,-4,'`+timeID+`')
    AND dateID < dateadd(day,-3,'`+timeID+`')
        
    select avg (level) from test
    WHERE dateID > dateadd(day,-5,'`+timeID+`')
    AND dateID < dateadd(day,-4,'`+timeID+`')
        
    select avg (level) from test
    WHERE dateID > dateadd(day,-6,'`+timeID+`')
    AND dateID < dateadd(day,-5,'`+timeID+`')`, function (err, recordset) {

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