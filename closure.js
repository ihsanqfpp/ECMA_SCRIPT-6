// message  = "good morning";

// function hello (){
//     message = "good afternooon"
//     {
//         message = "good evening";
//         console.log("hello !" +message)
//     }
// }
// hello();

//LAXICAL SCOPING
// function outer(){
//     let userName = "ihsan ullah";
//     function inner (){
//         console.log( "inner : " ,userName)
//         let message = "how are u";
// }
//     inner();
    
// }
// outer();
// console.log("outer : " , userName);

//CLOSURE

// function green() {
//     document.body.style.backgroundColor = "green"; // Correct property name
// }
// function blue(){
//     document.body.style.backgroundColor = "blue";

// }

// function clickHandler(color){
//     return function(){
//         document.body.style.backgroundColor = `${color}`
//     }
// }
// document.getElementById("greenButton").onclick = clickHandler("green")
// document.getElementById("blueBtn").onclick = clickHandler("blue")



