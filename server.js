const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.static('./public'));

// Define Routes
app.use('/api/blog', require('./routes/blog/blog'));
app.use('/api/admin', require('./routes/auth'));
app.use('/api/register', require('./routes/user'));
app.use('/api/contact', require('./routes/contact'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
