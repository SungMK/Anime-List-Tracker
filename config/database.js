const mongoose = require('mongoose');

// Connect to database
mongoose.connect(process.env.DATABASE_URL);

// Variable stored with connection reference 
const db = mongoose.connection;

// Listener for connected events 
db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} on ${db.host} port:${db.port}`);
});