//let and const are the local scope but the var is global scope

// {
// let a =10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c)
// }


// {
// let a =10;
// const b = 20;
// var c = 30;
// }
// //console.log(a);//this show the output is undefined
// //console.log(b);//this show the output is undefined
// console.log(c)//show the output is 30

// let a = 400;
// {
//     let a = 10;
//     const b = 20;
//     console.log("INNER : " ,a)
// }
// console.log(a)

//we access the parent child in child
// {
//     let a = 10;
//     const b = 20;
//     {
//         console.log(a)//we access the parent child in child
//     }
//     console.log(b)
// }

// //but  can not  access the child in parent 
// {
//     let a = 10;
//     const b = 20;
//     {
//        let c = 20;
//         console.log(a)

//     }
//     console.log(c)//but  can not  access the child in parent  
// }

//global scope 
//  var x = "Hi! ihsan ullah"

//  function name(){
//     console.log(x)
//  }
//  name();//global veriable are accessable from anywhere

//  console.log(x)

//function scope

// function example(){
//     var fs = "Hi ! ihsan ullah";
//     console.log(fs)
// }
// example();
// console.log(fs)//not accessbile outside from the function

//block scope 

// function ihsan(){
//     let a = "ihsan ullah orakzai";
//     if(true){
//         console.log(a)// parent are acccessed in child node
//     }
// }
// ihsan();

// function ihsan(){
//     let a = "ihsan ullah orakzai";
//     if(true){
//     }
//     console.log(a)
// }
// ihsan();



// function ihsan(){
//     const c = "from hangu"
//     if(true){
//         let a = "ihsan ullah orakzai";
//         console.log(a)//child are only accesses in child node
//     }
//     console.log(c)
// }

// ihsan();


