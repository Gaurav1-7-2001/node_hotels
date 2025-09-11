const mongoose = require('mongoose');
require('dotenv').config();

// mongoose connection url
// local mongodb url
const mongoURL = process.env.MONGODB_URL_LOCAL; // replace 'mydatabase' with your databse name

// online mongodb url
// const mongoURL = process.env.MONGODB_URL;
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