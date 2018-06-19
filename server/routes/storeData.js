
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var ID = 20;
//const io = require("../../server").test;
var level = 10; 
const router = express.Router();
//var request = require('../../server');
var i =0;
// config for your database
var config = {
    user: 'sentinelwater', // update me
    password: 'Imagine18', // update me
    server: 'sentinelserver.database.windows.net', // update me
    database: 'sentinelbeta',
    options: {
      encrypt: true
    }
};

router.get('/', function (req, res) {
    console.log("request")
    console.log(req.query.level)
    console.log("end req");
    i++;
    currentTime = new Date().getTime()/1000; 
    level = Math.random() * 200;
    temperature = Math.random() * 30;
    temperature = Math.ceil(temperature); 
    level = Math.ceil(level);
    // connect to your database
/*     if(sql != null){
        sql.close();    
    }    
    sql.connect(config, function (err) {
        if (err) console.log(err);

        // create Request object
       var request = new sql.Request();
*/
        // query to the database and get the records
        request.query(`INSERT into test (level,timeID, dateID, ID) values (`+req.query.level+`, '2018-06-13 13:48:10', '2018-06-13',` + currentTime + ')', function (err, recordset) {
            //I added these 2 lines
            if (err) res.send(err);
           // sql.close();
            // send records as a response
            res.send(recordset); 
        });
   // });
    io.emit('message',JSON.parse('{"message": '+level+'}'));
    if(i>10){
    io.emit('temperature', JSON.parse('{"temperature": ' + temperature + '}')); 
    i=0;
    }
});
module.exports = router;