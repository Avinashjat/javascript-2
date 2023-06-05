// messege = "good evening"
// function hello1 (){
//      let messege = "good morning"
     
//         // let messege = "good student"
//     console.log("hello world :" + messege)

// let c =function hello2 (){
//     console.log("hello ia m c "+ messege)
// } 
// return c
// }
// c =hello1()  
// c ()



// function init (){
     
//     let name = " mozila ";
//     function display (){

//         console.log(name);
//     }
// name = " avi"
//     return display
// }


function returnf(){
const x = ()=>{
    let a = 1
    console.log(a)
    const y = ()=>{
        let a = 2 
        console.log(a)
        const z = ()=>{
            let a = 3
            console.log(a)
        }
      z()
    }
 y()
}
return x
}

let g = returnf()
g()

// let c =init()
// c()