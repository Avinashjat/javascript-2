let arr =[2,5,6,4]
let obj ={...arr}
console.log(obj)


function sum (v1,v2,v3,v4){

    return v1+v2+v3+v4
}

console.log(sum(...arr))



let obj1 = {
    name : "avi",
    compnay : "abc ",
    address :"ram ram "
}

console.log({...obj1,name:"raju"})