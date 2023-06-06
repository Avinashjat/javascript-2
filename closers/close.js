// message = "good morning"
// function hello(){

//    let  message = "good afternoon"
    
//     //    let message = "good evening"
//     console.log("hello baby :"+ message)

// let c = function hello2 (){
// console.log(" i am here " +message)
// }
// return c 
// }
// let c = hello()
// c()


function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    name = "avinash "
    displayName();
    
  }
//   init();




function returnfunc(){

let x= ()=>{
    let a =1;
    console.log(a)
let y= ()=>{
    let b =2;
    console.log(b)
let z= ()=>{
    let c =3;
    console.log(c)
}
z()
}
y()
}
return x
}

let c =returnfunc()
c()




  