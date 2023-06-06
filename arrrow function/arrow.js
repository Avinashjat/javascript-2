const sayhello = (name,greeting) =>    console.log(greeting +"hello baby"+name)

sayhello("jaan","good morning")

const x ={
    name : "avinash ",
    role : "developer",
    exp :  "30",

    show : function(){
        // let that = this
        setTimeout (()=>{
       console.log(`the  name is ${this.name}\n  the role is ${this.role}`)
    },2000)
}
}
console.log(x.name,x.role)
x.show()