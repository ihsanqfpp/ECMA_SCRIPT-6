//let and const are the local scope but the var is global scope

// {
//     let a =10;
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

