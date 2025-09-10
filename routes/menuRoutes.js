const express =require('express');
const router =express.Router();

const MenuItems = require('../models/MenuItems');


// post method for menuitems

router.post('/' ,async(req,res)=>{
    try {
        
        const data = req.body;

        const newMenuItem = new MenuItems(data);

        const response =await newMenuItem.save();
        console.log("data saved..");
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({error : "internal server error.."});
    }
});


// get method for menu

router.get('/',async(req,res)=>{
try {
    
    const response =await MenuItems.find();
    console.log("data fetch  successfully..");
    res.status(200).json(response);

} catch (err) {
    console.log(err);
    res.status(500).json({error : "internal server error..."});
}

});

// parameterized api 



module.exports =router;