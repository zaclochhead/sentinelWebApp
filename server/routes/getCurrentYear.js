
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {
    
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    request.query(`
    SELECT avg(level) FROM test 
    WHERE MONTH(dateID) = `+currentMonth+` AND YEAR(dateID) = `+ (currentYear)+`
    
    SELECT avg(level) FROM test 
    WHERE MONTH(dateID) = `+(currentMonth-1)+` AND YEAR(dateID) = `+(currentYear)+`
    
    SELECT avg(level) FROM test 
    WHERE MONTH(dateID) = `+(currentMonth-2)+` AND YEAR(dateID) = `+(currentYear)+`
    
    SELECT avg(level) FROM test 
    WHERE MONTH(dateID) = `+(currentMonth-3)+` AND YEAR(dateID) = `+(currentYear)+`

    SELECT avg(level) FROM test 
    WHERE MONTH(dateID) = `+(currentMonth-4)+` AND YEAR(dateID) = `+(currentYear)+`
        
    SELECT avg(level) FROM test 
    WHERE MONTH(dateID) = `+(currentMonth-5)+` AND YEAR(dateID) = `+(currentYear)+`
        
    SELECT avg(level) FROM test 
    WHERE MONTH(dateID) = `+(currentMonth-6)+` AND YEAR(dateID) = `+(currentYear)+`

    SELECT avg(level) FROM test 
    WHERE MONTH(dateID) = `+(currentMonth-7)+` AND YEAR(dateID) = `+(currentYear)+`
        
    SELECT avg(level) FROM test 
    WHERE MONTH(dateID) = `+(currentMonth-8)+` AND YEAR(dateID) = `+(currentYear)+`
        
    SELECT avg(level) FROM test 
    WHERE MONTH(dateID) = `+(currentMonth-9)+` AND YEAR(dateID) = `+(currentYear)+`

    SELECT avg(level) FROM test 
    WHERE MONTH(dateID) = `+(currentMonth-10)+` AND YEAR(dateID) = `+(currentYear)+`
        
    SELECT avg(level) FROM test 
    WHERE MONTH(dateID) = `+(currentMonth-11)+` AND YEAR(dateID) = `+(currentYear), function (err, recordset) {

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