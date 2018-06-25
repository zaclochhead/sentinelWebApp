
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {

    var timeFormat; 
    timeFormate = req.query.timeFormat;
    timeID = req.query.timeID;
    
    

    request.query(`
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-1)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(0)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-2)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-1)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-3)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-2)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-4)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-3)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))

    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-5)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-4)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-6)+`,CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-5)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-7)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-6)+`,CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-8)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-7)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-9)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-8)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-10)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-9)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-11)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-10)+`,CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-12)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-11)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-13)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-12)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-14)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-13)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-15)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-14)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-16)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-15)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-17)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-16)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-18)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-17)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-19)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-18)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-20)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-19)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-21)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-20)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-22)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-21)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-23)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-22)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-24)+`,CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-23)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))`, function (err, recordset) {

        if (err) {
            res.send(err);
        }
        // sql.close();
        // send records as a response
        else {
           //
            res.send((recordset));
            io.emit('dailyWaterLevels',recordset.recordsets);    
        } 
    });
});
module.exports = router;