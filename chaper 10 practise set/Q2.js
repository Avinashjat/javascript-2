

let n= localStorage.getItem("note")
alert("your node is "+n)

let p = prompt("enter your note")


if(p){
    localStorage.setItem("note",p)
}



let c = confirm("do you want to delete your node")

if(c) {
    localStorage.removeItem("node")
    alert("node delete succesfull")
}