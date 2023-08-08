const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://ravindra:1234@cluster0.aywfm1p.mongodb.net/Cendrol?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;