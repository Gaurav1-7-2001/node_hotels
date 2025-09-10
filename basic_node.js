var fs =require('fs');
var os = require('os');

// var user =os.userInfo(); 
// var user =os.loadavg();
// console.log(user); 
// console.log(user);
// console.log(user.username);

// fs library

// fs.appendFile('greeting.txt',"hello.." + user.username + '!\n',()=>
//     {console.log("file is created..")});

// console.log(os);

// export files is here 

const func = require("./function.js");

console.log("server file is avialable..");

var age =func.age;
console.log(age);

var res =func.add(age+24,20);
console.log("result  is..", +res);