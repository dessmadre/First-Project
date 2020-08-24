const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  from: {
    type: String,
    default: 'jd.contactcontrol@gmail.com',
  },
  to: String,
  subject: String,
  text: String,
  html: String,
});

module.exports = mongoose.model('contact', ContactSchema);
