
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {
    currentTime = new Date().getTime()/1000; 
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
    timeID = dateID + " " + time; 
    level = req.query.level;
    io.emit('message',JSON.parse('{"message": '+level+'}'));
    io.emit('temperature', JSON.parse('{"temperature": ' + level + '}')); 

    // query to the database and get the records
    request.query(`INSERT into test (level,timeID, dateID, ID) values (`+level+`,'`+timeID+`','`+ dateID + `',` + currentTime + ')', function (err, recordset) {
        //I added these 2 lines
        if (err) res.send(err);
        // sql.close();
        // send records as a response
        else res.send(recordset); 
    });
});
module.exports = router;