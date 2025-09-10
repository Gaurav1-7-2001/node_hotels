const express = require('express');
const app =express();

const db=require('./db')

app.get('/',function(req,res){
    res.send("welcome to my hotel.... how can i help you , we have menus list !");
})

// app.get('/dosa', (req,res)=>{
//     res.send("sure sir i would like to serve dosa !");
// });

// app.get("/idli", (req,res)=>{
//     var cutomized_idli ={
//         name : "rava idli",
//         size : '10 cm diameter',
//         is_sambhar :true
//     };
//     res.send(cutomized_idli);
// })

app.listen(3000,()=>{
    console.log("Listening on port 3000");
});