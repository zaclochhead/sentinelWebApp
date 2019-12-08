
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {
        
    dateID = req.query.dateID;
    timeID = req.query.timeID;
    deviceID = req.query.deviceID;

    if(dateID == null && timeID == null){
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
        timeID = dateID + " " + time + ".000"; 
    }
    
    level = req.query.level;
    console.log(level)
    if(deviceID == null || deviceID == 1){
        io.emit('level', JSON.parse('{"level": ' + level + '}')); 
    }
    else if(deviceID == 2){
        io.emit('levelTwo', JSON.parse('{"level": ' + level + '}')); 
    }
    else if(deviceID == 3){
        io.emit('levelTwo', JSON.parse('{"levelThree": ' + level + '}')); 
    }
    console.log("HERE")
    // query to the database and get the records
    // request.query(`INSERT into test (level, dateID, ID, timeID) values (`+level+`,'`+ dateID + `',` + currentTime + `,'`+timeID+`')`, function (err, recordset) {
    //     //I added these 2 lines
    //     if (err) res.send(err);
    //     // sql.close();
    //     // send records as a response
    //     else res.send(recordset); 
    // });
    res.send("done")
});
module.exports = router;