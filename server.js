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

// Configure Port 3000
app.listen(3000, () => {
    console.log('Express is listening on Port:3000')
});