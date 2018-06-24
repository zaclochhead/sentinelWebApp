
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {
    const hour = req.query.hour;

    year = new Date().getFullYear();
    month = new Date().getMonth()+1;
    month = (("0" + month).slice(-2));
    date = new Date().getDate();
    date = (("0" + date).slice(-2));
    hours = new Date().getHours();
    hours = (("0" + hours).slice(-2));
    minutes = new Date().getMinutes();
    minutes = (("0" + minutes).slice(-2));
    seconds = new Date().getSeconds();
    seconds = (("0" + seconds).slice(-2));
    time = hours + ':' + minutes + ':' + seconds;
    dateID = (year + "-" + month + "-" + date);
    timeID = dateID + " " + time + ".000"; 

    const day = new Date();

    //get the number of hours until midnight
    var currentHour = day.getHours();
    var timeFormat; 


    if(currentHour>=12){
        timeFormat = " PM";
    }
    else{
        timeFormat = " AM";
    } 

    currentHour = currentHour -24;

    request.query(`
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-1-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(0-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))

    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-2-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-1-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-3-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-2-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-4-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-3-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))

    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-5-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-4-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))


    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-6-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-5-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-7-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-6-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-8-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-7-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-9-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-8-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-10-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-9-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-11-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-10-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-12-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-11-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-13-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-12-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-14-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-13-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-15-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-14-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-16-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-15-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-17-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-16-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-18-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-17-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-19-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-18-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-20-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-19-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-21-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-20-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-22-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-21-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-23-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-22-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    
    select avg(level) from test
    WHERE timeID >  DATEADD(HOUR,`+(-24-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))
    AND timeID <  DATEADD(HOUR, `+(-23-currentHour - 24*hour)+`, CONVERT(VARCHAR(24),stuff(convert(varchar(19),'`+timeID+`' + '` + timeFormat +`', 126),11,1,' '),121))`, function (err, recordset) {

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