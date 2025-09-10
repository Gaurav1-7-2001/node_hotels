const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// const Person =require('./models/Person')
// const MenuItems =require('./models/MenuItems');



// import person routes file

const personRoutes= require('./routes/personRoutes');
app.use('/person',personRoutes);

// import menuItems route files
const menuRoutes =require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

app.listen(3000 , ()=>{
    console.log("Listening on port 3000..");
});