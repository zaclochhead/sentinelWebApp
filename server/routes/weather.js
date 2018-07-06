const express = require('express');
const router = express.Router();
var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C



/* GET api listing. */
router.get('/', (req, res) => {
/*     timeFormate = req.query.timeFormat;
    timeID = req.query.timeID; */
weather.find({search: 'Auckland, NewZealand', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
    res.send(result);
    });
});


module.exports = router;