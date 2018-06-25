
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {
        
    currentTime = new Date().getTime()/1000; 
    timeID = req.query.timeID;
    dateID = req.query.dateID;
    level = req.query.level;
    io.emit('level', JSON.parse('{"level": ' + level + '}')); 

    // query to the database and get the records
    request.query(`INSERT into test (level, dateID, ID, timeID) values (`+level+`,'`+ dateID + `',` + currentTime + `,'`+timeID+`')`, function (err, recordset) {
        //I added these 2 lines
        if (err) res.send(err);
        // sql.close();
        // send records as a response
        else res.send(recordset); 
    });
});
module.exports = router;