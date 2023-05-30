class animals{
    constructor(name ,color){
     this.name = name
     this.color = color
    }

    run(){
        console.log(this.name + "  is running and color of animals is " +this.color)
    }
    shout(){
        console.log(this.name + "  is jumping on table and color of animals is " +this.color)
    }
}


class monkey extends animals {
       eat(){
        console.log(this.name + " is eating banana and color is "+ this.color )
       }

       hide(){
          console.log(`${this.name } is hide  `)
       }

}

let a = new animals ("dog", "blue")
let m = new monkey ("cow", "black")

m.run()
m.shout()
m.eat()
m.hide()