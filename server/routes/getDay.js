
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {
    const hour = req.query.hour;
    request.query(`
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(11-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(12-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(10-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(11-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(9-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(10-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(8-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(9-hour*24)+`, GETDATE())

    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(7-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(8-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(8-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(9-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(7-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(8-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(6-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(7-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(5-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(4-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(4-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(3-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(3-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(2-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(1-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(0-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(0-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(-1-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(-1-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(-2-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(-2-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(-3-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(-3-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(-4-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(-4-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(-5-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(-5-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(-6-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(-6-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(-7-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(-7-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(-8-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(-8-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(-9-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(-9-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(-10-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(-10-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(-11-hour*24)+`, GETDATE())
    
    select 
    avg(level)
    from test
    WHERE timeID >  DATEADD(HOUR, `+(-11-hour*24)+`, GETDATE())
    AND timeID <  DATEADD(HOUR, `+(-12-hour*24)+`, GETDATE())`, function (err, recordset) {

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