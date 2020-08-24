const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');
const config = require('config');

// @route        POST  /contact
// @desc         Send email to owner
// @ access      Public
router.post('/', (req, res) => {
  console.log(req.body);
  nodemailer.createTestAccount((err, account) => {
    const { name, email, message } = req.body;
    const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${name}</li>
    <li>Email: ${email}</li>
    </ul>
    <h3>Message:</h3>
    <p>${message}</p>
    `;

    //Transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jd.contactcontrol@gmail.com',
        pass: config.get('emailSecret'),
      },
    });

    // Model
    let mailOptions = {
      from: 'jd.contactcontrol@gmail.com',
      to: 'jduarte0912@gmail.com',
      subject: 'Someone Visited',
      html: htmlEmail,
      text: message,
    };

    // Send
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        return console.log('Error Occurs:', err);
      } else {
        console.log('Email Sent!!!', data.messageID, data.response);
      }
    });
  });
});

module.exports = router;
