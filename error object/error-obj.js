try {

let age = prompt("enter your age")
age =Number.parseInt(age)
if(age>150){
    throw new Error("invalid age")
}


//     console.log(avi)
//   throw new referenceError("harry is not good")
} 
catch (error) {

    console.log(error.name)
    console.log(error.message)
    console.log(error)
}
console.log("this is running")