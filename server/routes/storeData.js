
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
var level = 10; 
const router = express.Router();
// config for your database

router.get('/', function (req, res) {
/*     console.log("request")
    console.log(req.query.level)
    console.log("end req"); */
    currentTime = new Date().getTime()/1000; 
    level = req.query.level;//Math.random() * 200;
    //temperature = req.query.temperature;//Math.random() * 30;
    //temperature = Math.ceil(temperature); 
    //level = Math.ceil(level);
    io.emit('message',JSON.parse('{"message": '+level+'}'));
    //if(i>10){
    io.emit('temperature', JSON.parse('{"temperature": ' + level + '}')); 

    // query to the database and get the records
    request.query(`INSERT into test (level,timeID, dateID, ID) values (`+level+`, '2018-06-13 13:48:10', '2018-06-13',` + currentTime + ')', function (err, recordset) {
        //I added these 2 lines
        if (err) res.send(err);
        // sql.close();
        // send records as a response
        else res.send(recordset); 
    });
});
module.exports = router;