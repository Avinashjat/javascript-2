// let a = 33;
// let b = "avinash ";

// let raman ={
//     ram : 44,
//     karan: "jaipur ",
//     jay : 424
// }


// let p = 33;
// let d = 64;
// var k = 88 ;
// console.log("add the number ",  p+d);
// console.log("sub the number ",  d-p);
// console.log("multi the number ",p*d);
// console.log("div the number ",  p/d);

// var f = k ;
// f += 2;
// console.log(f);



// function avg(a, b ,c){
//     return (a+b+c)/2
// }



// const avg=(a, b ,c)=>{
//     return (a+b+c)/2
// }

// let h1 = avg(4,5,7)
// let h3 = avg(44,15,27)
//  let h2 = avg(14,15,17)
// console.log(h1,h2,h3)


// let arr = [2,4,5,686,5,67,754,75]
// console.log(arr[7])
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach(function(element){
// //     console.log(element)
// // })


// const tt = new Date () ;
// console.log(tt)

// console.log(tt.getDate());
// console.log(tt.getDay());
// console.log(tt.getMinutes());
// console.log(tt.getUTCDate());




// n  natural number 


// let sum = 0;
// let n=  prompt("enter a number")

// p =  Number.parseInt(n) 

// for(let i =0; i<n; i++ ){
//     sum = sum+(i+1)
// }
// console.log("sum of n natural number is =",sum)


// let obj ={
//     ram : 44,
//     vinod : 55,
//     kaju : 34,
//     karan : 88
// }
// for(let a in obj){
//     console.log(a+" "+obj[a])
// }

// string matheod

// let nam = "Avinash"
// let ram = "sanjay      "
// // console.log(nam)

// console.log(nam.toUpperCase())
// console.log(nam.toLowerCase())
// console.log(nam.slice(2,5))
// console.log(nam.concat("frd of", ram))
// console.log(nam.replace("Avi","kal"))
// console.log(ram.trim())


// let arr =[22,55,67,86,95,87,6]
// console.log(arr)

// // console.log(arr.toString())

// console.log(arr.join(' AND '))

// console.log(arr.pop())
// console.log(arr)
// console.log(arr.push(55))
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)
// console.log(arr.unshift(44))
// console.log(arr)


let n2 = [43,6,27,85,33,778,46,43,9,3,77,]
let n3 = [5,8,23,95,24,867,68,3476,35,4,4]

delete n1[4]
console.log(n1)

let k2 = n1.concat(n2,n3)
console.log(k2)

let compare =(a,b)=>{
return b-a;
}

console.log(n1.sort(compare))

n1.splice(2,5,1000,2000,3000,4000,5000)
console.log(n1)


let n6=n1.slice(2,5)
console.log(n6)



let n1 = [2,6,9,17,5,49,4,76,22]

for (let i = 0; i<n1.length; i++){
    console.log(n1[i])
}

n1.forEach((element)=>{
console.log(element*element)
})

let s1 = "aviansh"
 let p=Array.from(s1)

 console.log(p)


 for(let i of s1){
    console.log(i)
 }
 for(let i in s1){
    console.log(i)
 }

let arr1 =[ 11,3,44,55,32,54]

let a1 =arr1.map((element,index,array)=>{
    console.log(element,index,array)
    return element+ index;
})
console.log(a)

let arr2 = [33,64,75,3,76,85,4] 
let a2 = arr2.filter((a)=>{
   return a<10
})

console.log(a2)
let arr3 = [33,64,75,3,76,85,4]

let a3 = arr3.reduce((h1,h2)=>{
    return h1*h2;
})
console.log(a3)



