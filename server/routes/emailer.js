var nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zaclochhead@gmail.com',
    pass: 'Chicka123'
  }
});

var mailOptions = {
  from: 'zaclochhead@gmail.com',
  to: 'zloc702@aucklanduni.ac.nz',
  subject: 'Water Tank',
  text: 'Water tank is running low'
};




/* GET api listing. */
router.get('/', (req, res) => {
/*     timeFormate = req.query.timeFormat;
    timeID = req.query.timeID; */
    console.log("here");
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.send('email failed');
        } else {
          res.send('email sent');
        }
    });

});


module.exports = router;