class human {

constructor(name ,favfood){
   this.name = name
   this.favfood = favfood
}
walk (){
    console.log(this.name +" human is walking")
}
}

class student extends human {

    walk () {
        console.log(this.name +" student is walking")
    }
    
}

let s = new student("raja","bhindi")
s.walk()

console.log( s instanceof student)