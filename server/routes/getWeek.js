
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {
    var dayOfWeek = new Date().getDay();

    timeID = req.query.timeID;

    if(dayOfWeek === 0){
        dayOfWeek = 7;
    }

    const daysUntilSunday = 7-dayOfWeek;

    const week = req.query.week;
    request.query(`
    select avg (level) from test
    WHERE dateID > dateadd(day,`+(0-week*7 + daysUntilSunday)+`,'`+timeID+`')
    AND dateID < dateadd(day,`+(1-week*7 + daysUntilSunday)+`,'`+timeID+`')
    
    select avg (level) from test
    WHERE dateID > dateadd(day,`+(-1-week*7 + daysUntilSunday)+`,'`+timeID+`')
    AND dateID < dateadd(day,`+(0-week*7 + daysUntilSunday)+`,'`+timeID+`')
    
    select avg (level) from test
    WHERE dateID > dateadd(day,`+(-2-week*7 + daysUntilSunday)+`,'`+timeID+`')
    AND dateID < dateadd(day,`+(-1-week*7 + daysUntilSunday)+`,'`+timeID+`')
    
    select avg (level) from test
    WHERE dateID > dateadd(day,`+(-3-week*7 + daysUntilSunday)+`,'`+timeID+`')
    AND dateID < dateadd(day,`+(-2-week*7 + daysUntilSunday)+`,'`+timeID+`')

    select avg (level) from test
    WHERE dateID > dateadd(day,`+(-4-week*7 + daysUntilSunday)+`,'`+timeID+`')
    AND dateID < dateadd(day,`+(-3-week*7 + daysUntilSunday)+`,'`+timeID+`')
        
    select avg (level) from test
    WHERE dateID > dateadd(day,`+(-5-week*7 + daysUntilSunday)+`,'`+timeID+`')
    AND dateID < dateadd(day,`+(-4-week*7 + daysUntilSunday)+`,'`+timeID+`')
        
    select avg (level) from test
    WHERE dateID > dateadd(day,`+(-6-week*7 + daysUntilSunday)+`,'`+timeID+`')
    AND dateID < dateadd(day,`+(-5-week*7 + daysUntilSunday)+`,'`+timeID+`')`, function (err, recordset) {

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