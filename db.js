const mongoose = require('mongoose');

// mongoose connection url

const mongoURL = 'mongodb://localhost:27017/hotels'; // replace 'mydatabase' with your databse name

// set up mongodb connection;
mongoose.connect(mongoURL ,{
    useNewUrlParser :true,
    useUnifiedTopology :true
});

// get the default connection
// mongoose maintain the default connection 

const db = mongoose.connection;

// define event listener  for database

db.on('connected', ()=>{
    console.log('connected to mongodb server....');
});


db.on('error', (err)=>{
    console.error(' mongodb server. error', err);
});

db.on('disconnected', ()=>{
    console.log('mongodb server dis connected');
});

// export database connection

module.exports=db;