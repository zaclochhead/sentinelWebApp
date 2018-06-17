
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
const router = express.Router();
//var request = require('../../server');

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
    // connect to your database
    if(sql != null){
        sql.close();    
    }    
    sql.connect(config, function (err) {

        if (err) console.log(err); 

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query(`SELECT TOP 1 * FROM test ORDER BY ID DESC`, function (err, recordset) {
            //I added these 2 lines
            if (err) res.send(err);
            sql.close();
            // send records as a response
            res.send(recordset.recordset[0]); 
        });
    });
});
module.exports = router;