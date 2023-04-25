// Dependencies
const express = require('express');
const logger = require('morgan');
const indexRoutes = require('./routes/index');

// Initialize Express App
const app = express();

// Environment Variables
require ('dotenv').config();
require ('./config/database');

// Configure App Settings 
app.set('view engine', 'ejs');

// Middleware 
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Mounted Routes
app.use('/', indexRoutes);

// tell the application to listen for requests
app.listen(3000, () => {
    console.log('express is listening on port:3000');
});

// app.use('*', (req, res) => {
//     res.render('404', {title: '404 - Page Not Found'});
// });