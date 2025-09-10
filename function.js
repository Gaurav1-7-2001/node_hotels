// console.log("server is running....");

// // function add(a,b){
// // return a+b;
// // }

// var add = function(a,b){
//     return a+b;
// }

// var result =add(3,3);
// console.log(result);

// var sub =(a,b)=>{
//     return a-b;
// }
// var res =sub(5,3);
// console.log("sub is ..",+res);

// var mul =(c,d)=>c*d;
// var mul_res =mul(4,3);
// console.log("mul is ..",+ mul_res);


// // call back function 

// // function callback(){
// //     console.log("this is call back function...");
// // }


// var add =function(a,b,callback){
//     res =a+b;
//     console.log(res);
//     callback();
// }

// // add(5,6,callback);
// add(6,3,function(){
//     console.log("this is call back function ..");
// })
// add(3,4,()=>console.log("add conplete  back fucntion.."));


console.log("this file is export ...");

var age =18;

var add = function(a,f){
    return a+f;

}

module.exports = {
    age,
    add

}